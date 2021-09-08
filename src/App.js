import * as React from 'react';
import './App.css';
import { BookList } from './components/BookList';
import * as API from './utils/BooksAPI';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { SearchBooks } from './components/SearchBooks';
import { SearchButton } from './helpers/SearchButton';

const shelf = [
  ['currentlyReading', 'Currently Reading'],
  ['wantToRead', 'Want to Read'],
  ['read', 'Read'],
];
export const shelfs = shelf.map((data) => data);

function App() {
  const [books, setBooks] = React.useState([]);
  const [loading, setloading] = React.useState(false);

  React.useEffect(() => {
    setloading(true);
    const getAllbooks = async () => {
      const response = await API.getAll();

      const newbook = response.map((book) => ({
        id: book.id,
        shelf: book.shelf,
        title: book.title,
        authors: book.authors,
        bookphoto: book.imageLinks.thumbnail,
      }));

      setBooks(newbook);
      setloading(false);
    };

    getAllbooks();
  }, []);

  const handleBookUpdate = async (book, shelf) => {
    book.shelf = shelf;

    await API.update(book, shelf).then((response) => {
      setBooks(books.filter((b) => b.id !== book.id).concat([book]));
    });
  };
  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
          textAlign: 'center',
        }}
      >
        Loading data...
      </div>
    );
  }

  return (
    <div className='App'>
      <Router>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
            textAlign: 'center',
          }}
        >
          <Switch>
            <Route exact path='/'>
              <BookList
                books={books}
                setBooks={setBooks}
                handleBookUpdate={handleBookUpdate}
              />
            </Route>
            <Route path='/search'>
              <SearchBooks
                books={books}
                setBooks={setBooks}
                handleBookUpdate={handleBookUpdate}
              />
            </Route>
          </Switch>
        </div>
        <SearchButton loading={loading} />
      </Router>
    </div>
  );
}

export default App;
