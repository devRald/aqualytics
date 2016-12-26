var host = "http://iligtas.ph";

var Aqualytics = {
    login: function(serial) {
        $.ajax({
            url: host + "/hydroid/backend/index.php/api/v1/user/login",
            type: "POST",
            data: serial,
            success: function(result) {
                if (result != "") {
                    var jstr = JSON.stringify(result);
                    localStorage.setItem("userdata", btoa(jstr));
                    localStorage.setItem("activeDev", result.devices[0].device_id);
                    if (result.user_type == "admin") {
                        location.href = "./admin/dashboard.html";
                    }
                    if (result.user_type == "user") {
                        location.href = "./user/dashboard.html";
                    }
                } else {
                    alert("wala")
                }
            }
        })
    }
}
