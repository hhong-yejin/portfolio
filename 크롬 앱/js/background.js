const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpeg",
    "6.jpeg"
];

const body = document.querySelector("body");

const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgimage = document.createElement("img");
// js에서 html 요소(태그) 생성(js내에서만, html 파일에 추가 안 됨)

// bgimage.src = `images/${chosenImage}`;
const url = `images/${chosenImage}`;

document.body.style.backgroundImage = `url(${url})`
// bodydp html 정의한 값을 가장 뒤에서 기입함
// prependChild() 반대로 앞에서 기입