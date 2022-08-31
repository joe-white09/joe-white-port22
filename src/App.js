import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import { useState } from 'react';

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
        <About />
      </main>
    </div>
  );
}

export default App;
