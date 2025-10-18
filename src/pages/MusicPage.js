import { Container, Row, Col, Button } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import itspete from '../app/assets/images/music/petesurprised.png';
import albumart1 from '../app/assets/images/music/BOScover.png';
import albumart2 from '../app/assets/images/music/BOSbackcover.png';
import bos1 from '../app/assets/images/music/recordingpit.jpg';
import bos2 from '../app/assets/images/music/tuggypit.jpg';
import bos3 from '../app/assets/images/music/anklepitsign.jpg';
import bos4 from '../app/assets/images/music/stephpit.jpg';
import bos5 from '../app/assets/images/music/erinmjpit.jpg';
import bos6 from '../app/assets/images/music/bettingonsportsdecoy.jpg';
import { YouTubeEmbed } from 'react-social-media-embed';
const MusicPage = () => {
    return(
        <>
        <SubHeader current='Music' />
        <Container>
            <Row>
                <Col className='mx-auto mb-2'>
                   <div className='content-center'>
                    <h1 className='h1'>BETTING ON SPORTS</h1>
                     <img src={albumart1} alt="betting on sports album art" width="50%"/>
                    <br></br>
                    <h2 className='h2'>our debut EP is available now!</h2>
                    <Button role='button' className='m-2'color='primary' href='https://b4cd04ef-f212-4c3d-a083-6dd11fb45639.paylinks.godaddy.com/bettingonsports-ep-cd' target='new'>
                        Get on CD</Button>
                     <Button role='button' className='m-2'color='primary' href='https://b4cd04ef-f212-4c3d-a083-6dd11fb45639.paylinks.godaddy.com/bettingonsports-ep-digital' target='new'>
                        Get Digital Download</Button>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
  <YouTubeEmbed url="https://www.youtube.com/shorts/qwgScUi6LNs" width={325} height={220} />
</div>
                </Col>
            </Row>
            <Row>
                <Col md='8' className='mx-auto'>  
                    <div className='content-center content-smaller mb-3'>
                        Tracklist:<br></br>
                    A Lover's Curse <br></br>
                    Baby Kittens<br></br>
                    Trash Panda<br></br><br></br>
                    Recorded by our own Mary Jadzia Smith <br></br>at The Anklepit <br>
                    </br><br></br>Mixed by Mattie Chaya Kimberly Klauser <br></br>Pillow Princess Productions<br>
                    </br> <br></br>Mastered by Elaine Rasnake <br></br>Daughterboard Audio
                    </div>
                </Col>
            </Row>
             <Col className='mx-auto mb-2'>
                <h2 className='h2'>How to Listen</h2>
                 <img src={itspete} alt="betting on sports album art" width="75%"/>  
                <div className='content-smaller mb-3'>
                    We have opted not to relase our EP on commercial streaming platforms, but we would still love to share it with you!<br></br>
                    We will be streaming it ourselves on our site and social media soon so stay tuned!<br></br>
                    In the meantime, Betting On Sports is available for digital download (pay what you want) and on CD for $6.00 (+shipping if applicable)<br></br>
                    You will receive access to a cloud drive containing the digital files upon purchase.<br></br>
                    Thank you for supporting independent music!
                </div>
                 
                </Col>
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
                    Stay tuned for info about our release party and how to stream Betting on Sports!
                </h1>
            </Row>
        </Container>
    </>
    )
};

export default MusicPage;