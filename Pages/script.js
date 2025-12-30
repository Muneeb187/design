
alert("welcome to HYDRO ofiicial site ! ")

 console.log('JS loaded');

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    console.log('Clicked:', this.getAttribute('href'));

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });

});

                // login / signup

document.getElementById("Login").onclick = function() {
  window.location.href = "../Form/Form.html"; // navigate to sibling Form/Form.html
};
