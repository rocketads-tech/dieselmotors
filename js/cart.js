if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

const cartItems = document.querySelectorAll("li.cart-item");
const totalAmount = document.getElementById("totalAmount");
const totalNumber = document.getElementById("totalNumber");

if (cartItems.length > 0) {
  cartItems.forEach((item) => {
    const productCount = item.querySelector("#productCount"),
      minus = item.querySelector("#minus"),
      plus = item.querySelector("#plus"),
      priceNumber = item.querySelector(".price__number"),
      amountNumber = item.querySelector(".item-amount__number");

    let count = 0;
    let amountValue = parseInt(totalAmount.innerText);

    function increaseCount() {
      count++;
      productCount.value = count;
      countAmount();
    }

    function decreaseCount() {
      if (count > 0) {
        count--;
      }
      productCount.value = count;
      countAmount();
    }

    function countAmount() {
      const amount = productCount.value * parseInt(priceNumber.innerText);

      amountNumber.innerText = amount;
      amount === 0 ? (amountNumber.innerText = "0000") : false;
      priceNumber.innerText === ""
        ? ((priceNumber.innerText = "0000"), (amountNumber.innerText = "0000"))
        : false;

      let x = 0;
      let y = 0;
      cartItems.forEach((i) => {
        x = x + parseInt(i.querySelector(".item-amount__number").innerText);
        y = y + parseInt(i.querySelector("#productCount").value);
        return x, y;
      });
      totalAmount.innerText = x;
      totalNumber.innerText = y;
    }

    countAmount();

    minus.addEventListener("click", () => {
      decreaseCount();
    });
    plus.addEventListener("click", () => {
      increaseCount();
    });

    productCount.addEventListener("input", () => {
      countAmount();
    });
    const deleteBtn = item.querySelector(".delete__btn");
    deleteBtn.addEventListener('click', () => {
      item.remove();
      countAmount();
    })
  });
} else false;


