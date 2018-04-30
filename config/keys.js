if(process.env.NODE_DEV === "production"){
  console.log("Production is selected");
  module.exports = require("./prod");
} else{
  console.log("Development Selected");
  module.exports = require("./dev");
}
