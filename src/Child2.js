import React from "react";
import Child3 from "./Child3";

export default function Child2() {
  const litchi = (e) => {
    console.log(e);
  };
  return (
    <div>
      <Child3 banana={litchi} />
    </div>
  );
}
