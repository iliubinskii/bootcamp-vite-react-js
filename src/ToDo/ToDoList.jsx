import ToDoItem from "./ToDoItem";

function ToDoList({ toDos, onDelete }) {
  return (
    <>
      {toDos.map((toDo) => (
        <ToDoItem key={toDo.id} toDo={toDo} onDelete={onDelete} />
      ))}
    </>
  );
}

export default ToDoList;
