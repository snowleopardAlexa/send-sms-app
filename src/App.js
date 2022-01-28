import { useState } from 'react';
import "./App.css";
import { Container, Form, Button } from "react-bootstrap";

function App() {

const [number, setNumber] = useState('');
const [body, setBody] = useState('');

// function send SMS to the number submitted through the form
const onSubmit = async (e) => {
  await e.preventDefault();

  const res = await fetch("/api/sendMessage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ to: number, body: body}),
  });

  // after the request, the response from the endpoint is saved in the data variable
  const data = await res.json();

  if (data.success) {
    await setNumber("");
    await setBody("");
  } else {
    await setNumber("An error has occured.");
    await setBody("An error has occured.")
  }
}

  return (
    <div className="App">
      <Container>
        <h2>Send SMS</h2>
        <Form 
          className="mt-4"
          onSubmit={onSubmit}
        >
          <Form.Group>
            <Form.Label htmlFor="to">To</Form.Label>
            <Form.Control 
              value={number} 
              onChange={(e) => setNumber(e.target.value)} 
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="message">Body</Form.Label>
            <Form.Control 
              as="textarea" 
              rows="3" 
              onChange={(e) => setBody(e.target.value)}
            />
          </Form.Group>

          <Button className="mt-4" variant="primary" type="submit">
            Send
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default App;
