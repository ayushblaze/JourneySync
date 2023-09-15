const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Kudos, your server is up. Let's build something great."
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Application running on port ${port}🤖✅`);
}); 