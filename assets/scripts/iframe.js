document.getElementById("iframe-btn").addEventListener("click", function (event) {
    var iframe = document.getElementById("iframe");
    var iframeClass = iframe.className;

    switch (iframeClass) {
        case "iframe-active":
            iframe.classList.remove("iframe-active");

            break;
        default:
            iframe.classList.add("iframe-active");
    }
});


window.addEventListener('mouseup', function (event) {
    var box = document.getElementById("iframe");
    var box2 = document.getElementById("iframe-btn");
    if (event.target != box && event.target.parentNode != box && event.target != box2 && event.target.parentNode != box2) {
        var iframe = document.getElementById("iframe");
        iframe.classList.remove("iframe-active");
    }
});