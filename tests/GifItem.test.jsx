import { GifItem } from "../src/components/GifItem";
import { render, screen } from "@testing-library/react";


describe("GifItem test", () => {
  
  const title = "Title";
  const url = "https://www.google.com/";

  test("Pruebas en GifItem ", () => {

    const { container } = render(<GifItem title={title} url={url} />);

    expect(container).toMatchSnapshot();

  });


  test("debe de mostrar la imagen con URL y ALT indicado", () => {

    render(<GifItem title={title} url={url} />);

    // expect( screen. getByRole('img').src ).toBe( title );
    // expect( screen. getByRole('img').alt ).toBe( URL );

    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(alt);

  });


  test('Debe mostrar title en el componente', () => { 

    render(<GifItem title={title} url={url} />);

    expect( screen.getByText(title) ).toBeTruthy();
  });


});
