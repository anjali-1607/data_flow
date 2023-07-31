import React from "react";
import Child3 from "./Child3";

export default function Child2({ grapes }) {
  const litchi = (e) => {
    grapes(e);
    console.log(e);
  };
  return (
    <div>
      <Child3 banana={litchi} />
    </div>
  );
}
