require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;

try{
  mongoose.connect(MONGO_URL);
  console.log("Connected to Database")
}catch(err){
  console.log(err);
}

const app = express();

app.use(cors());
app.use(bodyParser.json());

const { Holding } = require("./model/HoldingsModel");
const { Position } = require("./model/PositionsModel");
const { Order } = require("./model/OrdersModel");


app.get("/allHoldings", async (req, res) => {
  let allHoldings = await Holding.find();
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await Position.find();
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new Order({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved!");
});

app.get("/allOrders", async(req, res) => {
  let allOrders = await Order.find();
  res.json(allOrders);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
