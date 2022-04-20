const fs = require('fs');

(async  () => {
  const bytes = fs.readFileSync( `${__dirname}/AddInt.wasm`);

  const value1 = parseInt(process.argv[2]);
  const value2 = parseInt(process.argv[3]);

  const obj = await WebAssembly.instantiate(new Uint8Array(bytes));
  const addValue = obj.instance.exports.AddInt(value1, value2);

  console.log(`${value1} + ${value2} = ${addValue}`);
})()
