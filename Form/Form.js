document.getElementById("loginBtn").onclick = function(e) {
    e.preventDefault();
    
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = "Your data have been submitted";
    messageDiv.style.display = "block";
    
    setTimeout(function() {
        window.location.href = "Form.html";
    }, 2000);
};

