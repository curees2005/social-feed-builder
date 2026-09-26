# Social Media Feed Builder

## 1. Introduction

Social Media Feed Builder is a responsive web application that provides a simple social-media-style interface where users can view posts, create their own posts, like posts, add comments, search content, and manage their locally created posts.

The project focuses on building an interactive and modern frontend using React while working with external API data and browser-based storage.

---

## 2. Objectives

The main objectives of this project are:

* Build a responsive social media feed interface.
* Fetch and display data from an external API.
* Allow users to create their own posts.
* Implement like and comment functionality.
* Provide post searching and filtering.
* Store user-created content locally in the browser.
* Create reusable React components.
* Deploy the application as a live web application.

---

## 3. Technology Stack

### Frontend

* React.js
* Vite
* JavaScript
* HTML5
* CSS3

### Data Handling

* REST API
* Fetch API
* Browser Local Storage

### Development Tools

* Visual Studio Code
* Git
* GitHub
* npm


## 4. Features

### 4.1 Social Media Feed

The home page displays a collection of posts in a social-media-style feed. Each post contains information such as the author, post content, likes, and comments.

### 4.2 Create Post

Users can create their own posts directly from the application.

A post can contain:

* Text content
* An optional image URL

After creation, the post is immediately displayed in the feed.

### 4.3 Like Posts

Users can like and unlike posts using the like button.

The application dynamically updates the like state to provide immediate visual feedback.

### 4.4 Comments

Users can interact with posts by adding comments.

Comments are displayed underneath their corresponding posts.

### 4.5 Delete Posts

Posts created by the user can be deleted from the feed.

This allows users to manage the content they have created.

### 4.6 Search

The application contains a search feature that allows users to quickly find relevant posts based on their content.

### 4.7 Favorites

Users can view posts they have liked through the Favorites section.

### 4.8 People to Follow

The interface contains a People to Follow section that displays user profiles and improves the overall social-media experience.

### 4.9 Local Storage

User-created content and interactions are stored using the browser's Local Storage.

This allows information to remain available even after refreshing or reopening the webpage in the same browser.

### 4.10 Responsive Design

The application is designed to work across different screen sizes, including:

* Desktop computers
* Laptops
* Tablets
* Mobile devices

---

## 5. Project Structure

```text
simple-feed-builder/
│
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles/
│
├── public/
├── index.html
├── package.json
├── netlify.toml
└── documentation.md
```

The project follows a component-based React architecture, making the application easier to understand, maintain, and extend.

---

## 6. Application Workflow

The basic workflow of the application is:

```text
Application Starts
        ↓
React Application Loads
        ↓
Post Data is Retrieved
        ↓
Feed is Displayed
        ↓
User Interacts With Feed
        ↓
Create / Like / Comment / Search
        ↓
Local Changes Saved in Browser Storage
        ↓
React Updates the User Interface
```

React state management allows changes to appear immediately without requiring the entire webpage to reload.

---

## 7. Data Storage

The application does not require a dedicated database server.

Initial feed information is retrieved through an external REST API, while user-generated content and interactions are stored using Local Storage.

Example:

```javascript
localStorage.setItem("posts", JSON.stringify(posts));
```

Stored information can later be retrieved using:

```javascript
const posts = JSON.parse(localStorage.getItem("posts"));
```

This approach makes the application lightweight and easy to deploy without requiring a separate backend server.

---

## 8. React Concepts Used

The project demonstrates several important React concepts.

### Components

The interface is divided into reusable components responsible for different parts of the application.

### State

React state is used to manage dynamic information such as:

* Posts
* Likes
* Comments
* Search input
* Navigation state

### Hooks

React hooks such as `useState` and `useEffect` are used for state management and application lifecycle operations.

### Event Handling

User actions such as clicking buttons, submitting posts, liking posts, and searching are handled using React event handlers.

### Conditional Rendering

Different content is displayed depending on the selected section and the current application state.

---

## 9. Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd simple-feed-builder
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application can then be accessed through the local URL displayed by Vite, typically:

```text
http://localhost:5173
```

---

## 10. Production Build

To create an optimized production build, run:

```bash
npm run build
```

---
