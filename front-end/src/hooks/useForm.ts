import { useState, ChangeEvent } from "react";

type inputSelectOptions = {
    value: number | undefined;
    name: string;
}

export const useForm = <T>( initialForm: T ) => {

    //* Attributes
    const [formState, setFormState] = useState( initialForm );

    //* Methods
    const onInputChange = ( { target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ): void => {
        const { value, name } = target;
        setFormState({ ...formState, [name]: value });
    }

    const onInputSelect = ( options: inputSelectOptions ): void => {
        const { name, value } = options;
        setFormState({ ...formState, [name]: value });
    }

    return {
        //* Attributes
        formState,

        //* Methods
        onInputChange,
        onInputSelect
    }

}
