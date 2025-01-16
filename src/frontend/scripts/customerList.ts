// document
//   .getElementById("customerForm")
//   .addEventListener("submit", async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const response = await fetch("/api/customer", {
//       method: "POST",
//       body: formData,
//     });
//     if (response.ok) {
//       const result = await response.json();
//       console.log("Customer created:", result);
//       // You can update the DOM here if needed
//     }
//   });
