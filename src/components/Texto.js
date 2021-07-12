import React from "react";

export default function Texto({ temp }) {
  console.log(`PRONBANBDJK ${temp}`);
  return <h1>{`La temperatura Actual es: ${temp}`}</h1>;
}
