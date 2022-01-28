import { useState } from 'react';
import "./App.css";
import { Container, Form, Button } from "react-bootstrap";

function App() {

const [number, setNumber] = useState('');
const [body, setBody] = useState('');

  return (
    <div className="App">
      <Container>
        <h2>Send SMS</h2>
        <Form className="mt-4">
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
