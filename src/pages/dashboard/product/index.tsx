import React from "react";
import { useState } from "react";
const Todos = () => {
  const [brand, setBrand] = useState("Dell");
  const [name, setName] = useState("Dell");
  const [title, setTitle] = useState("naidueam");
  const [description, setDescription] = useState("hirakor");
  const [price, setPrice] = useState("1000");
  const [img, setImg] = useState(
    "data:image/jpeg;base64,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"
  );
  const addTodo = () => {
    fetch(
      "https://crudcrud.com/api/408567b2778d45128f07d2ebe8825c12/products/",
      {
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
      }
    ).catch((e) => console.log(e));
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
