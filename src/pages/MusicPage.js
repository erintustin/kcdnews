import { Container, Row, Col } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import albumcover from '../app/assets/images/music/petesurprised.png';
import bos1 from '../app/assets/images/music/recordingpit.jpg';
import bos2 from '../app/assets/images/music/tuggypit.jpg';
import bos3 from '../app/assets/images/music/anklepitsign.jpg';
import bos4 from '../app/assets/images/music/stephpit.jpg';
import bos5 from '../app/assets/images/music/erinmjpit.jpg';
import bos6 from '../app/assets/images/music/bettingonsportsdecoy.jpg';

const MusicPage = () => {
    return(
        <>
        <SubHeader current='Music' />
        <Container>
            <Row>
                <Col className='mx-auto mb-2'>
                   <div className='content-center'>
                    <h1 className='h1'>BETTING ON SPORTS</h1>
                     <img src={albumcover} alt="this is not our real album cover" width="75%"/>
                    <br></br>
                    <h2 className='h2'>our debut EP is coming soon!</h2>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md='8' className='mx-auto'>  
                    <div className='content-center content-smaller mb-3'>
                    Recorded by our own Mary Jadzia Smith <br></br>at The Anklepit <br>
                    </br><br></br>Mixed by Mattie Chaya Kimberly Klauser <br></br>Pillow Princess Productions<br>
                    </br> <br></br>Mastered by Elaine Rasnake <br></br>Daughterboard Audio<br>
                    </br> <br></br>
                    and featuring NEW yet-to-be-seen ungooglable photos of Pete Rose!</div>
                </Col>
            </Row>
            <Row>
                <Col xs='4'><img className='img-fluid square-element mb-4' src={bos1}></img></Col>
                <Col xs='4'><img className='img-fluid square-element mb-4' src={bos3}></img></Col>
                <Col xs='4'><img className='img-fluid square-element mb-4' src={bos2}></img></Col>
                <Col xs='4'><img className='img-fluid square-element mb-4' src={bos5}></img></Col>
                <Col xs='4'><img className='img-fluid square-element mb-4' src={bos4}></img></Col>
                <Col xs='4'><img className='img-fluid square-element mb-4' src={bos6}></img></Col>  
            </Row>
            <Row>
                <h1 className='h1'>
                    Stay tuned for info about our release party and how to listen!
                </h1>
            </Row>
        </Container>
    </>
    )
};

export default MusicPage;