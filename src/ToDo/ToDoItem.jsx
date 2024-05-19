import { format } from "date-fns/format";

function ToDoItem({ toDo, onDelete }) {
  return (
    <div
      style={{
        border: "3px solid #eee",
        backgroundColor: "#fff",
        padding: "0.5rem",
        width: "250px",
        alignItems: "flex-start",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <div>
        <b>{toDo.description}</b>
      </div>
      <div>Added on {format(toDo.createdAt, "d MMM, HH:mm")}</div>
      <button onClick={() => onDelete(toDo.id)}>Delete</button>
    </div>
  );
}

export default ToDoItem;
