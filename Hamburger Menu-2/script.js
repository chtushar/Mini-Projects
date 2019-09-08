
// function transformButton(x){

//   x.classList.toggle('menu-cross');

// }

var x=document.getElementById('icon');

x.addEventListener('click',function transformButton(){

  if (x.classList.contains('menu-cross')) {
      x.classList.remove('menu-cross');
      x.classList.add('menu-default');
  }
  else if (x.classList.contains('menu-default')) {
    x.classList.remove('menu-default');
    x.classList.add('menu-cross');
  }
  else{
  x.classList.add('menu-cross');
  }
});

