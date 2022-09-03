import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import { useState } from 'react';
import Portfolio from './components/Portfolio';

function App() {
  const [categories] = useState([
    {name: "about"},
    {name: "portfolio"},
    {name: "contact"},
    {name: "resume"}
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        { currentCategory.name === 'about' && 
          <About></About>
        }
        { currentCategory.name === 'portfolio' &&
          <Portfolio></Portfolio>
        }
        { currentCategory.name === 'contact' && 
        <div>this is the contact page</div>
        }
        { currentCategory.name === 'resume' && 
        <div>this is the resume page</div>
        }
        <footer>This is the footer</footer>
      </main>
    </div>
  );
}

export default App;
