import pets from "../models/pets";

const React = require("react");

export default function Show() {
  return (
    <div>
      <h1>This is {pets.name}</h1>
      <h6>They are a {pets.typeOfAnimal} and are a {pets.breed}</h6>
    </div>
  );
}
