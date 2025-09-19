import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap'
import mainphoto from '../app/assets/images/kohshow.jpg';

const Intro = () => {
    return(
       <Container>
        <Card className='mb-3'>
              <CardImg top width="100%" src={mainphoto} alt="Main Photo" />
              <CardBody>
                <CardTitle tag="h2">GAY ROCK MUSIC</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Local 'Gay News Crew' Also Plays Instruments</CardSubtitle>
                <CardText>
                  Hi! We're Kurt Cobain's Dad--a collective of queer artists and friends dedicated to amplifying LGBTQ+BIPOC voices in the diy music scene. Our mission is to provide a rockin' good time, promote inclusivity, and celebrate the diverse talents within our community.
                </CardText>
                <Button color="primary">Read More</Button>
              </CardBody>
            </Card>
       </Container>

 )
};

export default Intro;