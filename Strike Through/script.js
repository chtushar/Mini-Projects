var list = document.getElementById('list').querySelectorAll('div');
var  li = Array.from(list);

li.forEach(element => {
  var temp = element.innerHTML
  var text = element.querySelector('.main').textContent;
  temp += `
  <div class="strike"></div>
  <span class="upper">${text}</span>
  <span class="lower">${text}</span>`
  element.innerHTML = temp;
});