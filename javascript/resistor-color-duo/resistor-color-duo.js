//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const COLOR = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

export const decodedValue = (inputs) => {
  //let inputs = input[0].toLowerCase();
  return parseInt(
    `${COLOR.indexOf(inputs[0]) + "" + COLOR.indexOf(inputs[1])}`
  );
};
