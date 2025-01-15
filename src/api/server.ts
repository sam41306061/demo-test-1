import expresss from "npm:express@4.17.3";
import customersRouter from "./routes/customers.ts";
import process from "node:process";

// set your value
const app = expresss();

//server index page
app.get("*", (req, res) => {
  res.sendFile(process.cwd() + "/frontend/views/index.html");
});

app.use("/api/customers", customersRouter);

const port = Number(Deno.env.get("PORT")) || 8080;
await app.listen(port);

console.log(`Server is running on port: ${port}`);
