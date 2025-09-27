import { Container, Button } from 'reactstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectEventByName } from '../features/events/EventsSlice';
import EventDetail from '../features/events/EventDetail';
import SubHeader from '../components/SubHeader';

const EventDetailPage = () => {
    const { eventName } = useParams();
    console.log(eventName);
    const event = useSelector(selectEventByName(eventName));
    console.log('event:', event);

    return (
        <>
            <SubHeader current={eventName} detail={true} detailRoute='Events' />
            <Container>
                    <EventDetail event={event} />
                    <Button role="button" className='mb-5' href="/events">Back to Events</Button>
            </Container>
            </>
    );
};

export default EventDetailPage;