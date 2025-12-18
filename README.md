# QA Automation Workflow

## 📌 Project Overview

This project demonstrates a complete Quality Assurance (QA) automation workflow for a simple web application. It covers three major testing layers used in real-world software projects:

* UI Automation Testing
* Performance (Load) Testing
* Unit Testing

The goal of this project is to understand how different testing tools work together to improve software quality.

---

## 🧪 Testing Tools Used

### 1. Cypress – UI Automation Testing

Cypress is used to automate and validate user interactions on the login page.

**Test Scenarios:**

* Invalid login shows an error message
* Valid login shows a success message

---

### 2. Apache JMeter – Performance Testing

Apache JMeter is used to simulate multiple users accessing the application.

**Load Test Details:**

* 50 virtual users
* Ramp-up time: 10 seconds
* Target: Login page homepage

---

### 3. Jest (xUnit Style) – Unit Testing

Jest is used as an xUnit-style framework to test backend login validation logic.

**Unit Tests Include:**

* Valid credentials check
* Invalid credentials check
* Empty input validation

---

## 🗂 Project Structure

```
qa-automation-workflow/
│
├── index.html
├── style.css
├── script.js
│
├── cypress/
│   └── e2e/
│       └── login.cy.js
│
├── jmeter/
│   └── login_load_test.jmx
│
├── backend/
│   └── auth.js
│
├── backend-tests/
│   └── auth.test.js
│
├── package.json
```

---

## ▶️ How to Run the Project

### Start the Application

```bash
npx serve .
```

Open: `http://localhost:3000/index.html`

---

### Run Cypress Tests

```bash
npx cypress open
```

---

### Run Unit Tests

```bash
npm test
```

---

## 📌 Conclusion

This project provides hands-on experience with multiple QA testing techniques and tools. It demonstrates how UI, performance, and unit testing can be combined to build a reliable QA automation workflow.

---

## 🔗 Repository

This project is hosted on GitHub and contains all source code and test configurations for review.
