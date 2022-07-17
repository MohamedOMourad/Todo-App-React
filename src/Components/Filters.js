import { Button, Navbar, Nav } from "react-bootstrap";
function Filters({ addFilteration, uncheckAllTasks, checkAllTasks }) {
    return (

        <div>
            <Navbar className='Navbar p-1 text-warning ' bg="light" expand="lg">
                <Navbar.Brand className=' text-warning'><h4 >ToDo's</h4></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className=" w-100 me-auto my-2 my-lg-0 my-md-0 my-sm-1 "
                        style={{ maxHeight: '1000px' }}
                        navbarScroll
                    >
                        <div className=" w-100 d-flex justify-content-evenly  flex-wrap">
                            <Button onClick={() => addFilteration('all tasks')} className="m-1 " size="sm" variant="primary">All Tasks</Button>
                            <Button onClick={() => addFilteration('checked tasks')} className="m-1 " size="sm" variant="success">Checked Tasks</Button>
                            <Button onClick={() => addFilteration('unchecked tasks')} className="m-1 " size="sm" variant="secondary">Unchecked Tasks</Button>
                            <Button onClick={() => checkAllTasks()} className="m-1 " size="sm" variant="warning">Check All</Button>
                            <Button onClick={() => uncheckAllTasks()} className="m-1 " size="sm" variant="danger">Uncheck All</Button>
                        </div>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Filters;