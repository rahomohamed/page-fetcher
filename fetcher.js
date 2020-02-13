const request = require("request");
let fs = require('fs')
// const argv = process.argv.slice(2);
let url = process.argv[2];
let filePath = process.argv[3];


request(url, (error, response, body) => {
  // console.log("error:", error); // Print the error if one occurred
  // console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  // console.log("body:", body); // Print the HTML for the Google homepage.
fs.writeFile(filePath, body, function(err) {
  if (err) throw err;
  console.log("Saved!");
});
});