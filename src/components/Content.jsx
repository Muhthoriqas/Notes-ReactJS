import React, { useState } from "react";
import Input from "./Input";
import { handleClick } from "./Alert";

const Content = ({ setNotes }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title || !body) {
      handleClick({
        title: "Error",
        text: "Title and Notes Content  are required!",
        icon: "error",
      });
      return;
    }

    const id = new Date().toISOString();
    const note = { id, title, body, archived: false, createdAt: id };

    setNotes((prevNotes) => [...prevNotes, note]);
    setTitle("");
    setBody("");
  };

  return (
    <div className="note-input">
      <h2>New Notes</h2>
      <form onSubmit={handleSubmit}>
        <p className="note-input__title__char-limit">
          Characters left: {50 - title.length}
        </p>
        <Input
          value={title}
          onChange={setTitle}
          name="title"
          type="text"
          placeholder="Input Title..."
        />
        <Input
          value={body}
          onChange={setBody}
          name="body"
          type="textarea"
          placeholder="Write your notes here..."
        />
        <button
          type="submit"
          className="create-btn"
          onClick={() =>
            handleClick({
              title: "Success Create Note",
              text: `Note with title "${title}" has been created`,
              icon: "success",
            })
          }
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default Content;
