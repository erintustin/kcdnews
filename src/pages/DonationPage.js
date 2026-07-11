import { Container, Button, Row, Col } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import myBackgroundImage from '../app/assets/images/events/safeathome/donationbg.png';
import venmo from '../app/assets/images/events/safeathome/venmo.png';
import cashapp from '../app/assets/images/events/safeathome/cashapp.png';
import paypal from '../app/assets/images/events/safeathome/paypal.png';


const DonationPage = () => {
    return(
        <>
        <SubHeader current='About' />
            <Container>
                <div className='video-wrapper'>
                    <img className='img img-fluid' src={myBackgroundImage}/>
                        <div className='donation-container p-3'>
                            <div className="overlay-wrapper" style={{position: 'relative', width: '100%'}}>
                                <div className="donation-overlay-bg"></div>
                                <div className="donation-overlay-content">
                                    <Row>
                                        <Col xs='4'>
                                            <a  href="https://venmo.com/u/ErinTustin" 
                                                target="_blank"
                                                className="d-flex flex-column align-items-center text-center"
                                                style={{color: 'black', fontWeight: 'bold'}}>
                                            VENMO
                                            <img className='square-element' style={{width: 100}} src={venmo}></img></a>
                                        </Col>
                                        <Col xs='4'>
                                            <a  href="https://cash.app/$ETustin" 
                                                target="_blank"
                                                className="d-flex flex-column align-items-center text-center"
                                                style={{color: 'black', fontWeight: 'bold'}}>
                                            CASH APP
                                            <img className='square-element' style={{width: 100}} src={cashapp}></img></a>
                                        </Col>
                                        <Col xs='4'>
                                            <a  href="https://www.paypal.com/pool/9qNrcYp5QU?sr=wccr" 
                                                target="_blank"
                                                className="d-flex flex-column align-items-center text-center"
                                                style={{color: 'black', fontWeight: 'bold'}}>
                                            CARD
                                            <img className='square-element' style={{width: 100}} src={paypal}></img></a>
                                        </Col>
                                    </Row>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
        </>
    )
};

export default DonationPage;