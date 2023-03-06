import { Col, Container, Row } from "react-bootstrap"
import EventCard from "../EventCard/EventCard"

const EventList = ({ events }) => {

    return (
        <Row>
            {
                events.map(elm => {
                    return (
                        <Col md={6} className='p-2'>
                            <EventCard key={elm._id} elm={elm} />
                        </Col>
                    )
                })
            }
        </Row>

    )
}

export default EventList