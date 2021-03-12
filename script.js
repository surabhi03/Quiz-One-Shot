var textWrapper = document.querySelector(".ml2");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime.timeline().add({
  targets: ".ml2 .letter",
  scale: [4, 1],
  opacity: [0, 1],
  translateZ: 0,
  easing: "easeOutExpo",
  duration: 950,
  delay: (el, i) => 70 * i,
});

var quotes = [
  "“The secret of getting ahead is getting started.” – Mark Twain",
  "“All our dreams can come true, if we have the courage to pursue them.” – Walt Disney.",
  "“Do one thing every day that scares you.”― Eleanor Roosevelt",
  "“Whatever you are, be a good one.” ― Abraham Lincoln",
  "“Impossible is just an opinion.” – Paulo Coelho",
];
let now = 0;
function randomQuotes() {
  var idx = now++;
  var el = document.getElementById("changeQuote");
  el.classList.add("show");
  el.classList.remove("hide");
  el.innerHTML = quotes[idx];
  if (now >= quotes.length) now = 0;
  setTimeout(randomQuotes, 3000);
}
// getQuote();
randomQuotes();

// async function getQuote(){
//   const response = await fetch('http://quotes.rest/qod.json');
//   const data = await response.json();
//   quotes.push(data.contents.quotes[0].quote);
//   console.log(data.contents.quotes[0].quote);
// }
// const data = getQuote();
// console.log(data.contents);
