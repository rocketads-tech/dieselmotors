if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

const dropdowns = document.querySelectorAll(".dropdown");

function addActiveClass(item) {
  item.classList.add("active");
}
function removeActiveClass(item) {
  item.classList.remove("active");
}

function toggleActiveClass(item) {
  item.classList.toggle("active");
}

dropdowns.length > 0 ? dropdownFunc() : false;

function dropdownFunc(params) {
  dropdowns.forEach((dropdown) => {
    const dropdownBtn = dropdown.querySelector(".dropdown__btn"),
      dropdownList = dropdown.querySelector(".dropdown__list"),
      dropdownListItems = dropdown.querySelectorAll(".dropdown__list-item"),
      btnValue = dropdown.querySelector("#btnValue"),
      paymentMethod = dropdown.querySelector(".current-value");

    dropdownBtn.addEventListener("click", (e) => {
      e.preventDefault();
      toggleActiveClass(dropdownBtn);
      toggleActiveClass(dropdownList);
    });

    dropdownListItems.forEach((item) => {
      paymentMethod.value = dropdownListItems[0].textContent;

      item.addEventListener("click", (e) => {
        e.stopPropagation();
        const currentValue =
          item.querySelector(".list-item__value").textContent;
        btnValue.innerText = currentValue;
        paymentMethod.value = currentValue;
        removeActiveClass(dropdownList);
        removeActiveClass(dropdownBtn);
        dropdownBtn.focus();
      });
    });

    document.addEventListener("click", (e) => {
      if (e.target !== dropdownBtn) {
        removeActiveClass(dropdownList);
        setTimeout(() => {
          removeActiveClass(dropdownBtn);
        }, 50);
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Tab" || e.key === "Escape") {
        removeActiveClass(dropdownList);
        setTimeout(() => {
          removeActiveClass(dropdownBtn);
        }, 50);
      }
    });
  });
}
