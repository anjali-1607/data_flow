import React from "react";
import Child2 from "./Child2";

export default function Child1({ sea }) {
  const water = (e) => {
    sea(e);
    console.log(e);
  };
  return (
    <div>
      <Child2 grapes={water} />
    </div>
  );
}
