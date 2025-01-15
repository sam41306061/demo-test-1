import { Hono } from "jsr:@hono/hono";

const app = new Hono();

app.post("/api/customer", async (c) => {
  try {
    const body = await c.req.json();

    // Basic validation
    if (!body.name || !body.email) {
      return c.text("Please provide name and email", 400);
    }

    // Process the customer data
    const processedCustomer = {
      ...body,
      createdAt: new Date().toISOString(),
    };

    // Store the customer (in this case, we're just logging)
    console.log("New customer:", JSON.stringify(processedCustomer));

    return c.json({
      message: "Customer created successfully",
      customer: processedCustomer,
    });
  } catch (error) {
    return c.text(`Error processing customer: ${error.message}`, 500);
  }
});

app.get("/", async (c) => {
  return c.html(`
    <h1>Customer API</h1>
    <form method="POST" action="/api/customer">
      <input type="text" name="name" placeholder="Name">
      <input type="email" name="email" placeholder="Email">
      <button type="submit">Create Customer</button>
    </form>
  `);
});

export default app;
