import "./App.css";
import { Container, Form, Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <h2>Send SMS</h2>
        <Form>
          <Form.Group>
            <Form.Label htmlFor="to">To</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="message">Body</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Send
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default App;
