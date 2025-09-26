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
import logo from '../app/assets/images/logo-dark.png';

const PageLinks = () => {
    return(
       <Container>
        <Card className="mb-3">
                <CardImg top width="100%" src={eventsphoto} alt="Events Photo" />
                <CardBody>
                    <CardTitle tag="h5">EVENTS</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Get the scoop on upcoming shows and appearances</CardSubtitle>
                    <Button role="button" outline color="secondary" href="/events">Come Hang</Button>
                </CardBody>
                </Card>
                <Card className="mb-3">
                 <CardImg top width="100%" src={musicphoto} alt="Music Photo" />
                <CardBody>
                    <CardTitle tag="h5">MUSIC</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">This is no bologna--we really are a band </CardSubtitle>
                    <Button outline color="secondary" href="/music">Listen Now</Button>
                </CardBody>
                </Card>
                <Button role="button" className='btn-drk rainbow-text' href="https://www.instagram.com/_kurtcobainsdad/" target="new_window">
                Follow Us For More Gay News
                </Button>
                <div>
                <img src={logo} alt='kcd rainbow logo' className="mt-2" width="75"/>
                </div>
       </Container>

 )
};

export default PageLinks;