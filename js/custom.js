
  document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    const navLinks = document.querySelectorAll(".navsec ul li a");

    navLinks.forEach(link => {
      const linkPage = link.getAttribute("href");

      if (linkPage === currentPage) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
  

$(document).ready(function() {
  // Check if we're on index.html page
  var isIndexPage = window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/');

  $('.slidersec').owlCarousel({
    loop: isIndexPage, // Only loop on index page (multiple images)
    margin: 0,
    responsiveClass: true,
    autoplay: isIndexPage, // Only autoplay on index page
    autoplayTimeout: 6000,
    nav: false,
    dots: isIndexPage, // Only show dots on index page
    mouseDrag: isIndexPage, // Only allow dragging on index page
    touchDrag: isIndexPage, // Only allow touch drag on index page
    pullDrag: isIndexPage, // Only allow pull drag on index page
    freeDrag: false,
    stagePadding: 0,
    autoplayHoverPause: true,   
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })

  // For non-index pages, ensure the single image is properly displayed
  if (!isIndexPage) {
    $('.slidersec .owl-stage-outer').css({
      'overflow': 'visible'
    });
    $('.slidersec .item').css({
      'position': 'relative',
      'height': '100%'
    });
    $('.slidersec .item img').css({
      'position': 'absolute',
      'top': '0',
      'left': '0',
      'width': '100%',
      'height': '100%',
      'object-fit': 'cover',
      'z-index': '1'
    });
  }

  // Mobile carousel initialization
  $('.slidersec-mobile').owlCarousel({
    loop: isIndexPage, // Only loop on index page (multiple images)
    margin: 0,
    responsiveClass: true,
    autoplay: isIndexPage, // Only autoplay on index page
    autoplayTimeout: 6000,
    nav: false,
    dots: isIndexPage, // Only show dots on index page
    mouseDrag: isIndexPage, // Only allow dragging on index page
    touchDrag: isIndexPage, // Only allow touch drag on index page
    pullDrag: isIndexPage, // Only allow pull drag on index page
    freeDrag: false,
    stagePadding: 0,
     autoplayHoverPause: true,   
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })

  // For non-index pages, ensure mobile single image is properly displayed
  if (!isIndexPage) {
    $('.slidersec-mobile .owl-stage-outer').css({
      'overflow': 'visible'
    });
    $('.slidersec-mobile .item').css({
      'position': 'relative',
      'height': '100%'
    });
    $('.slidersec-mobile .item img').css({
      'position': 'absolute',
      'top': '0',
      'left': '0',
      'width': '100%',
      'height': '100%',
      'object-fit': 'cover',
      'z-index': '1'
    });
  }
})

// Swiper initialization moved to index.html to avoid conflicts

$(document).ready(function() {
$('.industryleadercareosel').owlCarousel({
  loop: true,
  margin: 0,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: false,
  nav: false,
  dots: true,
  animateOut: 'slideOutLeft',
  animateIn: 'slideInRight',
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 1
    },
    992: {
      items: 1
    }
  }
})
})

$(document).ready(function() {
$('.customervoice').owlCarousel({
  loop: true,
  margin: 20,
  responsiveClass: true,
  autoplay: true,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    992: {
      items: 3
    },
    1025: {
      items: 4
    }
  }
})
})

$(document).ready(function() {
$('.foursegmentsec').owlCarousel({
loop: true,
margin: 20,
responsiveClass: true,
autoplay: true,
nav: false,
dots: true,
responsive: {
  0: {
    items: 1
  },
  480: {
    items: 2
  },
  768: {
    items: 3
  },
  992: {
    items: 4
  }
}
})
})

$(document).ready(function() {
$('.btmbannerfacilityslider').owlCarousel({
loop: true,
margin: 0,
responsiveClass: true,
autoplay: true,
nav: false,
dots: true,
responsive: {
  0: {
    items: 1
  },
  480: {
    items: 1
  },
  768: {
    items: 1
  }
}
})
})

$(document).ready(function() {
$('.facilitydesignsec').owlCarousel({
loop: true,
margin: 20,
responsiveClass: true,
autoplay: true,
nav: false,
dots: true,
responsive: {
  0: {
    items: 1
  },
  480: {
    items: 2
  },
  768: {
    items: 3
  }
}
})
})

$(document).ready(function() {
$('.teamexpertcarousel').owlCarousel({
loop: true,
margin: 20,
responsiveClass: true,
autoplay: true,
nav: false,
dots: true,
responsive: {
  0: {
    items: 1
  },
  480: {
    items: 1
  },
  768: {
    items: 2
  },
  992: {
    items: 3
  }
}
})
})

// function openCity(evt, cityName) {
// var i, tabcontent, tablinks;
// tabcontent = document.getElementsByClassName("tabcontent");
// for (i = 0; i < tabcontent.length; i++) {
//   tabcontent[i].style.display = "none";
// }
// tablinks = document.getElementsByClassName("tablinks");
// for (i = 0; i < tablinks.length; i++) {
//   tablinks[i].className = tablinks[i].className.replace(" active", "");
// }
// document.getElementById(cityName).style.display = "block";
// evt.currentTarget.className += " active";
// }

