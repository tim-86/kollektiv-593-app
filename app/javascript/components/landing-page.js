
const initLandingPage = () => {
  if (document.querySelector(".panel")){
    const panels = document.querySelectorAll('.panel');
    const openActive = document.querySelector('open-active');
    const finalImage = document.querySelector('.final-image');
    const OverLay = document.querySelector('.outer-container');
    const links = document.querySelectorAll('.home-page-link');

    function allOpen() {
    if (document.querySelectorAll('.fixed').length == 4)
      finalImage.classList.add('final-image-shown');
    }

    function addOpen() {
      this.classList.add('open');
    }

    function removeOpen() {
      if (this.classList.contains('fixed'))
        {}
      else
        this.classList.remove('open');
    }

    function addActive(e) {
      if (e.propertyName.includes('flex')){
        this.classList.add('open-active');
      }
    }

    function removeActive(e) {
      this.classList.remove('open-active');
      }

    function keepOpen() {
      if (this.classList.contains('fixed')){
        this.classList.remove('fixed');}
      else 
        this.classList.add('fixed');
      }

    function reloadPage() {
      window.location.reload();
    }

    function ChangeGreyScale() {
      if (document.querySelectorAll('.fixed').length == 1)
        panels.forEach(panel => {
        if (panel.classList.contains('fixed'))
          panel.style.filter = "grayscale(100%)"});
      else if (document.querySelectorAll('.fixed').length == 2)
        panels.forEach(panel => {
        if (panel.classList.contains('fixed'))
          panel.style.filter = "grayscale(75%)"});
      else if (document.querySelectorAll('.fixed').length == 3)
        panels.forEach(panel => {
        if (panel.classList.contains('fixed'))
          panel.style.filter = "grayscale(50%)"});
      else if (document.querySelectorAll('.fixed').length == 4)
        panels.forEach(panel => {
        if (panel.classList.contains('fixed'))
          panel.style.filter = "grayscale(0)"});
    };

    panels.forEach(panel => panel.addEventListener('mouseout', removeOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', addActive));
    panels.forEach(panel => panel.addEventListener('mouseover', addOpen));
    panels.forEach(panel => panel.addEventListener('click', keepOpen));
    panels.forEach(panel => panel.addEventListener('click', ChangeGreyScale));

    finalImage.addEventListener('click', reloadPage);
}};

export {initLandingPage};