const CustomAPIError =require("./custom-error");
const {StatusCode} = require("http-status-codes");

class BadRequests extends CustomAPIError {
    constructor(message) {
      super(message);
      this.statusCode = StatusCode.BAD_REQUEST;
    }
  }
  
  module.exports = BadRequests
  