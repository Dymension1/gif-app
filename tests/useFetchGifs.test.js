import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../src/hooks/useFetchGifs";


describe('pruebas en el hook useFetchGifs', () => { 

    test('debe regresar el estado inicial', () => { 

        const { result } = renderHook(() => useFetchGifs('luffy'));
        const { images, isLoading } = result.current;
        //const { images, isLoading } = useFetchGifs();


        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
     });

     test('debe retornar un arreglo de imagenes e isLoading en false', async() => { 

        const { result } = renderHook(() => useFetchGifs('luffy'));

        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current; 

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeFalsy();
     });

 });