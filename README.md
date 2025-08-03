# -Online-Bookstore-Web-Application
An interactive, mobile-friendly **online bookstore** built using **React.js**, **HTML5**, **CSS3**, and **JavaScript**. This app allows users to explore, filter, and shop for books with features like cart management, search, filtering, rating, sorting, and more.

🔥 Features

- ✅ **Search Bar** – Find books by title or author.
- ✅ **Category Filter** – Filter books based on genres/categories.
- ✅ **Add to Cart** – Add multiple books to cart and see total price.
- ✅ **Book Details Modal** – View book summary and information in a popup.
- ✅ **Rating System** – Display star ratings for each book.
- ✅ **Pagination** – Browse books page by page.
- ✅ **Books Per Page Dropdown** – Choose how many books to display (3, 6, 9, All).
- ✅ **Sort Options** – Sort by Title, Price, or Rating.
- ✅ **Dark Mode Toggle** – Switch between light and dark themes.
- ✅ **Responsive Design** – Looks great on mobile, tablet, and desktop.

🛠️ Tech Stack

| Layer       | Technology     | Role                          |
|-------------|----------------|-------------------------------|
| Frontend    | React.js       | Framework for UI Components  |
|             | HTML5          | Page structure via JSX       |
|             | CSS3           | Styling and responsiveness   |
|             | JavaScript     | Application logic & interactivity |

📁 Project Structure

📦src
┣ 📜App.js // Main app logic
┣ 📜books.js // Sample book data (15 books)
┣ 📜BookCard.js // Displays each book
┣ 📜BookModal.js // View book details popup
┣ 📜BookCard.css // Book card styling
┣ 📜App.css // Global styling and themes

✅ Source Files with Descriptions
1. App.js
Contains the full logic for:

Dark Mode Toggle

Cart System

Search Bar

Category Filter

Sort Options

Pagination Logic

Modal Handling

Connects all components and passes props correctly.

2. BookCard.js
Displays book image, title, author, price, and two buttons:

"Add to Cart"

"View Details"

Calls the onAddToCart and onViewDetails functions via props.

3. BookModal.js
Opens in a centered overlay when "View Details" is clicked.

Shows larger image, description, title, author, and rating.

Includes a "Close" button.

4. books.js
Contains 15 sample book objects with the following:

id, title, author, price, category, rating, description, image.

5. BookCard.css
Styles each book card with layout, shadows, buttons, hover effects, and responsiveness.

6. App.css
Styles entire layout.

Handles dark mode and light mode themes.

Includes responsive media queries for mobile friendliness.
