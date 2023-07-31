import React from "react";
import Child1 from "./Child1";

export default function Parent() {
  const orange = (e) => {
    console.log("parent", e);
  };
  return (
    <div>
      <Child1 sea={orange} />
    </div>
  );
}
