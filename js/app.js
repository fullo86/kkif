var front = document.querySelector(".face-front");
var back = document.querySelector(".face-back");
var flip = document.querySelector(".book-content");
var uno = document.querySelectorAll(".book");
var portada = document.querySelectorAll("#portada");

var contZindex = 2;
var customZindex = 1;

for (var i = 0; i < uno.length; i++) {
  uno[i].style.zIndex = customZindex;
  customZindex--;

  uno[i].addEventListener("click", function (e) {
    var tgt = e.target;
    var unoThis = this;

    unoThis.style.zIndex = contZindex;
    contZindex++;

    if (tgt.getAttribute("class") == "face-front") {
      unoThis.style.zIndex = contZindex;
      contZindex += 20;
      setTimeout(function () {
        unoThis.style.transform = "rotateY(-180deg)";
      }, 500);
    }
    if (tgt.getAttribute("class") == "face-back") {
      unoThis.style.zIndex = contZindex;
      contZindex += 20;

      setTimeout(function () {
        unoThis.style.transform = "rotateY(0deg)";
      }, 500);
    }

    if (tgt.getAttribute("id") == "portada") {
      flip.classList.remove("trnsf-reset");
      flip.classList.add("trnsf");
    }
    if (tgt.getAttribute("id") == "trsf") {
      flip.classList.remove("trnsf");
      flip.classList.add("trnsf-reset");
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  Swal.fire({
    // title: " E-Photobook",
    imageUrl:
      "https://dc547.4shared.com/img/omwlTi8bjq/s25/18b7ef49c90/Untitled?isRedirect=true&",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
    confirmButtonText: "Open",
  }).then((result) => {
    if (result.isConfirmed) {
      // Setelah pengguna mengklik OK
      var audio = document.getElementById("alert-sound");
      audio.play();
    }
  });
});
