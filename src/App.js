import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import BookList from './components/BookList';
import Categories from './components/Categories';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <main className="App">
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
