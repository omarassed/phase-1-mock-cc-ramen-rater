// write your code here
fetch('http://localhost:3000');

var ramenMenu = document.getElementById('ramen-menu');
var image1 = document.createElement('img')
image1.src = '/Users/omarsaeed/Development/code/phase-1-mock-cc-ramen-rater/assets/ramen/gyukotsu.jpg'
var image2 = document.createElement('img')
image2.src = 'assets/ramen/kojiro.jpg'
var image3 = document.createElement('img')
image3.src = 'assets/ramen/naruto.jpg'
var image4 = document.createElement('img')
image4.src = 'assets/ramen/nirvana.jpg'
var image5 = document.createElement('img')
image5.src = 'assets/ramen/shoyu.jpg'

ramenMenu.appendChild(image1)
ramenMenu.appendChild(image2)
ramenMenu.appendChild(image3)
ramenMenu.appendChild(image4)
ramenMenu.appendChild(image5)

