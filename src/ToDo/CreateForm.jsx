import { v4 as uuidv4 } from "uuid";

function CreateForm({ onCreate }) {
  const onSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const formData = new FormData(form);

    const description = formData.get("description");

    if (description) {
      onCreate({
        id: uuidv4(),
        description,
        createdAt: new Date().toISOString(),
      });
      form.reset();
    } else alert("Please enter a description");
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        style={{
          border: "3px solid #aac",
          backgroundColor: "#cce",
          width: "250px",
          padding: "0.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <label htmlFor="description">Add task:</label>
        <input type="text" name="description" />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default CreateForm;
