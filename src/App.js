import * as React from 'react';
import './App.css';
import { BookList } from './components/BookList';
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
      // console.log('response');
      // console.log(response);
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
  console.log(books);
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
              <BookList books={books} setBooks={setBooks} />
            </Route>
            <Route path='/search'>
              <SearchBooks books={books} setBooks={setBooks} loading={loading}/>
            </Route>
          </Switch>
        </div>
        <SearchButtton loading={loading} />
      </Router>
    </div>
  );
}

export default App;
