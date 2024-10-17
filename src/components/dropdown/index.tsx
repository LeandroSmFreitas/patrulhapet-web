import React, { useState } from 'react';
import * as S from './styles';
import { Dropdown } from 'primereact/dropdown';

interface DropdownProps {
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    options: string[];
    error?: string;
}

const DropdownStyled = ({ value, onChange, error, options, placeholder }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value || undefined);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onChange(option); // Passa o valor selecionado para o formulário
    setIsOpen(false); // Fecha o dropdown após a seleção
  };

  return (
    <>
        <Dropdown invalid={!!error} style={{marginBottom: "10px"}} value={selectedOption} onChange={(e) => handleOptionClick(e.value)} options={options} optionLabel="name" 
        placeholder={placeholder} className="w-full md:w-14rem" />
        {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};

export default DropdownStyled;