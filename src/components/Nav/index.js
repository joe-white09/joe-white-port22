import { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers"

function Nav(props) {
    const 
    {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    return(
        <header className="flex-row header-img">
            <h2 className="section name">
                    Joe White
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
                  console.log(currentCategory);
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