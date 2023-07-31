import React from "react";
import Child4 from "./Child4";

export default function Child3({ banana }) {
  const mango = (data) => {
    banana(data);
    console.log(data);
  };
  return (
    <div>
      <Child4 apple={mango} />
    </div>
  );
}
