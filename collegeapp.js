let jsonres=
  '{"fact":"The name \"jaguar\" comes from a Native American word meaning \"he who kills with one leap\".","length":89}'
let validres=JSON.parse(jsonres);
console.log(validres.fact)