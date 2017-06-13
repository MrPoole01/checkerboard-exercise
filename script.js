// Your JS goes here
var color1 = 0;
var color2 = 255;

function checkBoard() {
  for (var i = 0; i < (window.innerHeight)/4; i++) {

    var box = document.createElement('div')
    document.body.appendChild(box)

    box.style.width = '11.1%';
    box.style.paddingBottom = '11.1%';
    box.style.float = 'left';


    if (i % 2 === 0) {
      box.style.backgroundColor = ('#000000');
    } else {
      box.style.backgroundColor = ('#d70909');
    }
    color1++
    color2--
  }
}
checkBoard()
