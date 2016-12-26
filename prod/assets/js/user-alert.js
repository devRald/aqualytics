socket.on("alert", function(result) {
    toastr.options = {
        "closeButton": true,
        "newestOnTop": true,
        "hideDuration": "300",
        "positionClass": "toast-bottom-right"
    }
    $(".new-tag").html("new");
    if (result.type == "danger") {
        toastr.error(result.short, result.title)
    }
    if (result.type == "warning") {
        toastr.warning(result.short, result.title)
    }
})
