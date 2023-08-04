import React from "react";
import { useState } from "react";
const Todos = () => {
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const addTodo = () => {
    fetch("http://localhost:3000/api/", {
      method: "POST",
      body: JSON.stringify({
        brand,
        name,
        title,
        description,
        price,
        img,

      }),
      headers: {
        "content-type": "application/json",
      },
    }).catch((e) => console.log(e));
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo();
        }}
      >
        <input
          name="brand"
          placeholder="Add new brand..."
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        ></input>
        <br />

        <input
          name="brand"
          placeholder="Add new name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br />

        <input
          name="brand"
          placeholder="Add new title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <br />

        <input
          name="brand"
          placeholder="Add new description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <br />
        <input
          name="brand"
          placeholder="Add new price..."
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <br />
        <input
          name="brand"
          placeholder="Add new img..."
          value={img}
          onChange={(e) => setImg(e.target.value)}
        ></input>
        <br />

        <button type="submit">Add todo</button>
      </form>
    </div>
  );
};

export default Todos;