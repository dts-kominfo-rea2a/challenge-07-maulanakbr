const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    const content1 = await promiseTheaterIXX();
    const content2 = await promiseTheaterVGC();
    const result = content1.concat(content2);
    return result.map((allTheater) => allTheater.hasil === emosi).reduce((a, b) => a + b, 0); 
  }
  catch (err) {
    console.log(err);
  };
};

module.exports = {
  promiseOutput,
};
