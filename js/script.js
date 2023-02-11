var menus = document.getElementById('menu-bar');
var bar = document.getElementById('menu-btn');
var close = document.getElementById('close-btn');
var searchBtn = document.getElementById('search-btn');
var searchForm = document.getElementById('search-form');
// visited link 
 var menu = document.querySelector('.menu').querySelectorAll('a');
// This return array of element 'a';
if(bar||searchBtn) {
  bar.addEventListener('click',()=>{
    console.log('click event happnen');
    menus.classList.add('active'); 

  });

  searchBtn.addEventListener('click',()=>{
    searchForm.classList.add('sf-active');
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

  if(!searchBtn.contains(clickEvent.target)) {
    searchForm.classList.remove('sf-active');
  }
}



menu.forEach(element=>{
  element.addEventListener('click',function(){
  menu.forEach(nav=>{nav.classList.remove('active')});
  this.classList.add('active');  
  });
})

// add remove active class