// function valueopenCity(valueevt, valuecityName) {
// var a, valuetabcontent, valuetablinks;
// valuetabcontent = document.getElementsByClassName("valuetabcontent");
// for (a = 0; a < valuetabcontent.length; a++) {
// valuetabcontent[a].style.display = "none";
// }
// valuetablinks = document.getElementsByClassName("valuetablinks");
// for (a = 0; a < valuetablinks.length; a++) {
// valuetablinks[a].className = valuetablinks[a].className.replace(" active", "");
// }
// document.getElementById(valuecityName).style.display = "block";
// valueevt.currentTarget.className += " active";
// }


// function openCity(evt, cityName) {
//   var i, tabcontent, tablinks;

  // Hide all tab contents
  // tabcontent = document.getElementsByClassName("tabcontent");
  // for (i = 0; i < tabcontent.length; i++) {
  //   tabcontent[i].style.display = "none";
  // }

  // Remove 'active' class from all tab buttons
  // tablinks = document.getElementsByClassName("tablinks");
  // for (i = 0; i < tablinks.length; i++) {
  //   tablinks[i].classList.remove("active");
  // }

  // Show the selected tab content
  // document.getElementById(cityName).style.display = "block";

  // Add 'active' class to the clicked tab
//   evt.currentTarget.classList.add("active");
// }

// function valueopenCity(valueevt, valuecityName) {
//   var a, valuetabcontent, valuetablinks;

  // Hide all value tab contents
  // valuetabcontent = document.getElementsByClassName("valuetabcontent");
  // for (a = 0; a < valuetabcontent.length; a++) {
  //   valuetabcontent[a].style.display = "none";
  // }

  // Remove 'active' class from all value tab buttons
  // valuetablinks = document.getElementsByClassName("valuetablinks");
  // for (a = 0; a < valuetablinks.length; a++) {
  //   valuetablinks[a].classList.remove("active");
  // }

  // Show the selected value tab content
  // document.getElementById(valuecityName).style.display = "block";

  // Add 'active' class to the clicked tab
//   valueevt.currentTarget.classList.add("active");
// }



// $('.slimmenu').slimmenu(
// {
//   resizeWidth: '991',
//   collapserTitle: '',
//   animSpeed:'medium',
//   indentChildren: true,
//   childrenIndenter: '&raquo;'
// });

// services tab script
// function openCity(evt, cityName) {
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }
//   document.getElementById(cityName).style.display = "block";
//   evt.currentTarget.className += " active";
// }




// function toggleMenu(el) {
//       el.classList.toggle('active');
//       document.getElementById('menu').classList.toggle('open');
//     }
  

//     function toggleMenu(el) {
//   el.classList.toggle('active');
//   document.getElementById('menu').classList.toggle('open');
// }




// ========== Tab Function ==========
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;

  // Hide all tab contents
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove 'tablinks-active' class from all tab buttons
  tablinks = document.getElementsByClassName("tablinkse");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("tablinks-active");
  }

  // Show the selected tab content
  document.getElementById(cityName).style.display = "block";

  // Add 'tablinks-active' class to the clicked tab
  evt.currentTarget.classList.add("tablinks-active");
}

// ========== Value Tab Function ==========
function valueopenCity(valueevt, valuecityName) {
  var a, valuetabcontent, valuetablinks;

  // Hide all value tab contents
  valuetabcontent = document.getElementsByClassName("valuetabcontent");
  for (a = 0; a < valuetabcontent.length; a++) {
    valuetabcontent[a].style.display = "none";
  }

  // Remove 'active' class from all value tab buttons
  valuetablinks = document.getElementsByClassName("valuetablinks");
  for (a = 0; a < valuetablinks.length; a++) {
    valuetablinks[a].classList.remove("active");
  }

  // Show the selected value tab content
  document.getElementById(valuecityName).style.display = "block";

  // Add 'active' class to the clicked tab
  valueevt.currentTarget.classList.add("active");
}

// ========== Set First Tab Active by Default ==========
window.onload = function () {
  const firstTab = document.querySelector(".tablinkse");
  if (firstTab) {
    firstTab.click();
  }

  const firstValueTab = document.querySelector(".valuetablinks");
  if (firstValueTab) {
    firstValueTab.click();
  }
};

// ========== SlimMenu ==========
$('.slimmenu').slimmenu({
  resizeWidth: '991',
  collapserTitle: '',
  animSpeed: 'medium',
  indentChildren: true,
  childrenIndenter: '&raquo;'
});

// ========== Toggle Menu ==========
function toggleMenu(el) {
  el.classList.toggle('active');
  document.getElementById('menu').classList.toggle('open');
}

// mobile responsive js

