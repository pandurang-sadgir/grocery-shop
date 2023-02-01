var menus = document.getElementById('menu-bar');
var bar = document.getElementById('menu-btn');
var close = document.getElementById('close-btn');

if(bar) {
  bar.addEventListener('click',()=>{
  menus.classList.add('active');
  });
}


if(close) {
  close.addEventListener('click',()=>{
  menus.classList.remove('active');
  });
}


document.onclick = function (clickEvent) {
  if(!bar.contains(clickEvent.target)){
  menus.classList.remove('active');
  }
}

console.log('javascript file is linked');
