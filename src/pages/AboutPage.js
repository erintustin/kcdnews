import { Container, Button, Row, Col } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import us from '../app/assets/images/bdaycake.jpg';
import meetkcd1 from '../app/assets/images/meetkcd1.jpg';
import meetkcd2 from '../app/assets/images/meetkcd2.jpg';
import meetkcd3 from '../app/assets/images/meetkcd3.jpg';
import meetkcd4 from '../app/assets/images/meetkcd4.jpg';
import meetkcd5 from '../app/assets/images/meetkcd5.jpg';
import meetkcd6 from '../app/assets/images/meetkcd6.jpg';
import meetkcd7 from '../app/assets/images/meetkcd7.jpg';
import meetkcd8 from '../app/assets/images/meetkcd8.jpg';

const AboutPage = () => {
    return(
        <>
        <SubHeader current='About' />
        <Container>
            <div className='h2 content-center'>Hi, we're Kurt Cobain's Dad!</div>
            <div className='h6 content-center'>
                the answer to a hypothetical question no one even asked--<br></br>
            </div>
                <img src={us} width='85%' alt='us' />
            <div className='content-center mb-5'>
                "What if Kurt Cobain's father had been just any number of queers in a trench coat?"
            </div>
            <div className="px-5">
                <div className='content'>
                    We are a band of cute && silly trans && queer friends screamshouting songs about our parents && trying to love one other up from the depths of our hearts and a basement somewhere in West Philadelphia. 
                </div>

                <div className='mt-3 mb-2 content'>
                    We are dedicated to amplifying LGBTQ+BIPOC voices in the DIY music scene and beyond.  We do our best to provide a rockin' good time, promote inclusivity, and celebrate the diverse talents within our community.
                </div>
                <div className='mt-3 content'>
                We would love to hear from you about events and opportunities aligned with these goals.
                    <div className='mt-3 mb-5 content-center'>
                    <Button className='btn-dark' role="button" href="/contact">Reach Out!</Button>
                </div>
                </div>
                <Row>
                    <Col md='3'><img className='img-fluid square-element mb-4' src={meetkcd1}></img></Col>
                    <Col md='3'><img className='img-fluid square-element mb-4' src={meetkcd6}></img></Col>
                    <Col md='3'><img className='img-fluid square-element mb-4' src={meetkcd7}></img></Col>
                    <Col md='3'><img className='img-fluid square-element mb-4' src={meetkcd8}></img></Col>
                    <Col md='3'><img className='img-fluid square-element mb-4' src={meetkcd2}></img></Col>
                    <Col md='3'><img className='img-fluid square-element mb-4' src={meetkcd3}></img></Col>  
                    <Col md='3'><img className='img-fluid square-element mb-4' src={meetkcd4}></img></Col>
                    <Col md='3'><img className='img-fluid square-element mb-4' src={meetkcd5}></img></Col> 
                </Row>
            </div>
</Container>
</>
    )
};

export default AboutPage;