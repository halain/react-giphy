import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('pruebas en GifGridItem', () => {

    const title = "Este es el titulo";
    const url = "http://localhost/algo.jpg";
    const wrapper = shallow(<GifGridItem title={title} url={url} />);



    test('debe renderizar correctamete el componente', () => {

        expect( wrapper ).toMatchSnapshot();
        
    });



    test('debe tener un parrafo con el title ', () => {
        
        const parrafo = wrapper.find('p');

        expect( parrafo.text().trim() ).toBe(title);

    });
    

    test('debe tener una imagen con su src y alt ', () => {
       
        const img = wrapper.find('img');
        //console.log(img.props());
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );

    });


    test('debe tener la clase animate__fadeIn ', () => {
        
        const div = wrapper.find('div');
        const clase = div.prop('className');
        //console.log(clase);
        expect(clase.includes('animate__fadeIn')).toBe( true );

    });
    
    
    
    
})
