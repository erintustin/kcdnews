import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectEventsByType } from '../features/events/EventsSlice';
import { Container, Row, Col, Button } from 'reactstrap';
import EventCard from '../features/events/EventCard';
import SubHeader from '../components/SubHeader';
import PastEvents from '../features/events/PastEvents';
import stepsbg from '../app/assets/images/stepsbg.jpg';

const EventsPage = () => {
    const upcomingevents = useSelector(selectEventsByType('upcoming'));
    const pastevents = useSelector(selectEventsByType('past'));

    return (
        <>
        <SubHeader current='Events' />
        <Container className='mx-auto'>
            <Row>
                <Col className='mx-auto'>
                    <h2 style={{color:'white'}}>UPCOMING EVENTS</h2>
                </Col>
            </Row>
            <Row className='mb-5'>
                {upcomingevents.map((upcomingevent) => {
                    return(
                        <Col md='4'
                            sm ='8'
                            className='mt-2 mb-2 mx-auto' 
                            key={upcomingevent.name}>
                            <EventCard event={upcomingevent} />
                        </Col>
                    );
                })}
            </Row>
             <Row className='mb-5'>
                <Col className='mx-auto'>
                    <h2 style={{color:'white'}}>BOOKING</h2>
                    <Button role="button" className='btn btn-secondary btn-md' href='mailto:babykittenz69@gmail.com'>Contact Us</Button>
                </Col>
            </Row>
            <Row>
                <Col className='mx-auto'>
                    <h2 style={{color:'white'}}>PAST EVENTS</h2>
                </Col>
            </Row>
            <Row 
                style={{backgroundImage: `url(${stepsbg})`,
                width: '100%', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center'}}>
         
              {pastevents.map((pastevent) => {
                    return(
                        <Col md='4'
                            sm ='8'
                            className='mt-2 mb-2' 
                            key={pastevent.name}>
                            <EventCard event={pastevent} />
                        </Col>
                    );
                })}
            </Row>
      </Container>
      </>
    );
};

export default EventsPage;