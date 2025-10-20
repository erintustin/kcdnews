import {
  Container,
  Row,
  Col,
} from 'reactstrap'
import Intro from '../components/Intro';
import PageLinks from '../components/PageLinks';
import Instafeed from '../components/Instafeed';

const HomePage = () => {
    return(
       <Container>
        <Row className="mt-5 mb-4 align-items-stretch">
          <Col md="8" className="d-flex flex-column">
          <div className="marquee-container mb-3">
            <div className="marquee-content">
              <a href="/music" className='rainbow-text'><h2 className='rainbow-text'>EXCLUSIVE! BETTING ON SPORTS NOW STREAMING LIVE-ONLY ON KCD.NEWS! EXCLUSIVE! BETTING ON SPORTS NOW STREAMING LIVE-ONLY ON KCD.NEWS! </h2></a>
            </div>
          </div>
          <div className='content-smaller mb-3'>
                    <iframe 
                    src="https://samply.app/embed/xpdJnVfwc9MnIgpLQu8U?si=6A0sW5CN1DMZooIOYBmFHUN4sNF2" 
                    frameborder="0"
                    allowtransparency="true"
                    style={{width: '100%', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.12)'}}
                    ></iframe>
                   <a role="button" className='rainbow-text' href='https://b4cd04ef-f212-4c3d-a083-6dd11fb45639.paylinks.godaddy.com/bettingonsports-ep-cd' target='new_window'>ALSO AVAILABLE ON COMPACT DISC</a>
                </div>
            <Intro />
            <div className="marquee-container mb-3">
            <div className="marquee-content">
              <h2 className='rainbow-text'>LIVE LAUGH GOON SHRED LIVE LAUGH GOON SHRED LIVE LAUGH GOON SHRED LIVE LAUGH GOON SHRED</h2>
            </div>
            </div>
          </Col>
          <Col md="4" className="d-flex flex-column">
            <PageLinks />
          </Col>
        </Row>
        <h3 className="my-4" style={{color:'white'}}>Latest Stories</h3>
        <Row>
          <Instafeed />
        </Row>
      </Container>
    )
};

export default HomePage;