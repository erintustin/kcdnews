import { Card, CardImg, CardSubtitle, ButtonGroup, Button, CardBody, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

const EventCard = ({event}) => {
const { name, flyer, location, uri } = event;

if (event.type === 'upcoming') {
return (
       <Card className='m-2 mx-auto' color='dark' inverse>    
           <CardBody className='p-0 mx-auto' >
                <Link to={`/events/${uri}/`}>
                        <CardImg 
                                className='m-0 event-card-img img-fluid'
                                src={flyer}
                                alt={`Flyer for ${name}`}
                        /> 
                </Link>
                <CardSubtitle className='p-2'>{name}</CardSubtitle>
                <CardText className='p-0 m-0 text-center content-smaller'>{location}</CardText>
           </CardBody>
              <ButtonGroup className='mx-auto m-3'>
                        <Button
                                role='button'
                                color='secondary'
                                size='sm'
                                className='m-1'
                                href={`/events/${uri}/`}> More Info
                        </Button>
               </ButtonGroup>             
       </Card>
        );
}

else {
        return (
                <Card className='m-2 mx-auto flyers-past' color='dark' inverse>    
                        <CardBody className='p-0 mx-auto' >
                                <Link to={`/events/${uri}/`}>
                                        <CardImg 
                                                className='m-0 img-fluid'
                                                src={flyer}
                                                alt={`Flyer for ${name}`}
                                        /> 
                                </Link>
                        </CardBody> 
                </Card>
                );
        }
};

export default EventCard;