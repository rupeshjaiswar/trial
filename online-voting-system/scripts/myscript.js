function callTimer() {

    setTimeout(function() {
        window.location.href = "done.html";
    }, 5000);

    var txt;


    txt = `VOTED / मतदान किया <i class="fas fa-check fa-2x" style='color:darkgreen;'></i>`;


    document.getElementById("result").innerHTML = txt;
}