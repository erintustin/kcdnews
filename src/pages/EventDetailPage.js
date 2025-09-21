import { Container } from 'reactstrap';
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
            </Container>
            </>
    );
};

export default EventDetailPage;