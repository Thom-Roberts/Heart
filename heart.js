//NOTE: HIDE mouse cursor as soon as the page loads

window.onload = function() {
  myFunc();
  moveFlashlight();
};

/*window.onscroll = function() {
  myFunc();
};*/

function myFunc()
{
  var distanceFromTop = 0;
  var audio = document.getElementById("heartbeat");
  //NOTE: Update this max distance once you have the spacing all figured out
  var maxDistanceFromTop = 3000; //max distance user can scroll is 1977 pixels
  audio.volume = 0.0; //initialize it to 0%

  window.onscroll = function() {
    distanceFromTop = document.body.scrollTop;
    audio.volume = distanceFromTop / maxDistanceFromTop;
  };
}

function moveFlashlight()
{
  var container = document.querySelector("#container");

  function move(e)
  {
    var image = document.getElementById('flashlight');
    var imageWidth = image.width;
    var imageHeight = image.height;
    image.style.left = e.pageX - (imageWidth / 2);
    image.style.top = e.pageY - (imageHeight / 2);
  }
  container.addEventListener("mousemove", move, false);
  return;
}
