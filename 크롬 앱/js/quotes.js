const quotes = [
    {
        quote: "겁쟁이는 사랑을 드러낼 능력이 없다. 사랑은 용기있는 자의 특권이다.",
        author: "마하트마 간디",
    },
    {
        quote: "아, 인생은 노래의 아름다운 순환이며, 즉흥 연주의 메들리다. 그리고 사랑은 절대 잘못될 수 없는 것이다. 그리고 나는 루마니아의 마리다.",
        author: "도로시 파커",
    },
    {
        quote: "성공이 그렇게 달콤한 것은 결코 성공하지 못한 사람들이 있기 때문이다.",
        author: "에밀리 디킨스",
    },
    {
        quote: "공부벌레들에게 잘 해주십시오. 나중에 그 사람 밑에서 일하게 될 수도 있습니다.",
        author: "빌 게이츠",
    },
    {
        quote: "인생에서 성공하는 이는 꾸준히 목표를 바라보며 한결같이 그를 좇는 사람이다. 그것이 헌신이다.",
        author: "세실 B. 드밀",
    },
    {
        quote: "나약한 태도는 성격도 나약하게 만든다.",
        author: "알버트 아인슈타인",
    },
    {
        quote: "실패가 나태함에 대한 유일한 징벌은 아니다. 다른 이들의 성공도 있지 않은가.",
        author: "쥘 르나르",
    },
    {
        quote: "미래는 탁한 거울이다. 누구든 들여다 보려 하면 늙고 근심 어린 얼굴의 희미한 윤곽만 볼 뿐이다.",
        author: "짐 비숍",
    },
];

const quote = document.querySelector("#quote p:first-child");
const author = document.querySelector("#quote p:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
// Math.random() 0부터 1사이 무작위의 값을 반환해줌
// Math.floor() 내림
// Math.ceil() 올림
// Math.round() 반올림

quote.innerText = todayQuote.quote;
author.innerHTML = `-${todayQuote.author}-`;