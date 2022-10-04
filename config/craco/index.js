const path = require(`path`);
const root = path.resolve(process.cwd(), 'src');

console.log('Set webpack alias "~": ', root);

module.exports = {
  webpack: {
    alias: {
      '~': root,
    }
  },
};
