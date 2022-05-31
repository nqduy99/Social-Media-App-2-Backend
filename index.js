import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
const port = 8080;

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.get('/', (req, res, next) => {
    res.send('Duy loves Tzuyu')
})

mongoose
  .connect(
    "mongodb+srv://nqduy99:bookingappletgo!@cluster0.dqdrs.mongodb.net/SocialMedia?retryWrites=true&w=majority", 
    {useNewUrlParser: true, useUnifiedTopology: true}
  )
  .then(() =>
    app.listen(port, () => console.log(`Server is running at port ${port}`))
  );
