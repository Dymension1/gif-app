import { getGifs } from "./getGifs";


describe('Pruebas en getGifs', () => { 

    test('debe retornar una array de gifs', async() => { 

        const gifs = await getGifs('one piece');
        //console.log(gifs);

        expect(gifs.length).toBeGreaterThan(0);

        expect( gifs[0] ).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });

     });

 });