const Input = ({ type, name, value, onChange, placeholder }) => {
  const handleChange = (event) => {
    if (name === "title") {
      const text = event.target.value;
      onChange(text.length <= 50 ? text : value);
    } else {
      onChange(event.target.value);
    }
  };

  const inputProps = {
    name,
    value,
    onChange: handleChange,
    spellCheck: false,
    placeholder,
  };

  return type === "textarea" ? (
    <textarea {...inputProps} className="note-input__body" rows={5} />
  ) : (
    <input {...inputProps} className="note-input__title" />
  );
};

export default Input;
