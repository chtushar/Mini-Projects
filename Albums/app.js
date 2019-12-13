const section1 = document.querySelector('#section-1 .child-wrapper-1');
const section2 = document.querySelector('#section-2 .child-wrapper-2');
const section1Array = document.querySelectorAll('.sec-child')

section1Array.forEach((el, i) => {
  el.style.backgroundColor = `hsl(315, 0%, ${11*i}%)`;
})

function backgroundColorChange(hue, saturation) {
 section1Array.forEach((el, i) => {
   el.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${10*i}%)`;
  })

  document.body.style.backgroundColor = `hsl(${hue}, ${saturation}%, 85%)`
}

gsap.set('.sec-child', {scaleY: 0,transformOrigin: '50% 50%'});

setTimeout(() => {
  gsap.timeline()
  .to('.hero',{opacity: 1, duration: 1.5})
  .to('.sec-child',{scaleY: 1, duration: 1, stagger:{
    amount: 1.5
  }})
}, 1000);

function scaleIn(e){
  if (e.classList.contains('sec-child-scaleOut')) {
    e.classList.remove('sec-child-scaleOut');
  }
  e.classList.add('sec-child-scaleIn');
  gsap.to(e.children, {opacity: 1, duration: 0.5})

   //let hue = parseInt(e.dataset.hue);
   //let sat = parseInt(e.dataset.sat);
  //console.log(parseInt(e.dataset.hue));
  //backgroundColorChange(hue, sat);
}

function scaleOut(e){
  e.classList.remove('sec-child-scaleIn');
  e.classList.add('sec-child-scaleOut');
  gsap.to(e.children, {opacity: 0, duration: 0.5})
}

