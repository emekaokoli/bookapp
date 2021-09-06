import * as React from 'react';
import './App.css';
import BookLIst from './components/BookLIst';
import * as API from './utils/BooksAPI';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { SearchBooks } from './components/SearchBooks';
import { SearchButtton } from './helpers/SearchButtton';

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
            <Route
              exact
              path='/'
              render={(props) => (
                <BookLIst books={books} {...props} setBooks={setBooks} />
              )}
            />
            <Route
              path='/search'
              render={(props) => (
                <SearchBooks books={books} setBooks={setBooks} {...props} />
              )}
            />
          </Switch>
        </div>
        <SearchButtton loading={loading}/>
      </Router>
    </div>
  );
}

export default App;
