$(function(){
    $('.hamburger div').on('click', function() {
        $('.list').slideToggle(500);
    });

});

// Get the modal
var form = document.getElementById("updateFrom");

// Get the button that opens the modal
var btn = document.getElementById("showUpdateForm");


// When the user clicks the button, open the modal 
btn.onclick = function() {
  form.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == form) {
    form.style.display = "none";
  }
}

// Get the modal
var formDel = document.getElementById("popupMessage");

// Get the button that opens the modal
var btnDel = document.getElementById("btnDel");


// When the user clicks the button, open the modal 
btnDel.onclick = function() {
  formDel.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == formDel) {
    formDel.style.display = "none";
  }
}