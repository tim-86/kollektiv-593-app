const initNavbar = () => {
  if (document.querySelector(".nav-item-we")) {
    const aboutUs = document.querySelector(".about-us");
    const contact = document.querySelector(".contact");
    const examples = document.querySelector(".examples");
    const portfolio = document.querySelector(".portfolio");

    const navItemWe = document.querySelectorAll(".nav-item-we");
    const navItemGet = document.querySelectorAll(".nav-item-get");
    const navItemThings = document.querySelectorAll(".nav-item-things");
    const navItemDone = document.querySelectorAll(".nav-item-done");

    
      function showButton(navItem) {
        navItem.forEach (e => e.classList.add("make-visible-nav-item")
      )};

      function hideButton(navItem) {
        navItem.forEach (e => e.classList.remove("make-visible-nav-item")
      )};



      aboutUs.addEventListener('mouseover', function() {
        showButton(navItemWe)
      });
      aboutUs.addEventListener('mouseout', function () {
        hideButton(navItemWe)
      });


      contact.addEventListener('mouseover', function() {
        showButton(navItemGet)
      });
      contact.addEventListener('mouseout', function () {
        hideButton(navItemGet)
      });


      examples.addEventListener('mouseover', function() {
        showButton(navItemThings)
      });
      examples.addEventListener('mouseout', function () {
        hideButton(navItemThings)
      });


      portfolio.addEventListener('mouseover', function() {
        showButton(navItemDone)
      });
      portfolio.addEventListener('mouseout', function () {
        hideButton(navItemDone)
      });
}};

export {initNavbar};
