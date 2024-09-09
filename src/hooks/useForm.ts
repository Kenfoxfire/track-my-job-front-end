import { useState, ChangeEvent } from 'react';

export const useForm = <T extends Object>(initialForm: T) => {
  
    const [formState, setFormState] = useState<T>(initialForm);

    const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    };
}
