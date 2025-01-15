import express from "npm:express@4.17.3";
import {
  getCustomers,
  getCustomerById,
  createCustomer,
} from "../controllers/customers.ts";
import inputSanitizer from "../middlewares/inputSanitizer.ts";

export default function customersRouter() {
  const router = express.Router();

  // Middleware to parse data
  router.use(express.json());

  // Middleware to sanitize input
  router.use(inputSanitizer);

  // Define routes
  router.get("/", getCustomers);
  router.get("/:id", getCustomerById);
  router.post("/", createCustomer);

  return router;
}
