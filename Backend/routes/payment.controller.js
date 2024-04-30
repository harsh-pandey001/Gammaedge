import Razorpay from "razorpay";

export default {
  async orderCreate(req, res, next) {
    // order_id: "xxxxxxxxxx", amount:300, currency: "INR", Payment_Capture: 1

    try {
      const instance = new Razorpay({
        key_id: "",
        key_secret: "",
      });
      const { order_id, amount, payment_capture, currency } = req.body;
      const options = {
        amount: amount * 100,
        currency: currency,
        receipt: order_id,
        payment_capture: payment_capture,
      };
      const order = await instance.orders.create(options);
      if (!order) return res.status(500).send("something ocuured");

      res.status(200).json({ success: true, data: order });
    } catch (err) {
      console.log(err);
    }
  },
};
