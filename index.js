// import "./style.css";
// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];
  /////////////////////////////////////////

////////////// part1
const mainEl = document.body.querySelector('main');

// Get the value of the --main-bg CSS custom property
const mainBgColor = getComputedStyle(mainEl).getPropertyValue('--main-bg');

// console.log(mainBgColor);

 mainEl.style.backgroundColor = mainBgColor;
 mainEl.innerHTML='<h1>DOM Manipulation</h1>';
 mainEl.classList.add('flex-ctr');

 ///////part 2

 topMenuEl = document.getElementById("top-menu");
 topMenuEl.style.height = '100%';
 const menuBgColor = getComputedStyle(topMenuEl).getPropertyValue('--top-menu-bg');

 topMenuEl.style.backgroundColor = menuBgColor;
 
 topMenuEl.classList.add('flex-around');

 ////////// part 3
 menuLinks.forEach(element => {
    const a = document.createElement('a');
    a.setAttribute('href', element.href);
    // a.href=element.href;
    a.textContent=element.text;
    topMenuEl.appendChild(a);
 });
