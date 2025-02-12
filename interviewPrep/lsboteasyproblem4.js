/*
Given an array of objects representing books (each with properties
like title, author, and year), write a function that returns a
new array of book titles published after a given year.

algorithm

create function bookYear that takes array of objects
filter elements
*/

function bookYear(bookList, year) {
  return bookList.filter(book => book["published"] > year);
}

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

console.log(bookYear(books, 1890));
