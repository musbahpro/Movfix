import React from 'react';
import { Select as TailwindSelect } from "@material-tailwind/react";

const Select = ({ label, options, onChange, value }) => (
  <div className="w-72 bg-slate-50">
    <TailwindSelect size="lg" label={label} value={label} onChange={onChange}>
      {options && options.map((option) => (
        <div
          key={option.label}
          className="cursor-pointer font-bold pb-3"
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </div>
      ))}
    </TailwindSelect>
  </div>
);

export default Select;
