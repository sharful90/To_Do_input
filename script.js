const qs = q => {
  return document.querySelector(q);
};

const ce = c => {
  return document.createElement(c);
};

let nam = qs(".names");
mal = qs(".emails");
num = qs(".numbers");
ab = qs(".add");
cb = qs(".Clear");
addRow = qs("#tbl");
let vv = [nam, mal, num];

ab.addEventListener("click", () => {
  if (nam.value == "") {
    nam.setAttribute("placeholder", "Please enter your Name !");
    nam.classList.add("pl");
  }
  if (mal.value == "") {
    mal.setAttribute("placeholder", "Please enter your Email !");
    mal.classList.add("pl");
  }
  if (num.value == "") {
    num.setAttribute("placeholder", "Please enter your Number !");
    num.classList.add("pl");
  } else {
    let del = ce("button");
    del.innerText = "Delete";
    var newRow = addRow.insertRow(1);
    var c1 = newRow.insertCell(0);
    var c2 = newRow.insertCell(1);
    var c3 = newRow.insertCell(2);
    var c4 = newRow.insertCell(3);
    c1.nam;
    c2.mal;
    c3.num;
    c4.append(del);

    c1.innerText = nam.value;
    c2.innerText = mal.value;
    c3.innerText = num.value;

    del.innerText = "Delete";
    del.setAttribute("class", "del");
    nam.value = "";
    del.addEventListener("click", function() {
      newRow = newRow.remove();
    });
    cb.addEventListener("click", function() {
      newRow = newRow.remove();
    });
  }
});

// ===============================

vv.forEach(data => {
  data.addEventListener("keyup", e => {
    if (e.keyCode === 13) {
      if (nam.value == "") {
        nam.setAttribute("placeholder", "Please enter your Name !");
        nam.classList.add("pl");
      }
      if (mal.value == "") {
        mal.setAttribute("placeholder", "Please enter your Email !");
        mal.classList.add("pl");
      }
      if (num.value == "") {
        num.setAttribute("placeholder", "Please enter your Number !");
        num.classList.add("pl");
      } else {
        let del = ce("button");
        del.innerText = "Delete";
        var newRow = addRow.insertRow(1);
        var c1 = newRow.insertCell(0);
        var c2 = newRow.insertCell(1);
        var c3 = newRow.insertCell(2);
        var c4 = newRow.insertCell(3);
        c1.nam;
        c2.mal;
        c3.num;
        c4.append(del);

        c1.innerText = nam.value;
        c2.innerText = mal.value;
        c3.innerText = num.value;

        del.innerText = "Delete";
        del.setAttribute("class", "del");
        nam.value = "";
        del.addEventListener("click", function() {
          newRow = newRow.remove();
        });
        cb.addEventListener("click", function() {
          newRow = newRow.remove();
        });
      }
    }
  });
});
