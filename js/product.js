let thumbnails = document.querySelectorAll(".product-slider__thumbnail"),
	activeThumbnail = document.getElementsByClassName(
		".product-slider__thumbnail active"),
	buttonPrev = document.getElementById('arrowPrev'),
	buttonNext = document.getElementById('arrowNext');

const mainImg = document.getElementById("featured"),
	slider = document.querySelector(".product-slider__thumbnails"),
	productCount = document.getElementById("productCount"),
  minusCount = document.getElementById("minus"),
	plusCount = document.getElementById("plus");
	
console.log(productCount)


let srcset;
let src;

for (let i = 0; i < thumbnails.length; i++) {

	thumbnails[i].addEventListener("mouseover", function () {
		thumbnails.forEach((el) => el.classList.remove("active"));

    this.classList.add("active");
    getSrc(thumbnails[i]);
    setSrc(mainImg);
  });
}

function getSrc(el) {
  if (el.children[0].childElementCount > 0) {
		srcset = el.children[0].children[0].srcset;
    src = el.children[0].children[1].src;
  } else {
    src = el.children[0].src;
	}
	return src, srcset
}

function setSrc(el) {
  if (el.children[0].childElementCount > 0) {
    el.children[0].children[0].srcset = srcset;
    el.children[0].children[1].src = src;
  } else {
    el.children[0].src = src;
  }
  return el;
}

function scrollForFullScreen() {
  buttonPrev.addEventListener("click", function () {
		slider.scrollTop += slider.offsetWidth + 16;
		let activeIndex = -1;
    for (let i = 0; i < thumbnails.length; i++) {
      if (thumbnails[i].className.includes("active")) {
        activeIndex = i;
        let currentIndex = activeIndex + 1;
        console.log(currentIndex);
        thumbnails[i].classList.remove("active");
        thumbnails[currentIndex].classList.add("active");
        getSrc(thumbnails[currentIndex]);
        setSrc(mainImg);
        break;
      }
    }
  });
	buttonNext.addEventListener("click", function () {
		slider.scrollTop -= slider.offsetWidth + 16;
		let activeIndex = -1;
    for (let i = 0; i < thumbnails.length; i++) {
      if (thumbnails[i].className.includes("active")) {
        activeIndex = i;
        let currentIndex = activeIndex - 1;
        console.log(currentIndex);
        thumbnails[i].classList.remove("active");
        thumbnails[currentIndex].classList.add("active");
        getSrc(thumbnails[currentIndex]);
        setSrc(mainImg);
        break;
      }
    }
  });

  const sliderScroll = () => {

    if (slider.scrollTop === 0) {
			buttonNext.classList.add("no-active");
    } else buttonNext.classList.remove("no-active");
    if (
      Math.ceil(slider.scrollTop) ===
			slider.scrollHeight - slider.offsetHeight
		) {
      buttonPrev.classList.add("no-active");
    } else buttonPrev.classList.remove("no-active");
  };
  slider.addEventListener("scroll", sliderScroll);
}

function scrollForMobScreen() {
	buttonPrev.addEventListener("click", function () {
		slider.scrollLeft += slider.offsetHeight + 8;
		let activeIndex = -1;
    for (let i = 0; i < thumbnails.length; i++) {
      if (thumbnails[i].className.includes("active")) {
        activeIndex = i;
        let currentIndex = activeIndex + 1;
        console.log(currentIndex);
        thumbnails[i].classList.remove("active");
        thumbnails[currentIndex].classList.add("active");
        getSrc(thumbnails[currentIndex]);
        setSrc(mainImg);
        break;
      }
    }
  });
  buttonNext.addEventListener("click", function () {
    slider.scrollLeft -= slider.offsetHeight + 8;
    let activeIndex = -1;
    for (let i = 0; i < thumbnails.length; i++) {
      if (thumbnails[i].className.includes("active")) {
        activeIndex = i;
        let currentIndex = activeIndex - 1;
        console.log(currentIndex);
        thumbnails[i].classList.remove("active");
        thumbnails[currentIndex].classList.add("active");
        getSrc(thumbnails[currentIndex]);
        setSrc(mainImg);
        break;
      }
    }
  });

  const sliderToScroll = () => {

    if (slider.scrollLeft === 0) {
      buttonNext.classList.add("no-active");
    } else buttonNext.classList.remove("no-active");
    if (
      Math.ceil(slider.scrollLeft) ===
      slider.scrollWidth - slider.offsetWidth
    ) {
      buttonPrev.classList.add("no-active");
    } else buttonPrev.classList.remove("no-active");
  };
  slider.addEventListener("scroll", sliderToScroll);
}

function executeFunctionBasedOnScreenWidth() {
  if (window.innerWidth > 768) {
    scrollForFullScreen();
  } else {
    scrollForMobScreen();
    const currentHeight = mainImg.offsetWidth;
    mainImg.style.height = currentHeight + "px";
    mainImg.style.marginBottom = 12 + "px";
  }
}

executeFunctionBasedOnScreenWidth();

window.addEventListener("resize", executeFunctionBasedOnScreenWidth);

minusCount.addEventListener('click', () => {
	let currentVal = parseInt(productCount.textContent, 10);
	currentVal > 0 ? productCount.innerText = currentVal - 1 : false;
})
plusCount.addEventListener('click', () => {
	let currentVal = parseInt(productCount.textContent, 10);
	productCount.innerText = currentVal + 1;
});



