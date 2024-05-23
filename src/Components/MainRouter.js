import React from 'react';
import Main from '../Components/Main';
import Counter from '../Components/Imagecounter';
import EducationalBooks from '../Components/EducationalBooks';
import Sciencebooks from '../Components/Science_books';
import FictionalBooks from './ScienceFictional';
import Footer from '../Components/Footer';
import MysteryBooks from './Mystery_Books';
import Mystery from './Mystery';
import books from './Books';
// import handleBookClick from './handleBookClick';
import Navbar from './Navbar';
import Cook from './Coook';
import CookBooks from './Cook_book';
const MainContent = (handleBookClick) => {
  return (
    <>
    
      <Main />
      
      <section id="counter-section">
        <Counter />
      </section>
      <div className="App">
        <h1>Educational Books</h1>
        <EducationalBooks books={books} onBookClick={handleBookClick} />
        <h1>Sciencebooks</h1>
        <FictionalBooks books={Sciencebooks} onBookClick={handleBookClick} />
        <h1>Mystery Books</h1>
        <MysteryBooks books={Mystery} onBookClick={handleBookClick} />
        
        <h1>CookBooks</h1>
        <CookBooks books={Cook} onBookClick={handleBookClick} />
        

      </div>
      
      
    </>
  );
};

export default MainContent;