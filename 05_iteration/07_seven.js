// filter : retun value automatically

const books = [
  { title: "The Hobbit", genre: "Fantasy", publishYear: 1937, editionYear: 2015 },
  { title: "The Lord of the Rings", genre: "Fantasy", publishYear: 1954, editionYear: 2011 },
  { title: "A Game of Thrones", genre: "Fantasy", publishYear: 1996, editionYear: 2018 },
  { title: "1984", genre: "Dystopian", publishYear: 1949, editionYear: 2008 },
  { title: "Brave New World", genre: "Dystopian", publishYear: 1932, editionYear: 2009 },
  { title: "The Handmaid's Tale", genre: "Dystopian", publishYear: 1985, editionYear: 2017 },
  { title: "Pride and Prejudice", genre: "Romance", publishYear: 1813, editionYear: 2012 },
  { title: "The Notebook", genre: "Romance", publishYear: 1996, editionYear: 2014 },
  { title: "Outlander", genre: "Romance", publishYear: 1991, editionYear: 2016 },
  { title: "Dune", genre: "Science Fiction", publishYear: 1965, editionYear: 2019 },
  { title: "Ender's Game", genre: "Science Fiction", publishYear: 1985, editionYear: 2013 },
  { title: "The Martian", genre: "Science Fiction", publishYear: 2011, editionYear: 2014 }
];

let userBooks = books.filter((bk) => bk.genre === "Science Fiction");
userBooks = books.filter((bk) => { return bk.publishYear >= 2000 });
userBooks = books.filter((bk) => { 
    return bk.publishYear >= 1995 && bk.genre === "Fantasy";
});


console.log(userBooks);