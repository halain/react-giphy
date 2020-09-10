import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach( ()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);

    })

    test('debe renderizar correctamete el componente', () => {

        expect( wrapper ).toMatchSnapshot();
        
    });  
    
    
    test('debe de cambiar la caja de texto ', () => {
       
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', { target: { value } });
         
        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(value);

    });


    test('No debe postear la inofrmacion con submit ', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} } );

        expect( setCategories ).not.toHaveBeenCalled();

    });


    test('debe llamar el setCategorie y limpar la caja de texto ', () => {

        const input = wrapper.find('input');
        const value = 'Hola mundo';
        
        //simular input change
        input.simulate('change', { target: { value } });

        //simular submit
        wrapper.find('form').simulate('submit', { preventDefault(){} } );

        //setCategories debe ser llamado
        expect( setCategories ).toHaveBeenCalled(); //ha sido llamada
        expect( setCategories ).toHaveBeenCalledTimes(1); //llamada na sola ves
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) ); //llamado con una funcion como parametro

        //el valor del input esta en ''
        expect(input.prop('value')).toBe('');
        
    });
    
    
    
    
})
