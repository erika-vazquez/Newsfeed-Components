/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [{
  text:'Students'},
  {text:'Faculty'},
  {text:"What's New"},
  {text:'Tech Trends'},
  {text:'Music'},
  {text:'Log Out'}
];

function createMenu(menuItems, menuButton) {
  // define new elements
  const menu = document.createElement('div')
  const ul = document.createElement('ul');
  const li = document.createElement('li');


//element structure
menu.appendChild(ul)
ul.appendChild(li)
menu.classList.add('menu')

//content
menuItems.forEach(items => {
  const li = document.createElement('li');

  li.textContent = items;
  ul.appendChild(li)
 // console.log(li.textContent)
}
  
  )

  //const menuButton = document.querySelector('.menu-button')
  menuButton.addEventListener('click', () => {
    menu.classList.toggle('menu--open')
  })

return menu
}
const button = document.querySelector('.menu-button')
const menu = createMenu(menuItems, button)
const header = document.querySelector('.header')
header.appendChild(menu)
/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
