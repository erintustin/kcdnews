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
                <Col className='mx-auto mb-3'>
                    <h2 style={{color:'white'}}>COMING SOON</h2>
                </Col>
            </Row>
            <Row className='mb-5'>
                <Col md='8' className='mx-auto'>
                    <img src={albumcover} alt="this is not our real album cover" width="75%"/>
                <div className='content-center my-3'>
                    Our much anticipated debut EP 
                    <h2>Betting on Sports</h2>
                    is finally coming soon! 
                    </div>
                 <div className='content-center mb-3'>
                    Recorded by our own Mary Jadzia Smith <br></br>at The Anklepit <br>
                    </br><br></br>Mixed by Mattie Chaya Kimberly Klauser <br></br>Pillow Princess Productions<br>
                    </br> <br></br>Mastered by Elaine Rasnake <br></br>Daughterboard Audio<br>
                    </br> <br></br>
                    and featuring NEW yet-to-be-seen ungooglable photos of Pete Rose!</div>
                
                <div className='content-center'>
                    We had a blast putting this together along with the incredible talents of our community && 
                    we can't wait to share it with you!
                   </div>
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
            <Row className='mb-5'>
                 <div className='content-center'>
                    Stay tuned for info about our release party and how to listen!
                </div>
            </Row>
            
</Container>
</>
    )
};

export default MusicPage;