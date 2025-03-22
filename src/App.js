import React, { useState } from "react";

export default function ShopeeFinds() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (name && image && link) {
      const newItem = { name, image, link };
      const updatedItems = [...items, newItem].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setItems(updatedItems);
      setName("");
      setImage("");
      setLink("");
    }
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}
      >
        My Shopee Finds
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginBottom: "16px",
        }}
      >
        <input
          type="text"
          placeholder="Enter product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <input
          type="text"
          placeholder="Paste image URL here"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          style={{
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <input
          type="text"
          placeholder="Shopee link (Only for you)"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          style={{
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <button
          onClick={addItem}
          style={{
            padding: "8px 12px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Add Product
        </button>
      </div>
      <div>
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              marginBottom: "8px",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "50px",
                height: "50px",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />
            <span style={{ fontWeight: "bold" }}>{item.name}</span>
            <button
              onClick={() => deleteItem(index)}
              style={{
                marginLeft: "auto",
                backgroundColor: "red",
                color: "white",
                border: "none",
                padding: "5px 8px",
                borderRadius: "4px",
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
