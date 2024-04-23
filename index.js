// import "./style.css";
// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];
  /////////////////////////////////////////

////////////// part1
const mainEl = document.body.querySelector('main');

// Get the value of the --main-bg CSS custom property
// const mainBgColor = getComputedStyle(mainEl).getPropertyValue('--main-bg');

// console.log(mainBgColor);

//  mainEl.style.backgroundColor = mainBgColor;
mainEl.style.backgroundColor = "var(--main-bg)";
 mainEl.innerHTML='<h1>DOM Manipulation</h1>';
 mainEl.classList.add('flex-ctr');

 ///////part 2

 const topMenuEl = document.getElementById("top-menu");
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

 ///////////////////Lab 2///////////////////////
 //////////////////part 3 //////////////////////
 const subMenuEl = document.getElementById("sub-menu");
 subMenuEl.style.height = "100%";
 subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
 subMenuEl.classList.add('flex-around');
 subMenuEl.style.position= "absolute";
 subMenuEl.style.top= "0";

 ////////////////// part 4 ///////////////////////
 const topMenuLinks = topMenuEl.querySelectorAll('a');
 topMenuEl.addEventListener('click',(event)=>{ 
  event.preventDefault();
  // console.log(event.target);
  if (event.target.tagName.toLowerCase() !== 'a') return;
  console.log(event.target.textContent);

  // If the ABOUT link is clicked, display an <h1>About</h1>
if (event.target.textContent === 'about') {
  mainEl.innerHTML = '<h1>About</h1>';
}

  topMenuLinks.forEach(element => {
    if(event.target !== element){
    element.classList.remove('active');
    }
  });

  event.target.classList.toggle('active');


const obj = menuLinks.filter(link =>  link["text"]=== event.target.textContent);
console.log( obj[0].subLinks);
if(event.target.classList.contains('active')){
  // Cache the "link" object for the clicked <a> element
  // const linkObject = menuLinks.find(link => link.text === event.target.textContent);
  subMenuEl.style.top = obj[0].subLinks ? "100%":"0";
}

subMenuEl.innerHTML = '';
if(obj[0].subLinks){
obj[0].subLinks.forEach(element => {
  const a = document.createElement('a');
    a.setAttribute('href', element.href);
    // a.href=element.href;
    a.textContent=element.text;
    subMenuEl.appendChild(a);
});
}



 });


 subMenuEl.addEventListener('click', function(event) {
  event.preventDefault();
  // console.log(event.target);
  if (event.target.tagName.toLowerCase() !== 'a') return;
  console.log(event.target.textContent);


  // Set the CSS top property of subMenuEl to 0
  subMenuEl.style.top = '0';

  // Remove the active class from each <a> element in topMenuLinks
  topMenuLinks.forEach(link => {
      link.classList.remove('active');
  });

  // Update the contents of mainEl within an <h1> to the contents of the <a> element clicked within subMenuEl
  mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;

  
});

