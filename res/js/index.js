

let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};





// let currentIndex = 0;
// const slides = document.querySelectorAll('.slide');
// const totalSlides = slides.length;

// function showSlide(index) {
//     slides[currentIndex].classList.remove('active');
//     currentIndex = (index + totalSlides) % totalSlides;
//     slides[currentIndex].classList.add('active');
// }

// function showNextSlide() {
//     showSlide(currentIndex + 1);
// }

// function showPrevSlide() {
//     showSlide(currentIndex - 1);
// }


function updateCountdown() {
    const eventDate = new Date("Oct 15, 2024 09:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = padNumber(days) + "";
    document.getElementById("hours").innerHTML = padNumber(hours) + "";
    document.getElementById("minutes").innerHTML = padNumber(minutes) + "";
    document.getElementById("seconds").innerHTML = padNumber(seconds) + "";
    /* document.getElementById("countdown").innerHTML =
      padNumber(days) + ":" +
      padNumber(hours) + ":" +
      padNumber(minutes) + ":" +
      padNumber(seconds); */

    if (timeLeft < 0) {
      clearInterval(countdownTimer);
      document.getElementById("countdown").innerHTML = "Live Now";
      document.getElementById("timer-cont").style.display = "none";
    }
  }

  function padNumber(number) {
    return number.toString().padStart(2, '0');
  }

  const countdownTimer = setInterval(updateCountdown, 1000);

  updateCountdown();


//   var swiper = new Swiper(".slide-content", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     slidesPerGroup: 3,
//     loop: true,
//     loopFillGroupWithBlank: true,
//     pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     },
//     navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//     },
//     });

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    centeredSlides: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      keyboard: {
        enabled: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
  });
  
//   function openPopup(title, text) {
//     document.getElementById("popup-title").innerText = title;
//     document.getElementById("popup-text").innerText = text;
//     document.getElementById("popup").style.display = "flex";
// }

// function closePopup(event) {
//     const popup = document.getElementById("popup");
//     const popupContent = document.querySelector('.popup-content');

//     // Close the popup if the click is outside the popup content or on the close button
//     if (event.target === popup || event.target.classList.contains('close-btn')) {
//         popup.style.display = "none";
//     }
// }

document.querySelectorAll('.box-1').forEach(button => {
  button.addEventListener('click', () => {
      // const image = button.getAttribute('data-image');
      const title = button.getAttribute('data-title');
      const text = button.getAttribute('data-text');
      const text1 = button.getAttribute('data-text1');
      const text2 = button.getAttribute('data-text2');
      const parts = text.split(':');
      const parts1 = text1.split(':');
      const parts2 = text2.split(':');
      
      // Set popup content
      document.getElementById("popup-title").innerText = title;
      // document.getElementById("popup-text").innerText = text;
      // document.getElementById("popup-text1").innerText = text1;
      // document.getElementById("popup-text2").innerText = text2;
      const formattedText = `<strong>${parts[0]}:</strong>${parts[1]}`;
      const formattedText1 = `<strong>${parts1[0]}:</strong>${parts1[1]}`;
      const formattedText2 = `<strong>${parts2[0]}:</strong>${parts2[1]}`;
    
      document.getElementById("popup-text").innerHTML = formattedText;
      document.getElementById("popup-text1").innerHTML = formattedText1;
      document.getElementById("popup-text2").innerHTML = formattedText2;
      // Set hover image dynamically
      // button.style.setProperty('--hover-image', `url(${image})`);
      
      // Show the popup
      document.getElementById("popup").style.display = "flex";
      document.getElementById("popup").style.zIndex = "9999";
  });
});

function closePopup(event) {
  const popup = document.getElementById("popup");
  if (event.target === popup || event.target.classList.contains('close-btn')) {
      popup.style.display = "none";
  }
}


// document.querySelectorAll('.box-1').forEach(box => {
//   box.addEventListener('mouseenter', function() {
//       const hoverImg = this.getAttribute('data-image');
//       this.querySelector('.image-container').style.backgroundImage = `url(${hoverImg})`;
//   });

//   box.addEventListener('mouseleave', function() {
//       const originalImg = this.querySelector('.image-container img').src;
//       this.querySelector('.image-container').style.backgroundImage = `url(${originalImg})`;
//   });

//   box.addEventListener('click', function() {
//       const title = this.getAttribute('data-title');
//       const text = this.getAttribute('data-text');
//       openPopup(title, text);
//   });
// });

// function openPopup(title, text) {
//   document.getElementById("popup-title").innerText = title;
//   document.getElementById("popup-text").innerText = text;
//   document.getElementById("popup").style.display = "flex";
// }

// function closePopup(event) {
//   const popup = document.getElementById("popup");
//   const popupContent = document.querySelector('.popup-content');

//   // Close the popup if the click is outside the popup content or on the close button
//   if (event.target === popup || event.target.classList.contains('close-btn')) {
//       popup.style.display = "none";
//   }
// }

