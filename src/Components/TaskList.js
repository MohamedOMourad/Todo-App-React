import { Button, Form, Container, Row, Col } from 'react-bootstrap';

function TaskList({ updateTasksList, makeChecked, deleteTask }) {

    function onChecked(id) {
        makeChecked(id);
    }
    return (
        <Container>
            {updateTasksList().map((task) => {
                return (<Row className='p-2 ' key={task.id}>
                    <Col className='d-flex align-items-center justify-content-start bg-white my-1 p-1 border border-info' >
                        <Form.Check readOnly checked={task.checked ? 'checked' : ''}
                            type='checkbox' className='ms-2' onClick={() => onChecked(task.id)} />
                        <div className='w-100 d-flex align-items-center justify-content-between ms-4'>
                            <div className={task.checked ? 'text-decoration-line-through' : ''}>{task.text}</div>
                            <Button onClick={() => deleteTask(task.id)} className='px-2 py-0' variant='danger' size='sm'>X</Button>
                        </div>
                    </Col>
                </Row>
                )
            })}
        </Container>
    );
}
export default TaskList;