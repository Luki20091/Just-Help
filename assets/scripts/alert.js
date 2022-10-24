

function alert(type, message) {
    var alert = document.getElementById("alert");
    var alertMsg = document.getElementById("alert-message");
    if (type == "error") {
        alert.style.background = "linear-gradient(30deg, #981b5b 1%, #e71d58 85%)";
    } else if (type == "warning") {
        alert.style.background = "linear-gradient(30deg, #98801b 1%, #e7bb1d 85%)";
    } else if (type == "info") {
        alert.style.background = "linear-gradient(30deg, #1b7298 1%, #1daee7 85%)";
    } else if (type == "succes") {
        alert.style.background = "linear-gradient(30deg, #1b9838 1%, #1de746 85%)";
    } else {
        return
    }
    alertMsg.innerHTML = message;
    alert.classList.add("alert-visible");
    setTimeout(() => {
        alert.classList.remove("alert-visible");
    }, 4000);
};

