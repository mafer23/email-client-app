import { useState, ChangeEvent } from "react";

export const useForm = <T>( initialForm: T ) => {

    //* Attributes
    const [formState, setFormState] = useState( initialForm );

    //* Methods
    const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
        const { value, name } = target;
        setFormState({ ...formState, [name]: value });
    }

    return {
        //* Attributes
        formState,

        //* Methods
        onInputChange
    }

}
