const express = require('express');
const router = express.Router();
const axios = require('axios');
const cors = require('cors')
const app=express();
app.use(cors())
const Order = require('../Model/OrderSchema');
const Buyer = require('../Model/BuyerSchema');
const Product = require('../Model/ProductsSchema')

router.get('/top_product/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const orders = await Order
          .find({ sellerId: id })
          .populate('product.productId')
          .exec();

      if (!orders || orders.length === 0) {
          console.log("No results found.");
          return res.status(404).json({ message: "No results found." });
      }

      const productCountMap = {};

      for (const order of orders) {
          for (const productItem of order.product) {
              const productId = productItem.productId._id;
              const productName = productItem.productId.productName;
              const productType = productItem.productId.productType;

              if (!productCountMap[productId]) {
                  productCountMap[productId] = {
                      name: productName,
                      type: productType,
                      count: 1
                  };
              } else {
                  productCountMap[productId].count += 1;
              }
          }
      }

      // Convert the productCountMap object to an array
      const topProducts = Object.values(productCountMap);

      // Sort the array by the count in descending order
      topProducts.sort((a, b) => b.count - a.count);

      res.json(topProducts);
  } catch (error) {
      console.error(`Error while fetching products: ${error}`);
      res.status(500).json({ message: "Internal Server Error" });
  }
});


router.get('/top_product_list/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const orders = await Order
          .find({ sellerId: id })
          .populate('product.productId')
          .exec();

      if (!orders || orders.length === 0) {
          console.log("No results found.");
          return res.status(404).json({ message: "No results found." });
      }

      const productCountMap = {};

      for (const order of orders) {
          for (const productItem of order.product) {
              const productId = productItem.productId._id;
              const productName = productItem.productId.productName;
              const productType = productItem.productId.productType;
              const product = await Product.findById(productId);
              console.log(product)
              if (!productCountMap[productId]) {
                  productCountMap[productId] = {
                      name: productName,
                      pic: product.Product_img1,
                      quantity: product.storedQuantity,
                      category: product.category,
                      price:product.price,
                      type: productType,
                      count: 1
                  };
              } else {
                  productCountMap[productId].count += 1;
              }
          }
      }

      // Convert the productCountMap object to an array
      const topProducts = Object.values(productCountMap);

      // Sort the array by the count in descending order
      topProducts.sort((a, b) => b.count - a.count);
      const top3=topProducts.slice(0,3);

      res.json(top3);
  } catch (error) {
      console.error(`Error while fetching products: ${error}`);
      res.status(500).json({ message: "Internal Server Error" });
  }
});


 
  router.get('/stat/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const orders = await Order
        .find({ sellerId: id })
        .populate('product.productId')
        .exec();
  
      if (!orders || orders.length === 0) {
        console.log("No results found.");
        return res.status(404).json({ message: "No results found." });
      }
  
      const totalCustomers = new Set(orders.map(order => order.buyerId)).size;
  
      const totalPriceByDate = new Map();
      const totalPriceByMonth = new Map();
      const totalPriceByYear = new Map();
  
      for (const order of orders) {
        const orderDate = new Date(order.date);
        const orderDay = new Date(order.date).toLocaleDateString();
        const yearMonth = orderDate.getFullYear() + '-' + (orderDate.getMonth() + 1);
        const year = orderDate.getFullYear();
  
        // Total Price by Date
        if (!totalPriceByDate.has(orderDay)) {
          totalPriceByDate.set(orderDay, 0);
        }
        totalPriceByDate.set(orderDay, totalPriceByDate.get(orderDay) + order.totalPrice);
  
        // Total Price by Month
        if (!totalPriceByMonth.has(yearMonth)) {
          totalPriceByMonth.set(yearMonth, 0);
        }
        totalPriceByMonth.set(yearMonth, totalPriceByMonth.get(yearMonth) + order.totalPrice);
  
        // Total Price by Year
        if (!totalPriceByYear.has(year)) {
          totalPriceByYear.set(year, 0);
        }
        totalPriceByYear.set(year, totalPriceByYear.get(year) + order.totalPrice);
      }
  
      const totalPriceByDateObject = Object.fromEntries(totalPriceByDate);
      const totalPriceByMonthObject = Object.fromEntries(totalPriceByMonth);
      const totalPriceByYearObject = Object.fromEntries(totalPriceByYear);
  
      const today = new Date().toLocaleDateString();
      const Yesterday = new Date(new Date().setDate(new Date().getDate() - 1)).toLocaleDateString();
  
      const Today_Sell = totalPriceByDateObject[today] || 0;
      const Yesterday_Sell = totalPriceByDateObject[Yesterday] || 0;
  
      const currentYearMonth = new Date().toISOString().slice(0, 7);
      const lastMonth = new Date(new Date().setMonth(new Date().getMonth() - 1)).toISOString().slice(0, 7);
  
      const monthlySell = totalPriceByMonthObject[currentYearMonth] || 0;
      const lastMonthSell = totalPriceByMonthObject[lastMonth] || 0;
  
      const currentYear = new Date().getFullYear();
      const lastYear = currentYear - 1;
  
      const yearlySell = totalPriceByYearObject[currentYear] || 0;
      const lastYearSell = totalPriceByYearObject[lastYear] || 0;
      const lastcus = 3;
      let lastDayCustomerPercentage = calculatePercentageChange(totalCustomers, lastcus, Today_Sell);
      let lastDayIncomePercentage = calculatePercentageChange(Yesterday_Sell, Yesterday_Sell, Today_Sell);
      let lastMonthIncomePercentage = calculatePercentageChange(lastMonthSell, lastMonthSell, monthlySell);
      let lastYearIncomePercentage = calculatePercentageChange(lastYearSell, lastYearSell, yearlySell);
      lastDayCustomerPercentage = lastDayCustomerPercentage? lastDayCustomerPercentage.toPrecision(4) : 0;
      lastDayIncomePercentage = lastDayIncomePercentage? lastDayIncomePercentage.toPrecision(4) : 0;
      lastMonthIncomePercentage = lastMonthIncomePercentage? lastMonthIncomePercentage.toPrecision(4) : 0;
      lastYearIncomePercentage = lastYearIncomePercentage? lastYearIncomePercentage.toPrecision(4) : 0;
      const result = {
        totalCustomers,
        dailyIncome: Today_Sell,
        monthlyIncome: monthlySell,
        yearlyIncome: yearlySell,
        DayPercentage:lastDayCustomerPercentage,
        DayIncomePercentage:lastDayIncomePercentage,
        LastMonthIncomePercentage:lastMonthIncomePercentage,
        LastYearIncomePErcentage:lastYearIncomePercentage,
        totalPriceByDate: totalPriceByDateObject,
        totalPriceByMonth: totalPriceByMonthObject,
        totalPriceByYear: totalPriceByYearObject,
        orders
      };
  
      res.json(result);
  
    } catch (error) {
      console.error(`Error while fetching products: ${error}`);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
  
  // Function to calculate percentage change
  function calculatePercentageChange(previousValue, oldValue, newValue) {
    const change = newValue - oldValue;
    return (change / Math.abs(previousValue)) * 100;
  }


module.exports = router