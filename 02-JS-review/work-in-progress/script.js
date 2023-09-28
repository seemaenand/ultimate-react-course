// const data is an array that contains 5 book objects
// one object for each book

const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

// this function return all the data
function getBooks() {
  return data;
}

// this will pass th
function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring
// Destructuring is very important if we want to get data out of an object or out of an array

// Destructuring of objects

const book = getBook(2);
// book;
// we want title and author of a certain book
// const title = book.title;
// const author = book.author;

// console.log(title, author);

// reading data like this will be too cumbersome especially if there are a lot of properties - thats why we have object destructuring
// the variable names in the below code has to be exact as the properties in the object
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
// console.log(title, author, genres);

// destructuring of arrays is pretty similar but instead of relying on property names, it simply relies on the order of the array

// so lets work with the genres array
// const primaryGenre = genres[0];
// primaryGenre;
// const secondaryGenre = genres[1];
// secondaryGenre;
// console.log(primaryGenre, secondaryGenre);

//  we can destructure the above code
// const [primaryGenre, secondaryGenre] = genres;
// console.log(primaryGenre, secondaryGenre);

// Rest and spread operator
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);

// now instead of just 2 genres, we also want the others so in the above code we will write ...and then we write any name that we want.
// other genres will be shown as an array

// the same syntax that is the three dots ... is used for the spread operator
// the spread operator can be used both on arrays and on objects

// lets first look at array first. we want to make a new array of genres with the old genres and add a new one at the end.
// const newGenres = [genres, "Epic fantasy"];
// newGenres;
//  in this form, we have an array inside of an array and we dont want that.
// we want just one array
const newGenres = [...genres, "Epic fantasy"];
newGenres;
// we can even place it ...genres at the end.

// spread operators in objects
// it helps us to add new properties and also update the existing
const updatedBook = { book, moviePublicationDate: "2001-02" };
updatedBook;
// but we want one big object
const newUpdatedBook = { ...book, moviePublicationDate: "2001-02" };
newUpdatedBook;
// we can also update the properties
const newNewUpdated = { ...book, pages: 1210 };
newNewUpdated;
