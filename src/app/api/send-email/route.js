import nodemailer from "nodemailer";

// Export the POST handler function
export async function POST(req) {
  const body = await req.json(); // Parse the request body

  const { name, email, category, budget, description } = body;

  // Create Nodemailer transporter
  let transporter = nodemailer.createTransport({
    service: "gmail", // You can replace 'gmail' with your email provider
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your email password or app password
    },
  });

  try {
    // Send the email
    console.log(process.env.EMAIL_USER);
    console.log(process.env.RECIPIENT_EMAIL);
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // User's email address
      to: process.env.RECIPIENT_EMAIL, // Your recipient email address
      subject: `New Service Request from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Category of Service: ${category}
        Budget: ${budget}
        Description: ${description}
      `,
    });

    // Return a successful response
    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);
    // Return an error response
    return new Response(JSON.stringify({ message: "Error sending email" }), {
      status: 500,
    });
  }
}
