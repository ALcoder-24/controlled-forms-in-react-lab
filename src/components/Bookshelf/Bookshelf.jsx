import { useState } from "react";

function Bookshelf() {
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ]);

  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setNewBook({
        ...newBook,
        [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setBooks([...books, newBook]);

    setNewBook({
        title: '',
        author: '',
    });
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        
        <form onSubmit={handleSubmit}>
            <label>Title:</label>
            <input
            type="text"
            name="title"
            placeholder="Book Title"
            value={newBook.title}
            onChange={handleInputChange}
            />

            <label>Author:</label>
            <input
            type="text"
            name="author"
            placeholder="Author"
            value={newBook.author}
            onChange={handleInputChange}
            />

            <button type="submit">Add Book</button>
        </form>
        </div>
      
      <div className="bookCardsDiv">
        {books.length === 0 && <p>No books yet. Add more</p>}
        {books.map((book, index) => (
            <div key={index} className="bookCard">
                <h4>{book.title}</h4>
                <p>by {book.author}</p>
        </div>
        ))}
    </div>
    </div>
  );
}
 


export default Bookshelf; 