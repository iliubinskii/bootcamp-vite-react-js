import React from "react";
import CreateForm from "./CreateForm";
import ToDoList from "./ToDoList";

function ToDo() {
  const [toDos, setToDos] = React.useState([]);

  const addToDo = (toDo) => {
    setToDos((prevToDos) => [...prevToDos, toDo]);
  };

  const deleteToDo = (id) => {
    setToDos((prevToDos) => prevToDos.filter((toDo) => toDo.id !== id));
  };

  return (
    <>
      <h1>ToDo</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <CreateForm onCreate={addToDo} />
        <ToDoList toDos={toDos} onDelete={deleteToDo} />
      </div>
    </>
  );
}

export default ToDo;
