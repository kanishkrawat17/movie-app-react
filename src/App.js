import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import MovieCard from './components/MovieCard';
import Pagination from './components/Pagination';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <div className = "movieCard-box">
      <MovieCard />
      </div>
      <Pagination />
    </>
  );
}

export default App;
