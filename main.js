// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

window.addEventListener("DOMContentLoaded", () => {
  let errorModal = document.getElementById("modal");
  errorModal.classList.add("hidden");

  let heartSpans = document.querySelectorAll(".like-glyph")

  for (const heart of heartSpans) {
    heart.addEventListener("click", (event) => {
      let heartSpan = event.target;
      if (heartSpan.classList.contains("activated-heart")) {
        heartSpan.classList.remove("activated-heart");
      } else {
        mimicServerCall()
        .then(resp => heartSpan.classList.add("activated-heart"))
        .catch(error => {
          errorModal.classList.remove("hidden")
          setTimeout(() => {
            errorModal.classList.add("hidden")
          }, 5000)
        })
      }
    })
  };
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
