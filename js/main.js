/*NavBar*/
let prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;
  const navbar = document.querySelector('.navBarAttach');
  if (prevScrollPos > currentScrollPos) {
    navbar.classList.remove('hidden');
  } else {
    navbar.classList.add('hidden');
  }
  prevScrollPos = currentScrollPos;
}