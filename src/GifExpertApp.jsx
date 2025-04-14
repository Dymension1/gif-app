import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([""]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  const clearCategories = () => {
    setCategories([]);
  };

  return (
    <div className="page-wrapper">
      <div className="main">
        <h1>
          <a href={""}>GIPHY SEARCH</a>
        </h1>

        <div className="buttons">
          <AddCategory onNewCategory={(value) => onAddCategory(value)} />
          <button
            onClick={clearCategories}
            className="clear-button"
            disabled={categories.length === 0}
          >
            clear
          </button>
        </div>

        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p>
            © 2025 Giphy Search. Todos los derechos reservados.{" "}
            <a href="/terminos" target="_blank">
              Términos y Condiciones
            </a>
          </p>
          <p className="author">
            by <strong className="author-name">Luis</strong>
          </p>
        </div>
      </footer>

    </div>
  );
};
