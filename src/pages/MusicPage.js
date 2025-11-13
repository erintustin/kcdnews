import { Container, Row, Col, Button } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import albumart1 from '../app/assets/images/music/BOScover.png';
import bos1 from '../app/assets/images/music/recordingpit.jpg';
import bos2 from '../app/assets/images/music/tuggypit.jpg';
import bos3 from '../app/assets/images/music/anklepitsign.jpg';
import bos4 from '../app/assets/images/music/stephpit.jpg';
import bos5 from '../app/assets/images/music/erinmjpit.jpg';
import bos6 from '../app/assets/images/music/bettingonsportsdecoy.jpg';
import bettingonsportsreleasesavethedate from '../app/assets/images/events/flyers/bosreleasesavethedate.png'
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
                     <img src={albumart1} alt="betting on sports album art" width="80%"/>
                    <br></br>
                    <h2 className='h2'>our debut EP is available now!</h2>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <YouTubeEmbed url="https://www.youtube.com/shorts/qwgScUi6LNs" width={325} height={220} />
                    </div>
                    <div>
                        <Button role='button' className='m-2'color='primary' href='https://b4cd04ef-f212-4c3d-a083-6dd11fb45639.paylinks.godaddy.com/bettingonsports-ep-cd' target='new'>
                        Get on CD</Button>
                        <Button role='button' className='m-2'color='primary' href='#streaming'>
                        Stream Now!</Button>
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
                <h2 id='streaming' className='rainbow-text'>Now Streaming Live on KCD News</h2>
                <div className='content-smaller mb-3'>
                    <iframe 
                    src="https://samply.app/embed/xpdJnVfwc9MnIgpLQu8U?si=6A0sW5CN1DMZooIOYBmFHUN4sNF2" 
                    frameborder="0"
                    allowtransparency="true"
                    style={{width: '100%', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.12)'}}
                    ></iframe>

                    We have opted not to relase our EP on commercial streaming platforms. Streaming available only on KCD.NEWS!<br></br>
                    Thank you for supporting independent music and local gay news!
                </div>
                </Col>
              <Row>
                <div className='content-center'>
                    <img src={bettingonsportsreleasesavethedate} width="50%"/>
                </div>
                <h1 className='h1 mb-5'>
                    Stay tuned for info about our Betting on Sports release party!
                </h1>



            </Row>
            <Row>
                <Col xs='4'><img className='img-fluid square-element mb-4' src={bos1}></img></Col>
                <Col xs='4'><img className='img-fluid square-element mb-4' src={bos3}></img></Col>
                <Col xs='4'><img className='img-fluid square-element mb-4' src={bos2}></img></Col>
                <Col xs='4'><img className='img-fluid square-element mb-4' src={bos5}></img></Col>
                <Col xs='4'><img className='img-fluid square-element mb-4' src={bos4}></img></Col>
                <Col xs='4'><img className='img-fluid square-element mb-4' src={bos6}></img></Col>  
            </Row>
          
        </Container>
    </>
    )
};

export default MusicPage;