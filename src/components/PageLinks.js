import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
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
                    <CardText>Find out about our upcoming shows and appearances</CardText>
                </CardBody>
                </Card>
                <Card className="mb-3">
                 <CardImg top width="100%" src={musicphoto} alt="Music Photo" />
                <CardBody>
                    <CardTitle tag="h5">MUSIC</CardTitle>
                    <CardText>Info about our releases and how to listen</CardText>
                </CardBody>
                </Card>
                <Card className="mb-3">
                <CardImg top width="100%" src={socialphoto} alt="Social Photo" />
                <CardBody>
                    <CardTitle tag="h5">SOCIAL</CardTitle>
                    <CardText>Follow us for the latest gay news</CardText>
                </CardBody>
            </Card>
       </Container>

 )
};

export default PageLinks;