// "use node";

// import nodemailer from "nodemailer";

// export const sendEmail = action(async (ctx, args) => {
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   await transporter.sendMail({
//     from: process.env.EMAIL_USER,
//     to: args.email,
//     subject: "Order Confirmation",
//     text: `Thanks for your order, ${args.name}!`,
//   });
// });