import { Container, Row, Col } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import albumcover from '../app/assets/images/bettingonsportsdecoy.jpg';

const MusicPage = () => {
    return(
        <>
        <SubHeader current='Music' />
        <Container>
            <Row>
                <Col className='mx-auto'>
                    <h2 style={{color:'white'}}>COMING SOON</h2>
                </Col>
            </Row>
            <Row className='mb-5'>
                <Col md='6' className='mx-auto'>
                    <img className="rounded-circle" src={albumcover} alt="this is not our real album cover" width="85%"/>
                
                <div className='content-center my-3'>Our much anticipated 3-song EP "Betting on Sports" is finally coming soon! Stay tuned for info about our release party and how to listen!</div>
                <div className='content-center mb-3'>Recorded at The Anklepit, Mixed by Mattie Chaya Kimberly Klauser of Pillow Princess Productions, Mastered by Elaine Rasnake of Daughterboard Audio, and featuring NEW yet-to-be-seen ungooglable photos of Pete Rose.</div>
                <div className='content-center mb-5'>We had a blast putting this together along with the incredible talents of our community && we can't wait to share it with you!</div>
                </Col>
                
            </Row>
</Container>
</>
    )
};

export default MusicPage;