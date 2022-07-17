import { Button, InputGroup, Form, Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

function InputTask({ addToTaskList }) {
    const [task, setTask] = useState('');
    function addToTask() {
        addToTaskList(task);
        setTask('');
    };

    return (
        <Container >
            <Row>
                <Col>
                    <div >
                        <InputGroup className='my-5 ' >
                            <Form.Control onKeyDown={(e) => e.key === 'Enter' ? addToTask(): null} onChange={(e) => setTask(e.target.value)} placeholder="Add Your Task" value={task} className='border border-warning' />
                            <Button onClick={addToTask} variant="warning">+</Button>
                        </InputGroup>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default InputTask;