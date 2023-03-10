import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([""]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    //categories.push(newCategory);
    setCategories([newCategory, ...categories]);
    //setCategories( cat => [ ...cat, 'lol' ] )
  };

  return (
    <>
      <div className="main">
        <h1>
          <a href={""}>GIPHY SEARCH</a>
        </h1>

        <AddCategory onNewCategory={(value) => onAddCategory(value)} />

        <p>
          by <strong>Luis</strong>
          <br />
          follow me in my social media <br />
          <a href="https://twitter.com/Luisur27" target={"_blank"}>
            <img className="twitter" src="https://abs.twimg.com/responsive-web/client-web/icon-svg.168b89da.svg"></img>
          </a>
          <a href="https://www.instagram.com/luisur66/" target={"_blank"}>
            <img className="insta" src="https://static.cdninstagram.com/rsrc.php/yS/r/f_5NUHW7AZC.ico"></img>
          </a>
        </p>

        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </div>
    </>
  );
};
