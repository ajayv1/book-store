import './App.css';
import BookList from './components/BookList'; 

function App() {
  return (
    <div className="App">
      <h1 className="heading">Simple Book Store</h1>
      <BookList />
      <footer>
        <p>Made with <span class="heart">♥</span> by <a href="https://github.com/ajayv1/book-store">Ajay Verma</a></p>
      </footer>
    </div>
  );
}

export default App;
