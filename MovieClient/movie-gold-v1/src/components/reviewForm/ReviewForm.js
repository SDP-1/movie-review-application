import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const ReviewForm = ({ handleSubmit, labelText, defaultValue }) => {
  const [reviewText, setReviewText] = useState(defaultValue);

  const handleChange = (e) => {
    setReviewText(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(reviewText);
    setReviewText(""); // Clear textarea after submit
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>{labelText}</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={reviewText}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="outline-info" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ReviewForm;
