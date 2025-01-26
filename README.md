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

**Setup Instructions**

<i>1. Prerequisites</i>

  Node.js version 18 or higher.
  npm or yarn installed.
  
<i>2. Installation</i>

Clone the repository and install dependencies:
  
     git clone <repository-link>
     cd <repository-folder>
     npm install
     
<i>3. Start Development Server</i>


Start the application in development mode:

    npm start
  
<i>4. Build for Production</i>

Build the application for production:

    npm run build
    
**Application Flow**

<i>Initial Render:</i>

 The app fetches tasks from localStorage and loads them into the state.
 If no tasks are found, an empty list is displayed.
 
 Adding Tasks:

  Users can add tasks by entering a title and description in the form.
  The new task is saved to both the state and localStorage.


 Searching Tasks:

  As the user types in the search bar, tasks are filtered in real-time.
  Managing Tasks:

  Tasks can be marked as complete or incomplete by toggling their status.
  Tasks can also be deleted individually.
  
Clearing All Tasks:

  Clicking the "Clear All Tasks" button removes all tasks from both the state and localStorage.
  Testing
  
 <i>1. Functional Tests</i>
  Add tasks and verify they appear in the list.
  Mark tasks as complete/incomplete.
  Delete individual tasks.
  Use the search bar to filter tasks.
  Click "Clear All Tasks" and ensure all tasks are removed.

  
 </i>2. LocalStorage Validation</i>
   Open the browser's Developer Tools → Application → Local Storage and confirm:
   Tasks are saved under the "tasks" key.
   Tasks persist after a page refresh.
 <i>3. Responsive Design</i>
Test the application on devices of different sizes (mobile, tablet, desktop).
**<u>Future Enhancements<u>**

  <i>Bulk Actions:</i>
  
   Add functionality to toggle or delete multiple tasks at once.
  
  <i>Task Categories:</i>
  
   Allow users to group tasks into categories (e.g., Work, Personal).
  
  <i>Task Deadlines:</i>
  
   Add optional deadlines and sort tasks by due date.
  
  <i>Unit Tests:</i>
  
   Write tests using Jest and React Testing Library.
  
**Technologies Used**

   React: For building the user interface.
   
   TypeScript: To ensure type safety.
   
   Tailwind CSS: For styling and responsiveness.
   
   LocalStorage: For offline data persistence.
