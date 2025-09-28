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