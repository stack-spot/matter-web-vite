import React from 'react';
import { useTranslation } from 'react-i18next'

const SelectLang: React.FC = () => {
  const { i18n } = useTranslation()

  function onLangChange(e: React.ChangeEvent<HTMLSelectElement>) {
    i18n.changeLanguage(e.currentTarget.value);
    document.documentElement.lang = i18n.language
  }

  return (
    <select onChange={onLangChange} value={i18n.language}>
      {i18n.languages.map(value => (<option key={value} value={value}>{value}</option>))}
    </select>
  );
}

export default SelectLang;