"use node";
import { action } from "./_generated/server";
import { v } from "convex/values";
import nodemailer from "nodemailer";

export const sendOrderEmail = action({
  args: {
    email: v.string(),
    name: v.string(),
    orderId: v.id("orders"),
    grandTotal: v.float64(),
  },
  handler: async (_, { email, name, orderId, grandTotal }) => {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true", // true if using port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      }, 
    });

    const mailOptions = {
      from: `"Your Store" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Order Confirmation",
      html: `
        <h1>Thank you for your order, ${name}!</h1>
        <p>Your order ID is <strong>${orderId}</strong>.</p>
        <p>Total charged: <strong>$${grandTotal.toFixed(2)}</strong></p>
        <p>We will send another email when your order ships.</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  },
});