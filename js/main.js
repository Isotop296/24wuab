/*hamburger start*/
/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
/*hamburger end*/

/*slidenewgames start*//* 
  let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
*/
/*slidenewgames end*/
/*auto slide start*/
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 6500); // Change image every 2 seconds
}
/*auto slide end*/ 

/*camera start*//*
function openCam(){
  let All_mediaDevices=navigator.mediaDevices
  if (!All_mediaDevices || !All_mediaDevices.getUserMedia) {
     console.log("getUserMedia() not supported.");
     return;
  }
  All_mediaDevices.getUserMedia({
     audio: true,
     video: true
  })
  .then(function(vidStream) {
     var video = document.getElementById('videoCam');
     if ("srcObject" in video) {
        video.srcObject = vidStream;
     } else {
        video.src = window.URL.createObjectURL(vidStream);
     }
     video.onloadedmetadata = function(e) {
        video.play();
     };
  })
  .catch(function(e) {
     console.log(e.name + ": " + e.message);
  });
}*/
/*camera slut*/

