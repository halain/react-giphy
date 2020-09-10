import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import {GifExpertApp} from '../GifExpertApp';


describe('pruebas en <GifExpertApp /> ', () => {
    

    test('debe mostarse correctamente ', () => {

        const wrapper = shallow(<GifExpertApp />);

        expect( wrapper ).toMatchSnapshot();
        
    });
    

    test('debe de mostrar una lista de categorias', () => {
       
        const categories = ['One Punch', 'Dragon Ball'];

        const wrapper = shallow(<GifExpertApp defautCategory= {categories}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);

    });
    



});


