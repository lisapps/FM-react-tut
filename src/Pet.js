import React from "react";

export default function Pet({ name, animal, breed }) {
  //   return React.createElement("div", {}, [
  //     React.createElement("h1", {}, name),
  //     React.createElement("h1", {}, animal),
  //     React.createElement("h1", {}, breed),
  //   ]);

  // the code below gets transpiled to the above by babel behind the scenes.

  // you need a parent element bc JS can only return one thing.
  return (
    <>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </>
  );
}
