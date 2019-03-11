const menuBtn = document.querySelector('.menu-button');
const closeBtn = document.querySelector('.closebtn');

function openNav() {
    document.getElementById("mySidenav").style.width = "25rem";
  }

  function closeNav() {
      document.getElementById("mySidenav").style.width = '0';
  }

menuBtn.addEventListener('click', () => openNav());
closeBtn.addEventListener('click', () => closeNav());
