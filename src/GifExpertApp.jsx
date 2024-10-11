import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
import twitterIcon from './images/icons8-twitter.svg';
import instagramIcon from './images/icons8-instagram.svg';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([""]);

  

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
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
          follow me in my social media putos
          <br />
          <a href="https://twitter.com/Luisur27" target={"_blank"}>
            <img
              className="twitter"
              src={twitterIcon}
              alt="Twitter"
              width="30"
              height="30"
            />
          </a>
          <a href="https://www.instagram.com/luisur66/" target={"_blank"}>
            <img
              className="insta"
              src={instagramIcon}
              alt="Instagram"
              width="30"
              height="30"
            />
          </a>
        </p>

        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </div>
    </>
  );
};
