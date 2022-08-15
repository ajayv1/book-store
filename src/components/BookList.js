import Book from "./Book";
import './book.css';

import { Books } from './books';

const BookList = () => {
  return (
    <div className="booklist">
      {
        Books.map((book) => {
          return <Book key={book.id} {...book}/>;
        })
      }
    </div>
  )
};

export default BookList;