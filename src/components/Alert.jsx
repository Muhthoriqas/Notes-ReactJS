import Swal from "sweetalert2";

const handleClick = ({ title, text, icon }) => {
  Swal.fire({
    title,
    text,
    icon,
    showConfirmButton: false,
    timer: 3000,
  });
};

const handleClickConfirm = (
  item,
  action,
  type,
  title,
  text,
  icon,
  confirmButtonText
) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: confirmButtonText,
  }).then((result) => {
    if (type === "delete") {
      if (result.isConfirmed) {
        action((notes) => notes.filter((note) => note.id !== item));
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    } else if (type === "archive" || type === "unarchive") {
      if (result.isConfirmed) {
        action((notes) =>
          notes.map((note) => {
            if (note.id === item) {
              return { ...note, archived: !note.archived };
            }
            return note;
          })
        );
        if (type === "archive") {
          Swal.fire("Archived!", "The note has been archived.", "success");
        } else {
          Swal.fire("Unrchived!", "The note has been unrchived.", "success");
        }
      }
    }
  });
};

export { handleClick, handleClickConfirm };
