//add act class in selected list item
let menuToggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
menuToggle.onclick = function () {
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
};

let list = document.querySelectorAll(".list");

for (let i = 0; i < list.length; i++) {
  list[i].onclick = function () {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove("active");
    }
    list[i].classList.add("active");
  };
}
