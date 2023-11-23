
function Author(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
  }
  
  
  function Book(title, author, genre, price) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
  }
  
  
  Book.prototype.getBookInfo = function () {
    console.log(
      `Title: ${this.title}\nAuthor: ${this.author.name}\nGenre: ${this.genre}\nPrice: $${this.price}`
    );
  };
  
  // Creating instances of Author and Book
  const author1 = new Author("J.K. Rowling", 1965, "British");
  const book1 = new Book("Harry Potter and the Sorcerer's Stone", author1, "Fantasy", 29.99);
  
  const author2 = new Author("George R.R. Martin", 1948, "American");
  const book2 = new Book("A Game of Thrones", author2, "Fantasy", 39.99);
  
  const author3 = new Author("Jane Austen", 1775, "British");
  const book3 = new Book("Pride and Prejudice",author3,"classic",19.99);

  book1.getBookInfo();
  console.log("--------------");
  book2.getBookInfo();
  console.log("--------------");
  book3.getBookInfo();
  