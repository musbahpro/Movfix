import React from 'react';

const SearchInput = ({ value, onChange, onSearch }) => (
  <div className="w-72 bg-slate-50 flex bg-white rounded-full">
    <input
      type="text"
      className="w-full rounded-full text-blue-gray-900 px-4 py-3"
      placeholder="Search..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
    <button
      className="bg-yellow-500 text-blue-gray-900 m-1 font-black p-2 rounded-full ml-2"
      onClick={onSearch}
    >
      Search
    </button>
  </div>
);

export default SearchInput;
