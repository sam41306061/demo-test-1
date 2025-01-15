#### **Scenario**

You are working as a developer for a company that manages customer data for various businesses using a **Customer Data Platform (CDP)**. Your task is to:

1. **Integrate a RESTful API** for customer profile management.
2. Build a lightweight front-end component to display customer data dynamically.
3. Create a basic **ETL pipeline** to process and store customer data from JSON files.

---

### **Tasks**

#### **Task 1: RESTful API Development**

1. **Build an API endpoint** using a lightweight server (Node.js or similar).
   - Endpoint: `POST /api/customer`
   - Accepts a JSON payload representing customer data (e.g., `name`, `email`, `preferences`).
   - Validates the payload for required fields.
   - Returns a success message if validation passes or an error message if it fails.

**Bonus**: Implement a middleware for input sanitization.

---

#### **Task 2: Data Processing and ETL**

1. Write a script to:
   - Load a JSON file containing customer interactions.
   - Extract relevant fields (e.g., customer ID, interaction type, timestamp).
   - Transform the data into a normalized format suitable for storage in a SQL database.
   - Load the transformed data into a SQL database (you may use SQLite or any SQL-based solution).

Provide the **SQL schema** for the table(s) you create.

---

#### **Task 3: Front-End Component**

1. Create a dynamic front-end component using JavaScript, HTML, and CSS to:
   - Display a list of customer profiles fetched from the API.
   - Use **Handlebars** to template the output.
   - Include basic styling and responsiveness.

**Bonus**:

- Add a search bar to filter customer profiles by name or email.
- Implement a WYSIWYG content editor for updating customer notes.

---

#### **Task 4: Documentation and Best Practices**

1. Write clear documentation for:
   - How to set up and run the API and front-end application.
   - How to execute the ETL process.
   - Highlight **CDP best practices** for managing customer data securely and efficiently.

---

#### **Submission Requirements**

1. Submit your code as a ZIP file or GitHub repository.
2. Include a README.md with:
   - Instructions for setup and execution.
   - Any assumptions or design decisions.

---

### **Evaluation Criteria**

1. **RESTful API**: Functionality, error handling, and adherence to best practices.
2. **Data Processing**: Correctness and efficiency of the ETL pipeline.
3. **Front-End Development**: Quality of the dynamic component, use of Handlebars, and styling.
4. **Documentation**: Clarity and thoroughness.
5. **Cloud Understanding**: Bonus points for mentioning how the solution could be deployed on AWS or Azure.

---

### Time Limit

- **3 Hours**

### File layout:

project-root/
├── src/
│ ├── api/
│ │ ├── controllers/
│ │ │ └── customers.ts
│ │ ├── routes/
│ │ │ └── customers.ts
│ │ ├── middlewares/
│ │ │ └── inputSanitizer.ts
│ │ └── server.ts
│ ├── dataProcessing/
│ │ └── etl.ts
│ ├── frontend/
│ │ ├── views/
│ │ │ └── index.ejs
│ │ └── scripts/
│ │ └── customerList.js
│ ├── db/
│ │ └── schema.ts
│ └── utils/
│ └── db.ts
├── public/
│ └── assets/
│ └── images/
└── config/
└── env.json
├── deno.json
├── package.json
└── README.md
