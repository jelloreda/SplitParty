import './EventCard.css'
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap"

const EventCard = ({ elm }) => {

    const date = new Date(elm.date)

    // const formatDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    const formatDate = date.toDateString()

    return (
        <Card className="p-2">
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <Card.Title
                        className='eventCardBanner'
                        style={{
                            backgroundImage: `url(${elm.banner})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}>
                        <h1>{elm.name}</h1>
                    </Card.Title>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Card.Body>
                        <Card.Text>
                            <p>Date: {formatDate}</p>
                            <p>{elm.description}</p>
                        </Card.Text>
                    </Card.Body>
                </ListGroup.Item>
            </ListGroup>


        </Card>
    )
}

export default EventCard