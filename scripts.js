const site = {};

site.navToggle = () => {
  document.querySelectorAll('div.hamburger .line').forEach(line => {line.classList.toggle('active')});

  document.querySelectorAll('.navbar').forEach(
    bar => {
      bar.classList.toggle('open')
    }
  )
}

site.hamburgerBind = () => {
  document.querySelector('div.hamburger').addEventListener('click', site.navToggle);
}

site.langToggleSC = () => {
  document.querySelectorAll('.tc').forEach(text => {
    text.style.display="none";
  })

  document.querySelectorAll('.sc').forEach(text => {
    text.style.display="block";
  })
}

site.langToggleTC = () => {
  document.querySelectorAll('.sc').forEach(text => {
    text.style.display="none";
  })

  document.querySelectorAll('.tc').forEach(text => {
    text.style.display="block";
  })
}

site.languageBind = () => {
  document.querySelectorAll('nav button.toggleSC').forEach(
    button => {
      button.addEventListener('click', site.langToggleSC);
    }
  );
  document.querySelectorAll('nav button.toggleTC').forEach(
    button => {
      button.addEventListener('click', site.langToggleTC);
    }
  )}

$(() => {
  site.hamburgerBind();
  site.languageBind();
  $('.gallery').slick({  
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    arrows: true,
  });
});