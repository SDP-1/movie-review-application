import { useRef } from "react";
import { Form, Button } from "react-bootstrap";

const ReviewForm = ({ handleSubmit, labelText, defaultValue }) => {
  const revText = useRef();

  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>{labelText}</Form.Label>
        <Form.Control
          ref={revText}
          as="textarea"
          rows={3}
          defaultValue={defaultValue}
        />
      </Form.Group>
      <Button variant="outline-info" onClick={(e) => handleSubmit(e, revText.current.value)}>
        Submit
      </Button>
    </Form>
  );
};

export default ReviewForm;
