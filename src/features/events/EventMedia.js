import { Container, Row, Col, CardGroup } from 'reactstrap';
import EventPhotoCard from './EventPhotoCard';
import EventVideoCard from './EventVideoCard'

const EventMedia = ({event}) => {
    const {photos, youtube, reels} = event;
    return (     
        <Container className='mx-auto my-5'>
            <Row>
             {photos.map((photo) => {
                    return(
                        <Col md='6'
                            sm ='8'
                            className='mt-2 mb-2 mx-auto' 
                            key={photo.id}>
                                <CardGroup>
                                    <EventPhotoCard photo={photo} />
                                </CardGroup>
                        </Col>
                    );
                })}
            </Row>
                <Row>
             {reels.map((reel) => {
                    return(
                        <Col md='6'
                            sm ='8'
                            className='mt-2 mb-2 mx-auto' 
                            key={reel.id}>
                                <CardGroup>
                                    <EventVideoCard video={reel} />
                                </CardGroup>
                        </Col>
                    );
                })}
            </Row>
      </Container>
    );
};

export default EventMedia;