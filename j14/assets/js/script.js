// Add your JavaScript code here
// let box = document.getElementById("box");
// let text = document.querySelector("h1");

let btn = document.querySelector("button");

// function show_text(){
//     text.style.display = "block";
// }

// function hidden_text() {
//     text.style.display = "none";
// }

// box.addEventListener("mouseover", show_text);
// box.addEventListener("mouseout", hidden_text);

function show_set () {
    alert("اطلاعات ثبت شد");
    btn.style.backgroundColor = "#21aa28"
}

btn.addEventListener("click", show_set)

