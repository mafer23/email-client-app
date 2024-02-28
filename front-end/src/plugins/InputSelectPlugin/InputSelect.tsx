//* Importing react select
import Select from "react-select";

type typeOnSelectValues = {
  value: number | undefined, 
  name: string
};

interface InputSelectOptions {
  dataOptions: { value: number, label: string }[];
  onSelect: ( {value, name}: typeOnSelectValues ) => void;
}

export const InputSelect = ( { dataOptions: emailsOptions, onSelect }: InputSelectOptions ) => {
  return (
    <Select
      options={ emailsOptions }
      placeholder='Recipient'
      onChange={ ( selectOption ) => 
        onSelect({ value: selectOption?.value, name: 'recipient' }) 
      }
      styles={{
          control: (styles) => {
            return {
                ...styles,
                backgroundColor: 'transparent',
                border: '1px solid #494949',
                fontFamily: 'Poppins',
                color: 'white'
            };
          },
          placeholder: (styles) => {
            return {
                ...styles,
                color: '#767676',
                fontFamily: 'Poppins',
                fontSize: '0.85em'
            }
          },
          singleValue: (styles) => {
            return {
                ...styles,
                color: 'white',
                fontSize: '0.85em'
            }
          },
          option: (styles) => {
            return {
                ...styles,
                color: 'black',
                fontSize: '0.85em',
                fontFamily: 'Poppins'
            }
          },
      }}
    />
  );
}
