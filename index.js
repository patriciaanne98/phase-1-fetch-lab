//In index.js, there is an empty function, fetchBooks(), that is called when index.html is loaded. To pass this lab, this function should include a fetch request to the Game of Thrones API (https://anapioficeandfire.com/api/books)links to an external site. The returned response should be converted to JSON. Then, it should call the second function, renderBooks(), passing in the JSON-ified data as the argument. To check if you have done this correctly, open up the index.html page of this lab; you should see a list of Game Of Thrones titles on your webpage.
//NOTE: The tests in this lab need to access the fetch() request you will create inside fetchBooks(). In order to give them access, write your solution so that fetchBooks() returns the fetch(). This will not change the behavior of your fetch().
document.addEventListener('DOMContentLoaded', fetchBooks)

function fetchBooks() {
   const url = "https://anapioficeandfire.com/api/books"

   return fetch(url)
   .then((response) => response.json())
   .then((data) => {
    console.log(data);
    renderBooks(data);
   })
  }

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

//document.addEventListener('DOMContentLoaded', function() {
  //const fetchBooks = document.getElementById('fetchBooks');
 // fetchBooks.addEventListener('click', function() {
   // fetch("https://anapioficeandfire.com/api/books")
     // .then(response => response.json())
      //.then(data => {
      
     // })
      //.catch(error => {
;
 //})
//})
//})