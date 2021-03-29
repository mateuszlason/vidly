import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className="form-group">
      <input
        placeholder="Search..."
        type="text"
        name="query"
        value={value}
        className="form-control"
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </div>
  );
};

export default SearchBox;
