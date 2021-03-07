// when users hover on the Korean Alphabet
// table appears

let table = document.querySelector(".unicode-properties");
let hoverLetter = document.querySelector(".letter1");

hoverLetter.addEventListener("mouseover", function() {
 table.classList.add("active");
})

hoverLetterr.addEventListener("mouseout", hideTable);

function hideTable() {
  table.classList.remove("active");
}