import { Form, Button } from "react-bootstrap"

const NewProductPage = () => {

    return (

        <Container>
            <Row>
                <Col md={{ offset: 3, span: 6 }}>

                    <h1>Add a new product</h1>

                    <hr />

                    <Form>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="price">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" name="price" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="image">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" name="image" />
                        </Form.Group>

                        <div className="d-grid">
                            <Button variant="dark" type="submit">Add Product</Button>
                        </div>
                    </Form>

                </Col>
            </Row>
        </Container>

    )
}

export default NewProductPage