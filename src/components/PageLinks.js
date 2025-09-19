import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap'
import eventsphoto from '../app/assets/images/eventsphoto.jpg';
import musicphoto from '../app/assets/images/screamoisgay.jpg';
import socialphoto from '../app/assets/images/rainbow.jpg';

const PageLinks = () => {
    return(
       <Container>
        <Card className="mb-3">
                <CardImg top width="100%" src={eventsphoto} alt="Events Photo" />
                <CardBody>
                    <CardTitle tag="h5">EVENTS</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Get the scoop on upcoming shows and appearances</CardSubtitle>
                    <Button outline color="secondary">Come Hang</Button>
                </CardBody>
                </Card>
                <Card className="mb-3">
                 <CardImg top width="100%" src={musicphoto} alt="Music Photo" />
                <CardBody>
                    <CardTitle tag="h5">MUSIC</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">This is no bologna--we really are a band </CardSubtitle>
                    <Button outline color="secondary">Listen Now</Button>
                </CardBody>
                </Card>
                <Card className="mb-3">
                <CardImg top width="100%" src={socialphoto} alt="Social Photo" />
                <CardBody>
                    <CardTitle tag="h5">SOCIAL</CardTitle>
                    <CardText>Keep up with the latest gay news</CardText>
                    <Button outline color="secondary">Follow Us</Button>
                </CardBody>
            </Card>
       </Container>

 )
};

export default PageLinks;