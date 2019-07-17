$(function() {
  function formCheck(input) {
    input.parent().removeClass('has-error');
    input.filter(function () {
      return !$.trim(this.value);
    }).parent().addClass('has-error');
  }
  
  var menuWord;
  $.post('languageChange.php', { action: 'check' }, function (callback) {
    if (callback === 'bg') {
      menuWord = 'Меню';
    } else {
      menuWord = 'Menu';
    }
  });

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);

        return false;
      }
    }
  });

  $('#fullpage').fullpage({
    menu: '#menu',
    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
      var $this = $(this);
      switch (index) {
        case 3:
          $this.css('background-image', 'url(images/re' + slideIndex +'.jpg)');
          break;
        case 5:
          $this.css('background-image', 'url(images/ro' + slideIndex +'.jpg)');
          break;
      }
    },
    lockAnchors: false,
    anchors:[],
    navigation: false,
    navigationPosition: 'right',
    navigationTooltips: [],
    showActiveTooltip: false,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',

    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: true,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    normalScrollElements: '',
    scrollOverflow: true,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,

    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    controlArrows: true,
    verticalCentered: true,
    resize : false,
    sectionsColor : [],
    paddingTop: '3em',
    paddingBottom: '0px',
    fixedElements: '.navbar',
    responsiveWidth: 0,
    responsiveHeight: 0
  });

  $('.navbar-brand > img').on('click', function () {
    var language = $(this).data('language');
    $.post('languageChange.php', { language: language, action: 'change' }, function () {
      location.reload();
    });
  });

  $('#openMenu').on('click', function () {
    $('.md-modal').addClass('md-show');
  });

  $('.md-close').on('click', function () {
    $('.md-modal').removeClass('md-show');
  });

  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      $('.md-modal').removeClass('md-show');
    }
  });

  var menus = {
    wedding: {
        w1: [
          'БЕЗАЛКОХОЛНА НАПИТКА /кока-кола, фанта/ - 1 бр.',
          'РАКИЯ /Пещерска/ - 50 гр.',
          'САЛАТА - ШОПСКА / РЕДЕНА / СЕЛСКА',
          'ОСНОВНО ЯСТИЕ - ПИЛЕШКА / СВИНСКА ПЪРЖОЛА С ГАРНИТУРА',
          'ДЕСЕРТ - ТОРТИЧКА',
          'ХЛЯБ - ПИТКА - 1 бр.',
          'ЦЕНА - 18 лв.'
        ],
        w2: [
          'БЕЗАЛКОХОЛНА НАПИТКА /кока-кола, фанта/ - 1 бр.',
          'РАКИЯ /Пещерска/ - 50 гр.',
          'САЛАТА - ШОПСКА / РЕДЕНА / СЕЛСКА',
          'ПРЕДЯСТИЕ - ХАПКИ /кашкавал и сирене/',
          'ОСНОВНО ЯСТИЕ - ПИЛЕШКА / СВИНСКА ПЪРЖОЛА С ГАРНИТУРА',
          'ДЕСЕРТ - ТОРТИЧКА',
          'ХЛЯБ - ПИТКА - 1 бр.',
          'ЦЕНА - 22 лв.'
        ],
        w3: [
          'БЕЗАЛКОХОЛНА НАПИТКА /кока-кола, фанта/ - 1 бр.',
          'РАКИЯ /Пещерска/ - 100 гр.',
          'САЛАТА - ШОПСКА / РЕДЕНА / СЕЛСКА',
          'ПРЕДЯСТИЕ - ЧУШКА БЮРЕК',
          'ОСНОВНО ЯСТИЕ - ПИЛЕШКА / СВИНСКА ПЪРЖОЛА С ГАРНИТУРА',
          'ДЕСЕРТ - ТОРТИЧКА',
          'ХЛЯБ - ПИТКА - 1 бр.',
          'ЦЕНА - 25 лв.'
        ],
        w4: [
          'БЕЗАЛКОХОЛНА НАПИТКА /кока-кола, фанта/ - 1 бр.',
          'РАКИЯ /Пещерска/ - 50 гр.',
          'САЛАТА - ШОПСКА / РЕДЕНА / СЕЛСКА',
          'ПРЕДЯСТИЕ - СУХИ МЕЗЕТА - 100 гр.',
          'ОСНОВНО ЯСТИЕ - ПИЛЕШКА / СВИНСКА ПЪРЖОЛА С ГАРНИТУРА',
          'ДЕСЕРТ - ТОРТИЧКА',
          'ХЛЯБ - ПИТКА - 1 бр.',
          'ЦЕНА - 23 лв.'
        ],
        w5: [
          'БЕЗАЛКОХОЛНА НАПИТКА /кока-кола, фанта/ - 1 бр.',
          'МИНЕРАЛНА ВОДА 0.500 - 1 бр.',
          'РАКИЯ /Пещерска/ - 100 гр.',
          'САЛАТА - ШОПСКА / РЕДЕНА / СЕЛСКА',
          'ОСНОВНО ЯСТИЕ - ПИЛЕШКА / СВИНСКА ПЪРЖОЛА С ГАРНИТУРА',
          'ДЕСЕРТ - ТОРТИЧКА',
          'ХЛЯБ - ПИТКА - 1 бр.',
          'ЦЕНА - 21.50 лв.'
        ]
    }
  };

  $('.menus > a').on('click', function () {
      var menu = $(this).data('menu');
      var menuContent = $("#menuContent");
      var output = '';

      $.each(menus[menu], function (index) {
        output += '<a data-menu="' + index + '">' + menuWord + ' ' + index.replace(/\D+/,'') + '</a>';
      });

      menuContent.html(output);

      $('#menuContent > a').on('click', function () {
        var subMenu = $(this).data('menu');
        output = '<ul>';
        $.each(menus[menu][subMenu], function (index, data) {
          output += '<li>' + data + '</li>';
        });
        output += '</ul>';
        menuContent.html(output);
      });
    })

  $('#reserveForm > input[type="submit"]').on('click', function () {
    var name = $('#reserveForm > fieldset > div > input[name="name"]').val();
    var phone = $('#reserveForm > fieldset > div > input[name="phone"]').val();
    var arrival = $('#reserveForm > fieldset > div > input[name="arrival"]').val();
    var people = $('#reserveForm > fieldset > div > input[name="people"]').val();
    var nights = $('#reserveForm > fieldset > div > input[name="nights"]').val();
    var inputs = $('#reserveForm > fieldset > div > input:not(input[name="email"])');

    formCheck(inputs);

    if (name.trim() && phone.trim() && arrival.trim() && people.trim() && nights.trim()) {
      $.post('send.php', $('#reserveForm').serialize() + '&type=room&valid=true', function () {
        $('#reserveForm > .hasSuccess').css('display', 'inline-flex').fadeToggle(5000);
      });
    } else {
      $('#reserveForm > .hasError').css('display', 'inline-flex').fadeToggle(5000);
    }

    return false;
  });

  $('#restaurantReserve > input[type="submit"]').on('click', function () {
    var name = $('#restaurantReserve > fieldset > div > input[name="name"]').val();
    var phone = $('#restaurantReserve > fieldset > div > input[name="phone"]').val();
    var arrival = $('#restaurantReserve > fieldset > div > input[name="arrival"]').val();
    var people = $('#restaurantReserve > fieldset > div > input[name="people"]').val();
    var inputs = $('#restaurantReserve > fieldset > div > input:not(input[name="email"])');

    formCheck(inputs);

    if (name.trim() && phone.trim() && arrival.trim() && people.trim()) {
      $.post('send.php', $('#restaurantReserve').serialize() + '&type=restaurant&valid=true', function () {
        $('#restaurantReserve > .hasSuccess3').css('display', 'inline-flex').fadeToggle(5000);
      });
    } else {
      $('#restaurantReserve > .hasError3').css('display', 'inline-flex').fadeToggle(5000);
    }

    return false;
  });

  $('#contactForm > input[type="submit"]').on('click', function () {
    var name = $('#contactForm > fieldset > div > input[name="name"]').val();
    var email = $('#contactForm > fieldset > div > input[name="email"]').val();
    var message = $('#contactForm > fieldset > div > textarea').val();
    var inputs = $('#contactForm > fieldset > div > input:not(input[name="phone"]), #contactForm > fieldset > div > textarea');

    formCheck(inputs);

    if (name.trim() && email.trim() && message.trim()) {
      $.post('send.php', $('#contactForm').serialize() + '&type=contact&valid=true', function () {
      $('#contactForm > .hasSuccess2').css('display', 'inline-flex').fadeToggle(5000);
      });
    } else {
      $('#contactForm > .hasError2').css('display', 'inline-flex').fadeToggle(5000);
    }

    return false;
  });

  $( '.google-map' ).lazyLoadGoogleMaps({
    api_key: '',
    callback: function (container, map) {
      var $container  = $( container ),
      center      = new google.maps.LatLng($container.attr( 'data-lat' ), $container.attr( 'data-lng' )),
      marker      = new google.maps.Marker({ position: center, map: map });

      map.setOptions({
        zoom: 16,
        center: center,
        scrollwheel: false
      });

      var infowindow = new google.maps.InfoWindow({
        content: 'Комплекс "Шатра Инфинити"'
      });

      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });
    }
  });

 $('#galleria').lightGallery();

});
