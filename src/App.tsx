// Import the Bootstrap CSS for styling
import "bootstrap/dist/css/bootstrap.min.css";

// Import necessary components and functions from react-router-dom
import { Navigate, Route, Routes } from "react-router-dom";

// Import a specific component from the react-bootstrap library
import { Container } from "react-bootstrap";
// Import the NewNotes component from "./NewNotes" file
import NewNotes from "./NewNotes";

// Define a type "Note" which combines "id" and "NoteData" properties
export type Note = {
  id: string;
} & NoteData;

// Define a type "NoteData" to represent properties of a note
export type NoteData = {
  title: string;
  markdown: string;
  tags: Tag[];
};

// Define a type "Tag" with "id" and "label" properties
export type Tag = {
  id: string;
  label: string;
};

// The main function/component of your application
function App() {
  return (
    // Use the Container component from react-bootstrap to structure your content
    <Container className="my-4">
      {/* Define routes for navigation using react-router-dom */}
      <Routes>
        {/* Route for the homepage */}
        <Route path="/" element={<h1>Hi steno friend</h1>} />

        {/* Route for the "new" page */}
        <Route path="/new" element={<NewNotes />} />

        {/* Wildcard route, redirects to the homepage for invalid URLs */}
        <Route path="*" element={<Navigate to="/" />} />

        {/* Nested route with a parameter ":id" */}
        <Route path="/:id">
          {/* Sub-route for the index page of a specific note */}
          <Route index element={<h1>Show</h1>} />
          
          {/* Sub-route for the "edit" page of a specific note */}
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
      </Routes>
    </Container>
  );
}

// Export the main App component as the default export
export default App;
