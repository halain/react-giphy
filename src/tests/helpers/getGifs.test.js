import { getGifs } from '../../helpers/getGifs';

describe('pruebas en el helper getGif', () => {
      
    
    test('el fetch debe tarer 10 elementos ', async () => {
       
        const gifs = await getGifs('One');

        expect( gifs.length ).toBe( 10 );

    });

    test('debe enviarse la category ', async () => {
       
        const gifs = await getGifs(''); //gifs = []

        expect( gifs.length ).toBe( 0 );

    });
    

});
