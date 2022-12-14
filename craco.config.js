const path = require("path")

const resolve = dir => path.resolve(__dirname,dir);
module.exports = {
  webpack: {
    alias: {
      "@" : resolve("src"),
      "components": resolve("src/components"),
      "pages": resolve("src/pages"),
      "common": resolve ("src/common"),
      "store": resolve ("src/store"),
      "services": resolve ("src/services")
    }
  }
}