var menus = document.getElementById('menu-bar');
var bar = document.getElementById('menu-btn');
var close = document.getElementById('close-btn');
var searchBtn = document.getElementById('search-btn');
var searchForm = document.getElementById('search-form');
var search = document.getElementById('search');
var cartBtn = document.getElementById('cart-btn');
var cart = document.getElementById('cart');
// visited link 
 var menu = document.querySelector('.menu').querySelectorAll('a');
// This return array of element 'a';
if(bar||searchBtn || cartBtn) {
  bar.addEventListener('click',()=>{
    menus.classList.add('active'); 
    searchForm.classList.remove('sf-active');
    cart.classList.remove('cactive');

  });

  searchBtn.addEventListener('click',()=>{
    searchForm.classList.toggle('sf-active');
    cart.classList.remove('cactive');

  });

  cartBtn.addEventListener('click',()=>{
    cart.classList.toggle('cactive');
    searchForm.classList.remove('sf-active');

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

  // if(!searchForm.contains(clickEvent.target)) {
  //   searchForm.classList.remove('sf-active');
  // }
}



menu.forEach(element=>{
  element.addEventListener('click',function(){
  menu.forEach(nav=>{nav.classList.remove('active')});
  this.classList.add('active');  
  });
})

// add remove active class


