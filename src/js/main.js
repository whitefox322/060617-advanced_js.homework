var form = document.querySelector(".reg");
var button1 = document.querySelector("#btn1");
var button2 = document.querySelector("#btn2");
var button3 = document.querySelector("#btn3");
var list1 = document.querySelector("#list1");
var list2 = document.querySelector("#list2");
var list3 = document.querySelector("#list3");
var ACTIVE = "active";
var REGLIST = "reg__list";

list1.className = ACTIVE;

button1.addEventListener("click", function (e) {
    e.preventDefault();

    list1.className = ACTIVE;
    list2.className = REGLIST;
    list3.className = REGLIST;
});

button2.addEventListener("click", function (e) {
    e.preventDefault();

    list2.className = ACTIVE;
    list1.className = REGLIST;
    list3.className = REGLIST;
});

button3.addEventListener("click", function (e) {
    e.preventDefault();

    list3.className = ACTIVE;
    list2.className = REGLIST;
    list1.className = REGLIST;
});

for (var i = 0; i < form.elements.length; i++) {
    var current = form.elements[i];
    current.addEventListener("invalid", function (e) {
        if (this.willValidate && !this.validity.valid && this.getAttribute("data-type") !== "email") {
            var span = document.createElement("span");
            span.textContent = "Error";
            span.className = "reg__span";
            if (!this.parentElement.span) {
                this.parentElement.appendChild(span);
            }
        }
    });
}

form.addEventListener("submit", function (e) {
    for (var i = 0; i < form.elements.length; i++) {
        var current = form.elements[i];
        if (current.getAttribute("data-type") === "email" && !validateEmail(current.value)) {
            var span = document.createElement("span");
            span.textContent = "Wrong email";
            span.className = "reg__span";
            if (!current.parentElement.span) {
                current.parentElement.appendChild(span);
            }
        }
    }
    if (!this.checkValidity()) {
        alert("Huston, we have problems! Try again!");
    } else {
        alert("Success");
    }

    e.preventDefault();
});

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}