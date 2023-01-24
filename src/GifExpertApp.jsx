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
          <a href="https://twitter.com/Luisur27">
            <img className="twitter" src="/images/twitter-icon.svg"></img>
          </a>
          <a href="https://www.instagram.com/luisur66/">
            <img className="insta" src="/images/icons8-instagram.svg"></img>
          </a>
        </p>

        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </div>
    </>
  );
};
