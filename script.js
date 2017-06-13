
function randomcolors() {
   var letters = "abcdef0123456789";
   var hash = "#";
   for (var i = 0; i < 6; i++) {
     hash += letters[Math.floor(Math.random() * letters.length)];

   }return hash
}

function checkBoard() {
  for (var i = 0; i < (window.innerHeight)/4; i++) {

    var box = document.createElement('div')
    document.body.appendChild(box)

    box.style.width = '11.1%';
    box.style.paddingBottom = '11.1%';
    box.style.float = 'left';

      box.style.backgroundColor = randomcolors();
  }
}
checkBoard()
