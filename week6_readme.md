# Beginner Interactive Webpage

This is a simple beginner project that demonstrates how **HTML, CSS, and JavaScript** work together to create an interactive webpage.  
It includes a **form with custom validation**, a **background color changer**, and a **counter**.

---

## 📂 Project Structure

- `index.html` → The main webpage structure.
- `style.css` → (Optional) Styles to make the page look nicer.
- `script.js` → JavaScript file with interactive features and form validation.
- `README.md` → This file. Explains the project for instructors or learners.

---

## 🚀 How to Run the Project

1. Download or copy all files into a single folder.  
2. Open `index.html` in any modern web browser (Chrome, Firefox, Edge, etc.).  
3. Interact with the webpage:
   - Fill out the **Sign Up Form**.
   - Try the **Change Background Color** button.
   - Play with the **Counter**.

---

## 📝 Features Explained

### 1. **Sign Up Form (with Custom Validation)**
- Located at the top of the page.
- Form asks for:
  - **Username** → Must be at least 3 characters long.  
  - **Email** → Must contain `@` and `.` (very simple validation).  
- When submitted:
  - If inputs are invalid → Error messages show in red.  
  - If inputs are valid → Success message shows in green.  

👉 This is **custom validation written in JavaScript**, not just HTML5 `required` fields.

---

### 2. **Change Background Color Button**
- Clicking the **"Change Color"** button picks a **random color** and changes the page’s background.  
- Demonstrates:
  - **Event handling** (button click).
  - **Random number generation** in JavaScript.
  - **DOM manipulation** (changing `document.body.style.backgroundColor`).

---

### 3. **Simple Counter**
- Shows a number starting at `0`.  
- Buttons:
  - **Increase** → adds `+1`.  
  - **Decrease** → subtracts `-1`.  
- Demonstrates:
  - **Event handling** on multiple buttons.
  - **Updating content** in the DOM (`innerText`).

---

## 🎨 Styling (style.css)
- Light gray background by default.
- White "cards" around each section with shadows.
- Buttons styled with blue background, rounded corners, and hover effects.

---

## 🔍 What the Instructor Should Look For

1. **index.html**
   - Has a form.
   - Contains three interactive sections.

2. **script.js**
   - Form validation is **custom** (not only HTML5 validation).
   - At least **two interactive features**:
     - Background color changer.
     - Counter.
   - Code is commented clearly to explain each part.

3. **style.css**
   - (Optional) Adds simple, clean design.

---

## ✅ Learning Outcomes

- Understanding how HTML structures a webpage.  
- Seeing how JavaScript handles **events** like button clicks and form submissions.  
- Writing **basic validation logic**.  
- Practicing **DOM manipulation**.  
- Adding **CSS styling** for a nicer look.  

---

## 📸 Example Interactions
1. Try submitting the form with a short username → Error appears.  
2. Enter a proper username and email → Success message appears.  
3. Click **Change Color** multiple times → Page background changes randomly.  
4. Use the counter buttons → Number goes up or down.  

---

This project is intentionally simple and easy to follow. It provides a solid introduction to interactive web development.
