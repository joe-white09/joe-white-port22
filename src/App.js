import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import { useState } from 'react';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

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
          <ContactForm></ContactForm>
        }
        { currentCategory.name === 'resume' && 
          <Resume></Resume>
        }
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
