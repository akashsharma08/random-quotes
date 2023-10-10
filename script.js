const btn = document.querySelector(".btn");
const URL = "https://api.quotable.io/random";
const quote = document.querySelector("#quote");3
const author = document.querySelector("#author");

getQuote();

async function getQuote() {
    try {
        btn.innerText = "...Fetching"
        btn.disabled = true ;
        quote.innerText = "Please wait";
        const result = await fetch(URL);
        const data = await result.json();
        quote.innerText = data.content;
        author.innerText = "~ " + data.author;
        btn.innerText = "Get Another Quote"
        btn.disabled = false;         
        
    } catch (error) {
        quote.innerText = "Sorry, An error occured" ;
        author.innerText = "Unavailable" ;
        btn.disabled = false;         
    }
}




btn.addEventListener("click", getQuote);
