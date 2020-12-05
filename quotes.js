(function(){
	const quotes = [
    { source: "N.W.Mattise", quote: "Tabs over spaces.", },
    { source: "N.W.Mattise", quote: "The faster you go the further you'll get; the slower you go the more you'll see.", },
    { source: "N.W.Mattise", quote: "If you're not falling, you're not going hard enough.", },
    { source: "Unknown", quote: "Keep the rubber side down." },
    { source: "Greg LeMond", quote: "It never gets easier, you just get faster." },
];
let q =quotes[Math.floor(Math.random()*quotes.length)];
console.log(q);
document.getElementById('quote').innerHTML =  `"${q.quote}"  -${q.source}`;
})()