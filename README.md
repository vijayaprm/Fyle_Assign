
Link to the hosted Web App:https://taxcalculatorvprm.netlify.app/


Assumptions:

Input Format: Users are expected to enter numerical values only for gross annual income, extra income, and applicable deductions. Non-numeric inputs will result in an error.
Age Group: Users must select their age group from the provided options: < 40, ≥ 40 & < 60, and ≥ 60.
Tax Calculation: Tax rates are applied based on the user's age group. The tax rates used are 30% for age < 40, 40% for age ≥ 40 but < 60, and 10% for age ≥ 60.
Tax Slabs: The tax calculation considers a tax slab of 800,000 INR. Income above this slab is taxed according to the applicable rate for the user's age group.
Result: The application provides users with their total net income, tax payable, and overall income after tax deductions.

Usage:

Enter the gross annual income, extra income, and applicable deductions in the respective input fields.
Select the appropriate age group from the dropdown menu.
Click the "Submit" button to calculate the tax and view the results in a modal window.




To run and test an HTML file along with its associated JavaScript (JS) file locally, follow these steps:

Download the Necessary Files:

Download the HTML file (e.g., index.html) and the JavaScript file (e.g., script.js) to your local machine.
Set Up a Local Server:

Open your terminal or command prompt and navigate to the directory where your HTML and JS files are located.
You can use a simple HTTP server to serve these files. If you have Python installed, you can use Python's built-in HTTP server.
Using Python:


python3 -m http.server

This command starts a local server on port 8000 by default.

Open the HTML File in a Web Browser:

Open your web browser (e.g., Chrome, Firefox, Safari) and navigate to http://localhost:8000/index.html (assuming your HTML file is named index.html and the server is running on port 8000).
Interact with the Web Page:

Once the HTML file is loaded in your web browser, you can interact with the webpage as usual.
Verify that the JavaScript functionality works as expected. For example, if there are buttons to click or forms to submit, ensure that they trigger the desired actions.
Use the browser's developer tools to debug any JavaScript errors or view console.log 
