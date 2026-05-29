module.exports = function rawCodeLoader(source) {
  return `export default ${JSON.stringify(source)};`;
};
