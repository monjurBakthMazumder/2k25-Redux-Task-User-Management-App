

#  Redux Task & User Management App

A simple, beginner-friendly task management and user management application built with **React**, **Redux Toolkit**, **Redux Persist**, and **React Router**.

This project helps you learn and practice how to:

* Manage global state using Redux Toolkit
* Persist data using Redux Persist
* Build routing with React Router
* Create CRUD operations for both tasks and users
* Filter tasks based on priority
* Connect tasks with specific users

---

##  Table of Contents

* [Features](#features)
* [Tech Stack](#tech-stack)
* [Getting Started](#getting-started)
* [Project Structure](#project-structure)
* [State Management Overview](#state-management-overview)
* [Routing Overview](#routing-overview)
* [Folder Overview](#folder-overview)
* [Author](#author)

---

##  Features

* Add, update, delete, and filter tasks 
* Add, update, and delete users 
* Assign tasks to users
* Persist data in **localStorage** (using Redux Persist)
* Task filtering by priority: All | Low | Medium | High
* Mark tasks as completed or pending
* Smooth dark mode support 🌙

---

##  Tech Stack

* **React** (with functional components)
* **Redux Toolkit** (for state management)
* **Redux Persist** (to store Redux state in localStorage)
* **React Router DOM** (for page navigation)
* **TypeScript** (for type safety)
* **Lucide React** (for icons)
* **Tailwind CSS** (for modern styling)

---

##  Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm or yarn

### Installation

1. Clone the project:

   ```bash
   git clone https://github.com/your-username/redux-task-user-app.git
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser at:

   ```
   http://localhost:5173
   ```

---

##  Project Structure

```
redux-task-user-app/
├── src/
│   ├── components/
│   ├── pages/
│   │   ├── Task.tsx
│   │   └── User.tsx
│   ├── redux/
│   │   ├── store.ts
│   │   └── features/
│   │       ├── task/
│   │       └── user/
│   ├── routes/
│   ├── providers/
│   └── App.tsx
└── index.tsx
```

---

##  State Management Overview

* **Redux Toolkit** manages two main slices:

  * `taskSlice`: Handles adding, updating, deleting, filtering, and completing tasks.
  * `userSlice`: Handles adding, updating, and deleting users.
* **Redux Persist** automatically saves the Redux state to **localStorage**, so when you refresh the page, your tasks and users won’t disappear.

---

###  Redux Store Example

```tsx
export const store = configureStore({
  reducer: {
    todo: persistedTaskReducer,
    user: persistedUserReducer,
  },
});
```

###  Persist Store Example

```tsx
<PersistGate loading={null} persistor={persistor}>
  <RouterProvider router={router} />
</PersistGate>
```

---

##  Routing Overview

This project uses **React Router DOM v6** to handle navigation.

| Route Path | Page      | Description                |
| ---------- | --------- | -------------------------- |
| `/`        | Task Page | Displays and manages tasks |
| `/task`    | Task Page | Same as the homepage       |
| `/user`    | User Page | Displays and manages users |

---

##  Folder Overview

* **`redux/store.ts`**
  Configures Redux store with persistence.

* **`redux/features/task/taskSlice.ts`**
  Handles all task-related state (add, delete, update, filter).

* **`redux/features/user/userSlice.ts`**
  Handles user-related state (add, delete, update).

* **`routes/index.tsx`**
  Manages the application routes using `createBrowserRouter`.

* **`pages/Task.tsx`**
  UI and functionality for the Task page (create, filter, update, delete tasks).

* **`pages/User.tsx`**
  UI and functionality for the User page (add, update, delete users).

---

# 👨‍💻 Author

**Md Monjur Bakth Mazumder**   
**Software Engineer | Lead Frontend Developer | Technical Instructor**

Software Engineer & Lead Frontend Developer at [Qrinux](https://www.qrinux.com/)  
Web Developer at Velocity Digital Inc.  
Web Instructor at [Parrots Academy](https://www.parrotsacademy.com/)

📧 [Email me](mailto:md.monjurmbm2001@gmail.com)  
🌐 [Portfolio](https://mdmonjurbakthmazumder.netlify.app)

Passionate about building clean, maintainable, and scalable applications.