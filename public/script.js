// When the user scrolls the page, execute onScrollGhazaal
window.onscroll = function () {
  onScrollGhazaal();
};

// Get the header
var header = document.getElementById("myHeader");
var navbar = document.getElementById("ghazaal-navbar");
var shop_list = document.getElementById("shop-list-box");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function onScrollGhazaal() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    navbar.classList.add("user-specific-container-withlogo");
  } else {
    header.classList.remove("sticky");
    navbar.classList.remove("user-specific-container-withlogo");
  }
}

function bascket_clicked() {
  if (shop_list.style.display != "block") {
    shop_list.style.display = "block";
    setTimeout(function () {
      shop_list.style.opacity = 1;
    }, 10);
  } else {
    shop_list.style.opacity = 0;
    setTimeout(function () {
      shop_list.style.display = "none";
    }, 150);
  }
}

function body_clicked() {
  console.log("body clicked!");
}

var exclude_class_name = ["shop-bascket", "shop-list"];

document.getElementsByTagName("body")[0].onclick = function (element) {
  let exclude = true;
  element.path.forEach((item) => {
    if (item.classList) {
      item.classList.forEach((classname) => {
        if (exclude_class_name.includes(classname)) {
          exclude = false;
        }
      });
    }
  });

  if (exclude) {
    shop_list.style.opacity = 0;
    setTimeout(function () {
      shop_list.style.display = "none";
    }, 150);
  }
};

function price_calc(type) {}

function delete_item_shop(item) {
  removed_price = parseInt(item.getElementsByClassName("price")[0].innerText);

  let sum_price_element = document.querySelector(
    ".buy-summary .summary .price"
  );
  sum_price = parseInt(sum_price_element.innerText);
  sum_price -= removed_price;
  sum_price_element.innerText = sum_price + " تومان ";
  post('/orderlist/deleteorderdetail',{order_detailId: item.id})

  item.remove();
}

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function add_item_to_bascket(item) {
  console.log("a");
  setCookie("item_list", item.innerText, 3);
}


function post(path, params, method='post') {

  // The rest of this code assumes you are not using a library.
  // It can be made less verbose if you use one.
  const form = document.createElement('form');
  form.method = method;
  form.action = path;

  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      const hiddenField = document.createElement('input');
      hiddenField.type = 'hidden';
      hiddenField.name = key;
      hiddenField.value = params[key];

      form.appendChild(hiddenField);
    }
  }

  document.body.appendChild(form);
  form.submit();
}



function change_count(btn,orderdetailId , count) {
  let numberelement = btn.querySelector(".number");
  let priceelement = btn.parentElement.querySelector('.price') ;
  let new_number = parseInt(numberelement.innerText) + count;
  if (new_number < 1)
  {  new_number=1
    return 1;
  }
  numberelement.innerText = new_number;
  let new_price =( parseInt(priceelement.innerText)/(new_number-count ))* new_number ; 
  //let unit_price = btn.parentElement.querySelector(".unit_price");
  //let new_price = parseInt(unit_price.innerText) * new_number;
  let price = btn.parentElement.querySelector(".price");
  price.innerText = new_price ;
  post('/oderlist/cahngeOrderItem/', {orderdetailId: orderdetailId , quantity : new_number ,total_price :new_price});
  //priceelement.innerText = total_price; 

  let sum_price_element = document.querySelector(
    ".buy-summary .summary .price"
  );
  let sum_price = 0;
  let all_items = document.querySelectorAll(".buy-items .items .item");
  all_items.forEach((a) => {
    sum_price += parseInt(a.getElementsByClassName("price")[0].innerText);
  });
  sum_price_element.innerText = sum_price + " تومان ";
}

function finishbuy(element){
  console.log("update status ")
  post("/orderlist/updatestatus",{orderId : element.id/100 })
}



