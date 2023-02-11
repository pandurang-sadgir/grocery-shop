var menus = document.getElementById('menu-bar');
var bar = document.getElementById('menu-btn');
var close = document.getElementById('close-btn');
// visited link 
 var menu = document.querySelector('.menu').querySelectorAll('a');
// This return array of element 'a';
if(bar) {
  bar.addEventListener('click',()=>{
    console.log('click event happnen');
    menus.classList.add('active');  
  });
}


if(close) {
  close.addEventListener('click',()=>{
  menus.classList.remove('active');
  });
}


document.onclick = function (clickEvent) {
  if(!bar.contains(clickEvent.target)) {
    menus.classList.remove('active');
  }
}



menu.forEach(element=>{
  element.addEventListener('click',function(){
  menu.forEach(nav=>{nav.classList.remove('active')});
  this.classList.add('active');  
  });
})

// add remove active class


