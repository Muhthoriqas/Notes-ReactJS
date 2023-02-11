import React from "react";
import Items from "./Items";

const List = ({ notes, label, setNotes }) => {
  return (
    <>
      <h2>{label}</h2>
      <div className="notes-list">
        {notes.length === 0 ? (
          <p className="notes-list__empty-message">Nothing To Show</p>
        ) : (
          notes.map((note) => (
            <Items action={setNotes} key={note.id} {...note} />
          ))
        )}
      </div>
    </>
  );
};

export default List;
