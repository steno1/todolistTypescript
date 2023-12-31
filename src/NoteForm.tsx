// Import necessary components and functions from react-bootstrap

import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import React, { FormEvent, useRef, useState } from "react";

import CreatableReactSelect from "react-select/creatable";
import { Link } from "react-router-dom";
import { NoteData } from "./App";
import { Tag } from "./App";

// Import CreatableReactSelect from the react-select library

// Import Link component from react-router-dom

// Import the NoteData and Tag types from the App module



// Define type for props that NoteForm component receives
type NoteFormProps = {
  onSubmit: (data: NoteData) => void; // Function to handle form submission
};

// Define the NoteForm component
const NoteForm = ({ onSubmit }: NoteFormProps) => {
  // Create a reference for the title input element
  const titleRef = useRef<HTMLInputElement>(null);
  // Create a reference for the markdown textarea element
  const markDownRef = useRef<HTMLTextAreaElement>(null);
  // Use state to manage selected tags
  const [selectedTags, setSelectedTags] = useState<Tag[] | undefined>();

  // Define a function to handle form submission
  function handleSubmit(e: FormEvent) {
    e.preventDefault(); // Prevent default form submission behavior
    
    // Call the onSubmit function with the form data
    onSubmit({
      title: titleRef.current!.value, // Get the value from the title input
      markdown: markDownRef.current!.value, // Get the value from the markdown textarea
      tags: selectedTags || [], // Use selectedTags or an empty array if undefined
    });
  }

  // Return the JSX content of the NoteForm
  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              {/* Attach the titleRef to the title input */}
              <Form.Control required ref={titleRef} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              {/* Use CreatableReactSelect for tag selection */}
              <CreatableReactSelect
  value={
    selectedTags?.map((tag) => ({
      label: tag.label, // Use the label of each selected tag
      value: tag.id, // Use the ID of each selected tag
    })) || [] // If selectedTags is undefined, use an empty array
  }
  onChange={(tags) => {
    setSelectedTags(
      tags.map((tag) => ({
        label: tag.label, // Use the label of each tag from the input
        id: tag.value, // Use the value of each tag from the input as its ID
      }))
    );
  }}
  isMulti // Enable multiple tag selection
/>

            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="markdown">
          <Form.Label>Body</Form.Label>
          {/* Attach the markDownRef to the markdown textarea */}
          <Form.Control required as="textarea" rows={10} ref={markDownRef} />
        </Form.Group>
        {/* Stack for buttons */}
        <Stack direction="horizontal" gap={2} className="justify-content-end">
          {/* Save button */}
          <Button type="submit" variant="primary">
            Save
          </Button>
          {/* Cancel button using Link */}
          <Link to="..">
            <Button type="button" variant="outline-secondary">
              Cancel
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Form>
  );
};

// Export the NoteForm component as the default export
export default NoteForm;
