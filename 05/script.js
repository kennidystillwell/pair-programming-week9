//Exercise 5

class Bookshelf {
  constructor(){
      this.title = [];
  }
  addBook(newBook){
      this.title.push(newBook);
      console.log(`${newBook.title} has been added to the bookshelf.`);
    }
  removeBook(lessBook){
    const indexToRemove = this.title.findIndex(book => book.title === lessBook.title);
    this.title.splice(indexToRemove, 1);
    console.log(`${lessBook.title} has been removed from the bookshelf.`);
  }
  getTotalBooks(){
      return this.title.length;
  }
  logAllTitles() {
    this.title.forEach(book => console.log(`These are the books in the bookshelf: ${book.title}`));
  }
}
const bookshelf = new Bookshelf();
bookshelf.addBook({title : "The Great Gatsby"});
bookshelf.addBook({title : "To Kill a Mockingbird"});
bookshelf.addBook({title : "Pride and Prejudice"});
console.log(bookshelf.getTotalBooks()); // 3
bookshelf.removeBook({title : "To Kill a Mockingbird"});
bookshelf.removeBook({title : "Pride and Prejudice"});
console.log(bookshelf.getTotalBooks()); // 2
bookshelf.logAllTitles();

