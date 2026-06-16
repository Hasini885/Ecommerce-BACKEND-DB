const express = require("express");

const {
    createOrder,
    getAllOrders,
    getOrderById,
    deleteOrder
} = require("../controllers/orderController");

const router = express.Router();

router.post("/", createOrder);
router.get("/", getAllOrders);
router.get("/:id", getOrderById);
router.delete("/:id", deleteOrder);

module.exports = router;