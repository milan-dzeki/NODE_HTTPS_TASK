const https = require("https");

const url = "https://reqres.in/api/users?page=2";

const request = https.request(url, response => {
  let data = "";
  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    if(body && body.data) {
      let names = body.data.map(el => el.first_name).join(", ");
      console.log(names)
    } else  {
      console.log("No names found");
    }
  });
});

request.on('error', (error) => {
  console.log('An error occured', error);
});

request.end();