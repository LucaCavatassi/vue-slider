// const images = [
//   {
//     image: "img/01.webp",
//     title: "Marvel's Spiderman Miles Morale",
//     text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
//   },
//   {
//     image: "img/02.webp",
//     title: "Ratchet & Clank: Rift Apart",
//     text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
//   },
//   {
//     image: "img/03.webp",
//     title: "Fortnite",
//     text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
//   },
//   {
//     image: "img/04.webp",
//     title: "Stray",
//     text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
//   },
//   {
//     image: "img/05.webp",
//     title: "Marvel's Avengers",
//     text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
//   },
// ];

// let activeIndex = 0;



// function showNext() {
//   imageElems[activeIndex].classList.remove("active")
//   thumbnailElems[activeIndex].classList.remove("active")


//   if (activeIndex < imageElems.length - 1){
//     activeIndex++;
//   } else {
//     activeIndex = 0
//   }

//   imageElems[activeIndex].classList.add("active")
//   thumbnailElems[activeIndex].classList.add("active");
// }

// function showPrev () {
//   imageElems[activeIndex].classList.remove("active")
//   thumbnailElems[activeIndex].classList.remove("active")


//   if (activeIndex > 0){
//     activeIndex--;
//   } else {
//     activeIndex = imageElems.length - 1;
//   }

//   imageElems[activeIndex].classList.add("active")
//   thumbnailElems[activeIndex].classList.add("active");
// }

// function Stop(){
//   startStopBtn.removeEventListener("click", Stop);
//   startStopBtn.addEventListener("click", Start);
//   clearInterval(carouselLoop);
// }
// function Start(){
//   startStopBtn.removeEventListener("click", Start);
//   startStopBtn.addEventListener("click", Stop);
//   setInterval (showNext, 3000)
// }

// function backward () {
//   clearInterval(carouselLoop)
//   let backwardCarouselLoop = setInterval (showPrev, 3000)
  
// }

const { createApp } = Vue;

createApp ({
  data(){
    return {
      greeting: "Say Hello",
      activeIndex: 0,
      images: [
        {
          image: "./img/01.webp",
          title: "Marvel's Spiderman Miles Morale",
          text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
        },
        {
          image: "./img/02.webp",
          title: "Ratchet & Clank: Rift Apart",
          text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
        },
        {
          image: "./img/03.webp",
          title: "Fortnite",
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        },
        {
          image: "./img/04.webp",
          title: "Stray",
          text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
        },
        {
          image: "./img/05.webp",
          title: "Marvel's Avengers",
          text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
        },
      ],
    };
  },
  methods: {

  }
}).mount("#app");