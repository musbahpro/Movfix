import React from 'react';
import Select from './Select';

const LanguageSelect = ({ language, setLanguage }) => {
  const options = [
    { label: 'English', value: 'en' },
    { label: 'Turkçe', value: 'tr' },
    { label: 'Arabic', value: 'ar' },
  ];

  return (
    <Select
      label={language}
      options={options || []} 
      value={language}
      onChange={setLanguage}
    />
  );
};

export default LanguageSelect;
