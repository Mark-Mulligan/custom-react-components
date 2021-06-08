import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const BoostrapSelectWithSearch = () => {
  return <Select name="select" options={options} isSearchable />;
};

export default BoostrapSelectWithSearch;
