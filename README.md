**TODO List Application**

 A responsive and feature-rich TODO list web application built with React and TypeScript. The app enables users to manage tasks, search through them, and persist their data using localStorage for offline support.


**Features**

<ul>Core Features<ul>

<i>Task Management:</i>

    Add tasks with a title and description.
    Mark tasks as complete/incomplete.
    Delete individual tasks.
    Clear all tasks with a single button.

<i>Search Functionality:</i>

    Dynamically filters tasks based on their title (case-insensitive).

<i>Offline Support:</i>

    Data is persisted using localStorage.
    Tasks remain available even after page reloads.

**Project Structure**

<i>1. App Component</i>

        The main component responsible for:
        Managing the tasks and search states.
        Interacting with localStorage via utility functions.
        Rendering child components:
        Search bar.
        TaskForm for adding new tasks.
        TaskList to display and manage tasks.
        Clear All Tasks button.
        
<i>2. Components</i>

    TaskForm.tsx:
    A controlled form for adding new tasks with validation.
    TaskList.tsx:
    Displays a list of tasks with options to toggle completion or delete tasks.
    TaskItem.tsx (Optional):
    A reusable component for rendering individual tasks.
    
<i>3. Utilities</i>

    storage.ts:
    getTasks: Fetches tasks from localStorage or returns an empty array.
    saveTasks: Saves the tasks to localStorage.

**Styling**

<i>Tailwind CSS:</i>

    Used for creating a clean, mobile-first, and responsive UI.
    Styled components include buttons, inputs, and task lists.
