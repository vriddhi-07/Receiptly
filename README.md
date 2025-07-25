# 🧾 Receiptly

**Receiptly** is a full-stack web application that allows users to upload images of their receipts or bills. It processes these images using Optical Character Recognition (OCR) and Natural Language Processing (NLP) to extract item-level details such as name, price, quantity, and category. The extracted data is stored in a database(MONGO DB) and presented in an interactive dashboard to help users track expenses , analyze spending patterns and plan budget for the month.

---


## 🚀 Features

- 📸 Upload receipt images directly from the web UI  
- 🔍 Extract structured data using Python OCR & NLP  
- 🗄️ Extracted data is stored securely in MongoDB  
- 📊 Track monthly expenses and remaining budget  
- 📂 View all receipt history with itemized details  
- 📈 Generate interactive charts for spending insights  
- 📅 Integrated calendar to view bills based on the date written on the receipt  
- 📊 Dashboard includes monthly spending trends, spending categories, and budget usage  
- 💬 Chatbot for personalized suggestions and insights  
- 📅 Budget planner implemented for each month  
- 🔐 User authentication *(planned)*  

---

## 🧑‍💻 Tech Stack

| 🔧 Layer        | 🚀 Technology                          |
|----------------|-----------------------------------------|
| 💻 Frontend     | React.js, Bootstrap      |
| 🛠️ Backend      | Node.js, Express.js                     |
| 🧠 OCR & NLP    | Python, Tesseract (`pytesseract`), spaCy |
| 🗄️ Database     | MongoDB local server                         |
| 📊 Charts       | Chart.js or Recharts                    |

---

## ⚙️ How to Run the Project Locally

> ✅ Prerequisites: Make sure you have **Node.js**, **Python 3.11+**, **MongoDB**, and **pip** installed.

---

### 🧪 Step 1: Start MongoDB  
Open a terminal and run:

```bash
mongosh
````

---

### 🧠 Step 2: Train the Category Classification Model

In the same or new terminal:

```bash
cd backend
python train_category_model.py
```

---

### ⚙️ Step 3: Set up and Start the Backend Server

Still in the `backend/` folder:

```bash
npm install
node server.js
```

---

### 🌐 Step 4: Set up and Start the Frontend

In a new terminal:

```bash
cd frontend
npm install
npm start
```

---
## 👩‍💻👩‍💻 Developed By

- **Team Leader:** Subikshaa Sakthivel  
  [LinkedIn](https://www.linkedin.com/in/subikshaa-sakthivel777/) | [GitHub](https://github.com/Subikshaa22)  

- **Member 2:** Kavya Gupta  
  [LinkedIn](https://www.linkedin.com/in/kavya-gupta-442a62285/) | [GitHub](https://github.com/kavyagupta3011)  

- **Member 3:** Vriddhi Agrawal  
  [LinkedIn](https://www.linkedin.com/in/vriddhi-agrawal-6ba44b298) | [GitHub](https://github.com/vriddhi-07)  

- **Member 4:** Divya Reddy  
  [LinkedIn](https://www.linkedin.com/in/s-divya-455481270/) | [GitHub](https://github.com/Divyareddy8)  

---
## We are proud to contribute to tech and innovation as a team of women developers!❤️


##  Demo Video
- [Receiptly_Demo_Video](https://youtu.be/TGZ0zK84E-c?si=EmldNevfzTlXnxzk)
