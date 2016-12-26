socket.on("alert", function(result) {
    toastr.options = {
        "closeButton": true,
        "newestOnTop": true,
        "hideDuration": "300",
        "positionClass": "toast-bottom-right",
        "onclick":function(){
            $.ajax({
                url:host + "/aqualytics/backend/api/v1/read/notification/"+result.id,
                type:"POST"
            })

            $("main").append(`
                <div class="modal-card flex-center">
                    <div class="card card-notif">
                        <div class="card-block">
                            <h4 class="card-title">${result.title}</h4>
                            <hr>
                            <p class="card-text">${result.description}</p>
                        </div>
                        <div class="card-data">
                            <ul>
                                <li><i class="fa fa-clock-o"></i> ${result.date + " - " + result.time}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `);
        }
    }
    
    if (result.type == "danger") {
        toastr.error(result.short, result.title)
    }

    if (result.type == "warning") {
        toastr.warning(result.short, result.title)
    }
})