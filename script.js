function checkSyntax() {
    var popup = document.getElementById("popup");
    var messageElement = document.getElementById("popup-message");
    var vhdlCode = document.getElementById("vhdl-code").value;

    // Sample logic, replace with your actual syntax check logic
    var isSyntaxCorrect = vhdlCode.toLowerCase().includes("vhdl");

    if (isSyntaxCorrect) {
        messageElement.innerHTML = "Syntax is correct!";
    } else {
        messageElement.innerHTML = "Syntax is incorrect!";
    }

    // Display the popup
    popup.style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
