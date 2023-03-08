import { GifGrid } from "../src/components/GifGrid";
import { render , screen } from '@testing-library/react';
import { useFetchGifs } from "../src/hooks/useFetchGifs";

jest.mock("../src/hooks/useFetchGifs");

describe("Pruenas en GifGrid", () => {

    const category = 'Eren';

    test('debe mostrar el loading', () => {

        const gifs = [
          {
            id: "ABC",
            title: "Luffy",
            url: "https://localhost/luffy.jpg",
          },
          {
            id: "123",
            title: "Goku",
            url: "https://localhost/goku.jpg",
          },
        ];

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: false
        });
        
        render ( <GifGrid category={ category }/> );
        
        expect( screen.getByText( 'Cargando...' ) );
        expect( screen.getByText( category ) );

        expect( screen.getAllByRole('img').length ).toBe(2);


    });


    test('debe mostrar items cuando se cargan las imagenes useFetchGifs', () => {



    });

});