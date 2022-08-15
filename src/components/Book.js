const Book = ({ title, author, image }) => {
  return (
    <div className="book">
      <img src={image} alt="Book1" />
      <h2 className="title">{title}</h2>
      <h4 className="author">{author}</h4>
    </div>
  )
};

export default Book;