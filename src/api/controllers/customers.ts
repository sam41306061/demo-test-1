export const getCustomers = (req, res) => {
  const customers = req.params;
  res.send("List of Clients", customers);
};

export const getCustomerById = (req, res) => {
  const customerId = req.params.id;
  res.send(`Customer details for ID: ${customerId}`);
};

export const createCustomer = (req, res) => {
  try {
    const customerData = req.body;
    if (!customerData.name || !customerData.email) {
      return res.status(400).json({ error: "name and email are required" });
    }

    // process customer data
    console.log("New customer", customerData);
    res
      .status(201)
      .json({ message: "Customer created successfully", data: customerData });
  } catch (error) {
    console.error("Error creating customer:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
