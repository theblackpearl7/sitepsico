document.addEventListener('DOMContentLoaded', function () {
    let lastScrollTop = 0;
    const footer = document.querySelector('footer');
    const headerHeight = document.querySelector('header').offsetHeight;
  
    window.addEventListener('scroll', function () {
      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
      if (currentScroll > lastScrollTop) {
        document.body.classList.add('scrolling-down');
        document.body.classList.remove('scrolling-up');
      } else {
        document.body.classList.add('scrolling-up');
        document.body.classList.remove('scrolling-down');
      }
  
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
    document.getElementById('menu-icon').addEventListener('click', function () {
      const menu = document.getElementById('menu');
      const isVisible = menu.style.transform === 'translateX(0%)';
      menu.style.transform = isVisible ? 'translateX(-100%)' : 'translateX(0%)';
    });
  });
  