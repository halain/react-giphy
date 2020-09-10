import { shallow } from 'enzyme';

import '@testing-library/jest-dom';
import React from 'react';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs'); //mock data , finje llamada a useFetchGifs


describe('pruebas en <GifGrid />', () => {

    const category = 'Hard';

    test('debe renderizarce correctamente el componente ', () => {

        useFetchGifs.mockReturnValue({
            data:[],
            loading: true
        });

        const wrapper = shallow(<GifGrid category = {category}  />);

        expect( wrapper ).toMatchSnapshot();

    });


    test('debe mostrar los items cuando se carguen las imagenes con useFetchGifs', () => {

        const imgs = [{
            id: 'ABC',
            url: 'http://loquesea.asca.co',
            title: 'Titulo prueba'
        },
        {
            id: '123',
            url: 'http://loquesea.123.co',
            title: 'Titulo prueba otro'
        }]

        useFetchGifs.mockReturnValue({
            data: imgs,
            loading: false
        });
       
        const wrapper = shallow(<GifGrid category = {category}  />);

        expect(wrapper).toMatchSnapshot(); 

        expect( wrapper.find('p').exists() ).toBe( false ); //el p del loading no debe exitir xk ya hay data

        expect( wrapper.find('GifGridItem').length).toBe(imgs.length);

    });
    
    
    
})
