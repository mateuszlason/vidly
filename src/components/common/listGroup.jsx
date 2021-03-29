import React from "react";

const ListGroup = ({ genres, onSort, textProp, valueProp, sortedGenre }) => {
  return (
    <ul className="list-group">
      {genres.map((genre) => (
        <li
          key={genre[valueProp]}
          onClick={() => onSort(genre)}
          className={
            genre === sortedGenre ? "list-group-item active" : "list-group-item"
          }
        >
          {genre[textProp]}
        </li>
      ))}
    </ul>
  );
};
ListGroup.defaultProps = {
  textProp: "name",
  valueProp: "_id",
};
export default ListGroup;
