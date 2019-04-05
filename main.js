let toggleBtn = document.getElementById('toggle-btn');

let toggleNavStatus = false;

function toggleNav() {

  if (screen.width < 768) {
    let toggleNavStatus = true;
  }

  let toggleBtn = document.querySelector(".nav-toggle");
  let menu = document.querySelector('nav ul');
  let navItems = document.querySelectorAll('nav ul li');
  let nav = document.querySelector('nav');

  if (toggleNavStatus === false) {
    nav.style.height = '400px';

    for (let i = 0; i < navItems.length; i++) {
      navItems[i].style.opacity = 1;
    }

    toggleNavStatus = true;
  }
  else if (toggleNavStatus === true) {
    nav.style.height = '80px';
    
    for (var i = 0; i < navItems.length; i++) {
      navItems[i].style.opacity = 0;
    }

    toggleNavStatus = false;
  }
}
