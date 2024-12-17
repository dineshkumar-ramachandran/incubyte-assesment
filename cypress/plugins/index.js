const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = (on, config) => {
  on("file:preprocessor", cucumber());
};

const fs = require("fs");

// Patch fs.realpath.native for environments where it doesn't exist
if (!fs.realpath.native) {
  fs.realpath.native = fs.realpath;
}

module.exports = (on, config) => {
  // Your plugin logic here
};
