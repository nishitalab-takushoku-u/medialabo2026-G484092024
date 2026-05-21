let a =　document.createElement('a');
a.textContent = '拓殖大学HP';
a.setAttribute('href', 'https://www.takushoku-u.ac.jp'); 
let p = document.querySelector('p#takudai');
p.insertAdjacentElement('afterend', a);
let i = document.querySelector('img#bluemoon')
i.setAttribute('src','bluemoon.jpg')
u = document.createElement('ul');
l = document.createElement('li');
l.textContent = '赤';
u.insertAdjacentElement('beforeend', l);
l = document.createElement('li');
l.textContent = '緑';
u.insertAdjacentElement('beforeend', l);
l = document.createElement('li');
l.textContent = '青';
u.insertAdjacentElement('beforeend', l);
p = document.querySelector('p#primary');
p.insertAdjacentElement('afterend', u);
