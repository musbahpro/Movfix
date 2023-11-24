import React from "react";
import Select from "./Select";

export default function LanguageSelect({ type, setType }) {
  const options = [
    { label: "Action", value: 28 },
    { label: "Animation", value: 16 },
    { label: "Comedy", value: 35 },
    { label: "War", value: 10752 },
  ];

  return (
    <Select
      label={type}
      options={options || []}
      value={type}
      onChange={setType}
    />
  );
}
