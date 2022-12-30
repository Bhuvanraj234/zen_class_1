const FETCH_BOOK_URL = "https://anapioficeandfire.com/api/books"
const FETCH_CHARACTER_URL = "https://anapioficeandfire.com/api/characters"
// Document Object Model (DOM) is a cross-platform and language-independent
window.addEventListener("DOMContentLoaded", function () {
    this.fetchBooks(this.getPageNumber)
}, false)


function getPageNumber() {
    // get the url parameters
    let urlParams = new URLSearchParams(window.location.search);
    // get the page number
    return urlParams.get('page');
}

async function fetchBooks(pageNumber) {
    pageNumber = (pageNumber%2)==0 ? 2 : 1
    let books = await this.fetchURL(FETCH_BOOK_URL, `page=${pageNumber}`)
    let bookLength = books.length
    let main_div = document.getElementById('list-books');
        main_div.innerHTML = ""
    for (let i = 0; i < bookLength; i++) {
        let book = books[i];
        let characters = book.characters;
        let charactersLength = characters.length
        let charactersName = []
        if (charactersLength) {
            for (let j = 1; j < charactersLength; j++) {
                let data = await this.fetchURL(`${FETCH_CHARACTER_URL}/${j}`)
                if (data?.aliases?.length) charactersName.push(data.aliases[0])
                if (charactersName.length > 4) break;
            }
        }
        // append books to div using dom
        this.insertBooks({ book, charactersName })
    }
}

// dom insert tag
function insertBooks(data) {
    let { book, charactersName } = data
    let main_div = document.getElementById('list-books');
    let row = document.createElement('div');
    row.setAttribute("class", "d-flex p-5 box")
    let imageTag = `<img src="https://picsum.photos/200?${Math.random()}" alt="book image" />`
    let bookNameTag = `<p>Book Name: <strong>${book.name}</strong></p>`
     let isbnTag = `<p>isbn: <strong>${book.isbn}</strong></p>`
     let noOfPages = `<p>No of pages: <strong>${book.numberOfPages}</strong></p>`
     let author = `<p>Author: <strong>${book.authors}</strong></p>`
     let publisher = `<p>Publisher: <strong>${book.publisher}</strong></p>`
     let releasedDate = `<p>Released Date: <strong>${book.released}</strong></p>`
     let charName = `<p>Character Names: <strong> ${charactersName.join(", ")}</strong></p>`
    let contentTag = `<div style="margin-left: 20px;">${bookNameTag}${isbnTag}${noOfPages}${author}${publisher}${releasedDate}${charName}</div>`
    row.innerHTML = `${imageTag}${contentTag}`;
    main_div.appendChild(row)
}

async function fetchURL(url, query) {
    if (!query) query = ""
    else query = `?${query}`
    return await fetch(`${url}${query}`).then(res => {
        return res.json()
    }).catch(err => console.log(err))
}

function prevPage() {
     let pageNumber = this.getPageNumber()
     let page = pageNumber <=1 ? 1 : parseInt(pageNumber) - 1
     this.fetchBooks(page)
     let searchParams = new URLSearchParams(window.location.search);
    if(page == 1){
        document.getElementById('prevPage').disabled = true
    }
    else{
        document.getElementById('prevPage').disabled = false
        document.getElementById('nextPage').disabled = false
    }
    searchParams.set("page", page);

    if (window.history.replaceState) {
        const url = window.location.protocol 
                    + "//" + window.location.host 
                    + window.location.pathname 
                    + "?" 
                    + searchParams.toString();

        window.history.replaceState({
            path: url
        }, "", url)
}}
function nextPage() {
    let pageNumber = this.getPageNumber()
    let page = pageNumber >=5 ? 5 : parseInt(pageNumber) + 1
    this.fetchBooks(page)
    let searchParams = new URLSearchParams(window.location.search);
    if(page == 5){
        document.getElementById('nextPage').disabled = true
    }
    else{
        document.getElementById('nextPage').disabled = false
        document.getElementById('prevPage').disabled = false
    }

    searchParams.set("page", page);

    if (window.history.replaceState) {
        const url = window.location.protocol 
                    + "//" + window.location.host 
                    + window.location.pathname 
                    + "?" 
                    + searchParams.toString();

        window.history.replaceState({
            path: url
        }, "", url)
}
}
