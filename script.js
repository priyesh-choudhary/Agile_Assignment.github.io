$('.btn').click(function(){
  $(this).toggleClass("click");
  $('.sidebar').toggleClass("show");
});
  


const arrow = document.getElementById('arrow');
const navTxt = document.getElementById("navTxt");
const navBox = document.getElementById("navBox");
arrow.addEventListener('click', function() {
  if (arrow.classList.contains('fa-arrow-right')) {
    arrow.classList.remove('fa-arrow-right');
    arrow.classList.add('fa-arrow-left');

    navTxt.style.display="";

    navBox.style.display="none";
  } else {
    arrow.classList.remove('fa-arrow-left');
    arrow.classList.add('fa-arrow-right');
    
    navTxt.style.display="none";

    navBox.style.display="";
  }
});