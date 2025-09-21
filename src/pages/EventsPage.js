import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectEventsByType } from '../features/events/EventsSlice';
import { Container, Row, Col } from 'reactstrap';
import EventCard from '../features/events/EventCard';
import SubHeader from '../components/SubHeader';

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
                <Row>
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
            <Row>
                <Col className='mx-auto'>
                    <h2 style={{color:'white'}}>PAST EVENTS</h2>
                </Col>
            </Row>
                <Row>
                {pastevents.map((pastevent) => {
                    return(
                        <Col md='4'
                            sm ='8'
                            className='mt-2 mb-2 mx-auto' 
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