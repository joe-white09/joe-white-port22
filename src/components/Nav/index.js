import { useEffect } from "react";

function Nav(props) {
    const 
    {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;

    useEffect(() => {
        document.title = currentCategory.name;
    }, [currentCategory]);

    return(
        <header className="flex-row">
            <h2>
                <a href="/">
                    Joe White
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                {categories.map((category) => (
            <li
              className={`mx-2 ${
                currentCategory.name === category.name && 'navActive' 
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                {(category.name)}
              </span>
            </li>
          ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;