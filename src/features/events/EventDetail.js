import { Container, Row, Col, ButtonGroup, Button } from 'reactstrap';
import EventMedia from './EventMedia';

const EventDetail = ({event}) => {
    const {location, date, type, flyer, details, ticketslink, ticketsinfo, description } = event;

    if (type === 'past') {
        return (
            <Container className='mx-auto'>
                <Row>
                    <Col xs='10' className='mx-auto mt-4 mb-2'>
                        <h1 className='h1'>{date}</h1>
                        <h2 className='h2'>{location}</h2>
                        <img src={flyer} alt='${name} Flyer' className='img-fluid' />
                        <div className='content-center my-2'>{description}</div>
                    </Col>
                </Row>
                <Row>
                    <EventMedia event={event} />
                </Row>
            </Container>
        
         )} else {
        return (
            <Container className='mx-auto'>
                <Row>
                    <Col xs='10' className='mx-auto mt-4 mb-2'>
                        <h1 className='h1'>{date}</h1>
                        <h2 className='h2'>{location}</h2>
                        <img src={flyer} alt='${name} Flyer' className='img-fluid' />
                        <div className='content-center my-2'>{description}</div>
                        <div className='content-center my-2'>{details}</div>
                        <div className="rainbow-text"> 
                            <a role='button' href={ticketslink} target="new_window" className="rainbow-text"> {ticketsinfo}</a></div>
                    </Col>
                </Row>
                <Row>
                    <EventMedia event={event} />
                </Row>
            </Container>
            )
         };
};

export default EventDetail;