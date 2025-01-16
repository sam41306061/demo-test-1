import { Hono } from "jsr:@hono/hono";
import {
  dirname,
  fromFileUrl,
} from "https://deno.land/std@0.224.0/path/mod.ts";

const app = new Hono();
const __dirname = dirname(fromFileUrl(import.meta.url));

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

app.get("/", (c) => {
  return c.html(
    Deno.readTextFileSync(`${__dirname}/../frontend/views/index.html`)
  );
});
export default app;
