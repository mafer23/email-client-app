import { act, renderHook } from "@testing-library/react";
import { useForm } from '../../src/hooks/useForm';

describe('Test to [useForm.ts]', () => {  

    test('Should return formState initial', () => { 
        
        const initialForm = { email: '', password: '' };

        const { result } = renderHook(() => useForm( initialForm ));
        const { formState } = result.current;
        expect( formState ).toEqual( initialForm );

    });

    test('Should change attribute of initialForm with onInputChange', () => {  

        const initialForm = { 
            sender: 0, 
            recipient: 0,
            subject: '',
            body: '' 
        };

        const { result } = renderHook(() => useForm( initialForm ));
        const { onInputChange } = result.current;

        act(() => {

            const targetMock = { target: { name: 'subject', value: 'Instalar Python mañana' } } as React.ChangeEvent<HTMLInputElement>;
            onInputChange(targetMock);

        });

        expect( result.current.formState ).toEqual( {...initialForm, subject: 'Instalar Python mañana'} );

    });

    test('Should change attribute of initialForm with onInputSelect', () => {  

        const initialForm = { 
            sender: 0, 
            recipient: 0,
            subject: '',
            body: '' 
        };

        const { result } = renderHook(() => useForm( initialForm ));
        const { onInputSelect } = result.current;

        act(() => {

            onInputSelect( { name: 'sender', value: 1 } );

        });

        expect( result.current.formState ).toEqual( {...initialForm, sender: 1} );

    });

});