function openCityMobile(evt, cityNameMobile) {
  var i, tabcontentMobile, tablinksMobile;

  // Hide all mobile tab contents
  tabcontentMobile = document.getElementsByClassName("tabcontent-mobile");
  for (i = 0; i < tabcontentMobile.length; i++) {
    tabcontentMobile[i].style.display = "none";
    console.log(i);
  }

  // Remove 'active' class from all mobile tab buttons
  tablinksMobile = document.getElementsByClassName("tablinks-mobile");
  for (i = 0; i < tablinksMobile.length; i++) {
    tablinksMobile[i].classList.remove("active");
  }

  // Show selected mobile tab content
  document.getElementById(cityNameMobile).style.display = "block";

  // Add 'active' class to clicked mobile tab
  evt.currentTarget.classList.add("active");
}

window.onload = function () {
  const firstTab = document.querySelector(".tablinks");
  if (firstTab) firstTab.click();

  const firstValueTab = document.querySelector(".valuetablinks");
  if (firstValueTab) firstValueTab.click();

  const firstMobileTab = document.querySelector(".tablinks-mobile");
  if (firstMobileTab) firstMobileTab.click();
};





// desktop applictaion tabs js

function industryTabOpen(evt, industryName) {
  // Use the class name 'tabcontent' as per your HTML
  const industryTabContent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < industryTabContent.length; i++) {
    industryTabContent[i].style.display = "none";
  }

  // Use the class name 'industry-tablinks' which is on the buttons
  const industryTabLinks = document.getElementsByClassName("industry-tablinks");
  for (let i = 0; i < industryTabLinks.length; i++) {
    industryTabLinks[i].classList.remove("active");
  }

  // Show correct tab
  document.getElementById(industryName).style.display = "block";
  evt.currentTarget.classList.add("active");
}

window.addEventListener('DOMContentLoaded', function () {
  const firstIndustryTab = document.querySelector(".industry-tablinks");
  if (firstIndustryTab) {
    firstIndustryTab.click();
  }
});




// application mobile taps


function openIndustryTabMobile(evt, tabName) {
  var i, tabcontent, tablinks;

  // Hide all tab contents
  tabcontent = document.getElementsByClassName("industry-tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove 'active-app' class from all buttons
  tablinks = document.getElementsByClassName("industry-tab-btn");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active-app");
  }

  // Show selected tab content
  document.getElementById(tabName).style.display = "block";

  // Add 'active-app' to the clicked button
  evt.currentTarget.classList.add("active-app");
}




window.onload = function () {
  const firstIndustryTab = document.querySelector(".industry-tab-btn");
  if (firstIndustryTab) {
    firstIndustryTab.classList.add("active-app"); // <-- Add this line
    openIndustryTabMobile({ currentTarget: firstIndustryTab }, 'SiliconPhotonics1');
  }
};


  $(document).ready(function(){
    $(".tools-slider").owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      dots: true,
      responsive:{
        0:{ items:1 },
        600:{ items:2 },
        1000:{ items:3 }
      }
    });
  });

  $(document).ready(function(){
    $(".app-image-slider").owlCarousel({
      items: 1,
      loop: true,
      margin: 20,
      dots: true,
      autoplay: false,
      // autoplayTimeout: 4000
    });
  });

  //  $(document).ready(function () {
  //   $(".industry-slider").owlCarousel({
  //     loop: true,
  //     margin: 20,
  //     dots: true,
  //     nav: false,
  //     autoplay: true,
  //     autoplayTimeout: 3500,
  //     slideBy: 1,
  //     responsive: {
  //       0: { items: 1 },
  //       768: { items: 2 },
  //       1024: { items: 3 }
  //     }
  //   });
  // });

  //   $(document).ready(function () {
  //   $(".industry-slider").owlCarousel({
  //     loop: true,
  //     margin: 20,
  //     dots: true,
  //     nav: false,
  //     autoplay: true,
  //     autoplayTimeout: 3500,
  //     slideBy: 1, // 👉 ye point-to-point slide karega
  //     responsive: {
  //       0: { items: 1 },
  //       576: { items: 2 },
  //       768: { items: 3 },
  //       992: { items: 4 },
  //       1200: { items: 5 }
  //     }
  //   });
  // });

  //   $(document).ready(function () {
  //   $(".industry-slider").owlCarousel({
  //     loop: true,
  //     margin: 20,
  //     dots: true,
  //     nav: false,
  //     slideBy: 1,
  //     autoplay: true,
  //     autoplayTimeout: 4000,
  //     responsive: {
  //       0: { items: 1 },
  //       768: { items: 3 },
  //       1200: { items: 3 }
  //     }
  //   });
  // });

$(document).ready(function () {
  $(".industry-slider").owlCarousel({
    loop: true,
    margin: 20,
    dots: true,
    nav: false,
    slideBy: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1200: { items: 3 },
      1600: { items: 3 } // forcefully lock at 3 items even for large screens
    }
  });
});


    $(document).ready(function () {
    $(".right-slider").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 7000,
      responsive: {
        0: { items: 1 }
      }
    });
  });