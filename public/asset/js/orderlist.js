// function salads(e) {
//   console.log(e);
//   let saldslist = document.querySelector(".salads");
//   if (!saldslist.classList.contains("salads-item-container-visible")) {
//     saldslist.style.position = "absolute";
//     saldslist.style.left = 100 + e.clientX + "px";
//     saldslist.style.top = 20 + e.clientY + "px";
//     saldslist.classList.add("salads-item-container-visible");
//   } else {
//     saldslist.classList.remove("salads-item-container-visible");
//   }
// }

function deleteOrder(e, element) {
  post('/orderlist/deleteorder' , {orderId : element.id/100})
  console.log(element.id);

  element.remove();
}
function accordian(e) {
  // console.log(e.nextElementSibling.classList);
  // console.log(e);
  // console.log(e.classList);
  // let list = document.querySelector(".foods-list-unorderd-items");
  // if (e.classList.contains("left")) {
  //   //should open now
  //   e.classList.remove("left");
  //   e.classList.add("down");
  //   // list.parentElement.nextElementSibling.style.maxHeight =
  //   //   list.scrollHeight + 30 + "px";
  // } else {
  //   e.classList.remove("down");
  //   e.classList.add("left");
  //   // list.nextElementSibling.style.maxHeight = null;
  // }
  // list.classList.toggle("foods-list-unorderd-items-hidden");
  // e.nextElementSibling.classList.toggle("food-and-count-item-visibile");
  let arrows = document.querySelectorAll(".arrow").forEach((value) => {
    if (value === e) {
      console.log("it is e");
      e.nextElementSibling.classList.toggle("food-and-count-item-visibile");
      if (e.classList.contains("left")) {
        //should open now
        e.classList.remove("left");
        e.classList.add("down");
        // list.parentElement.nextElementSibling.style.maxHeight =
        //   list.scrollHeight + 30 + "px";
      } else {
        e.classList.remove("down");
        e.classList.add("left");
        // list.nextElementSibling.style.maxHeight = null;
      }
    } else if (value.classList.contains("down")) {
      console.log("should close");
      value.classList.remove("down");
      value.classList.add("left");
      console.log(e);
      console.log(value.nextElementSibling);
      value.nextElementSibling.classList.add("food-and-count-item-visibile");
    }

    // console.log(value);
  });

  // console.log(arrows);
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


function deleteItem(parent) {
  let parentofparent = parent.parentElement;

  if (parentofparent.children.length == 1) {
    post('/orderlist/deleteorder',{orderId: parentofparent.parentElement.parentElement.parentElement.parentElement.parentElement.id/100});

    parentofparent.parentElement.parentElement.parentElement.parentElement.parentElement.remove();

  } else {
    parent.remove();
    post('/orderlist/deleteorderdetail',{order_detailId: parent.id})

  }

  // console.log(parent.parentElement.children.length);
}
function verifyorder(element){
  console.log("update status ")
  post("/orderlist/verifyorder",{orderId : element.id/100 })
  element.innerText = "تایید شد"
}