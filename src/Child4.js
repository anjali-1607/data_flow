import React, { useState } from "react";

export default function Child4({}) {
  const [data, setData] = useState("");
  const myname = (e) => {
    setData(e.target.value);
    console.log(e.target.value);
  };
  console.log(data);

  return (
    <>
      <div
        style={{
          width: "20em",
          height: "20em",
          margin: "12em 12em 12em 40em",
        }}>
        <label>
          <h3>Your name</h3>
        </label>{" "}
        <br></br>
        <input placeholder=" your name" onChange={myname} value={data} />
      </div>
    </>
  );
}
