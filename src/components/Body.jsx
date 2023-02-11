import React from "react";
import Content from "./Content";
import List from "./List";

const Body = ({ notesAll, notesArchive, setNotes }) => (
  <div className="note-app__body">
    <Content setNotes={setNotes} />
    <List label="All Notes" setNotes={setNotes} notes={notesAll} />
    <List label="Archive Notes" setNotes={setNotes} notes={notesArchive} />
  </div>
);

export default Body;
