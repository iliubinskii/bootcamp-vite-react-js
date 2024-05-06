import { useState } from 'react'

function Welcome() {
  const [name, setName] = useState("stranger")

  const onSubmit = (event) => {
    event.preventDefault()
    const form = event.target;
    const formData = new FormData(form);
    const name = formData.get('name');
    setName(name);
    form.reset();
  }

  return (
    <>
      <h1>Welcome, {name}</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Enter your name:</label>
        <input type="text" name="name" />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default Welcome
