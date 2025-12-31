# Debounce vs Throttle Visualizer (React)

This project visually demonstrates the difference between **debounce** and
**throttle** techniques using a simple React application.

It helps understand how frequently a function (like an API call) is triggered
under rapid user input.

---

## 🧠 What Problem Do Debounce & Throttle Solve?

User events like typing, scrolling, or resizing can fire **too many times**.
This can:
- Spam APIs
- Hurt performance
- Cause unnecessary re-renders

Debounce and throttle help **control execution frequency**.

---

## 🔁 Debounce

**Definition:**  
Debounce runs a function **only after the user stops triggering an event**
for a specified delay.

**Best use cases:**
- Search input
- Auto-suggestions
- Form validation

**Behavior:**
- Many events → **one function call at the end**

---

## ⏱ Throttle

**Definition:**  
Throttle ensures a function runs **at most once every X milliseconds**, even if
events keep firing.

**Best use cases:**
- Scroll events
- Window resize
- Button spam prevention

**Behavior:**
- Events fire → function runs at fixed intervals

---

## 🆚 Key Difference

| Feature | Debounce | Throttle |
|------|---------|---------|
Execution | After user stops | At fixed intervals |
Frequency | Minimum calls | Controlled calls |
Common use | Search inputs | Scroll / resize |

---

## 🧪 What This Project Shows

- Two input boxes:
  - One uses **debounce**
  - One uses **throttle**
- Real-time counter for simulated API calls
- Clear visual comparison of behavior

---

## 🛠 Tech Stack

- React
- JavaScript
- CSS
- Vite

---

## 📂 Project Structure

```text
src/
 ├── App.jsx
 ├── App.css
 └── main.jsx
