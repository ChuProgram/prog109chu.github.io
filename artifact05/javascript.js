var myImages = ["https://cdn.pixabay.com/photo/2016/08/21/19/27/emoticon-1610573__480.png",
  "https://cdn.pixabay.com/photo/2016/08/10/21/01/emoji-1584282__480.png",
  "https://cdn.pixabay.com/photo/2016/08/29/11/55/emoticon-1628080__480.png",
  "https://cdn.pixabay.com/photo/2016/08/11/09/50/emoji-1585197__480.png",
  "https://cdn.pixabay.com/photo/2016/08/31/20/04/emoticon-1634515__480.png"
];


var captionImages = ["Smile!", "Haha. So. Funny.", "Nerds Have More Fun!", "ANGRY!!", "Sad..."];

var index = 0;

function updateImage() {
  document.getElementById("slideshow").src = myImages[index];
  document.getElementById("slideshow").alt = captionImages[index];
  document.getElementById("caption").textContent = captionImages[index];
}

function next() {
  if (myImages.length == index + 1) {
    index = 0;
  } else {
    index++;
  }
  updateImage();
}


function previous() {
  if (index === 0) {
    index = myImages.length - 1;
  } else {
    index--;
  }
  updateImage();
}


function autoSlide() {
  if (document.getElementById("auto").checked)
    next();
}
setInterval(autoSlide, 2000); // Next

var nextButton = document.getElementById("next");
var previousButton = document.getElementById("previous");

previousButton.addEventListener("click", previous, false);
nextButton.addEventListener("click", next, false);
