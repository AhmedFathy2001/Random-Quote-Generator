let quote = document.getElementById('quote')
let author = document.getElementById('author')
let quoteBtn = document.getElementById('quoteBtn')
let tweetBtn = document.getElementById('tweetBtn')
let index


let allQuotes

const getNewQuote = async() => {
        //api for quotes
        let url = "https://type.fit/api/quotes"
            // fetch the data from api
        const response = await fetch(url)
            // make the quotes json format
        allQuotes = await response.json()
    }
    //call the function to load the api quotes
getNewQuote()

function buttonPress() {
    //removes the .active class on the quote and author
    removeQuote()
        //adds the .active class on the quote and author with a delay of 0.1s
    setTimeout(() => {
            showQuote()
        }, 100)
        //Gets a random index from the array
    index = Math.floor(Math.random() * allQuotes.length)
        // Checks if the Author is null or undefined and sets it to Anonymous
    if (!allQuotes[index].author) {
        allQuotes[index].author = "Anonymous"
    }
    //assigns the values in the HTML for the quote and the author according to the index in the object
    quote.innerText = allQuotes[index].text
    author.innerText = allQuotes[index].author


    //adds a tweet link for the tweet button for users to tweet currect quote
    tweetBtn.href = "https://twitter.com/intent/tweet?text=" + allQuotes[index].text + "%0a - " + allQuotes[index].author + "%0a Generated by: https://randomquotegenerator.w3spaces.com/"

}

function removeQuote() {
    quote.classList.remove('active')
    author.classList.remove('active')
}

function showQuote() {
    quote.classList.add('active')
    author.classList.add('active')
}
// Event listener for the main quote me button
quoteBtn.addEventListener('click', buttonPress)