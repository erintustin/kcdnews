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
import Intro from '../components/Intro';
import PageLinks from '../components/PageLinks';


const HomePage = () => {
    return(
       <Container>
        {/* News Page Layout*/}
        <Row className="mb-4 align-items-stretch">
          <Col md="8" className="d-flex flex-column">
            <Intro />
            <div className="marquee-container mb-3">
            <div className="marquee-content">
              <span className='rainbow-text'>LIVE LAUGH GOON SHRED LIVE LAUGH GOON SHRED LIVE LAUGH GOON SHRED LIVE LAUGH GOON SHRED</span>
            </div>
            </div>
          </Col>
          <Col md="4" className="d-flex flex-column">
            {/* Pages */}
            <PageLinks />
          </Col>
        </Row>

        {/* --- Grid of News Cards Section --- */}
        <h3 className="my-4" style={{color:'white'}}>Latest Stories</h3>
        <Row>
          {/* Loop through news articles to display cards */}
          {[1, 2, 3, 4, 5, 6].map(item => (
            <Col sm="6" md="4" className="mb-4" key={item}>
              <Card>
                <CardImg top width="100%" src={`https://picsum.photos/400/200?random=${item}`} alt={`Article ${item}`} />
                <CardBody>
                  <CardTitle tag="h5">Article Title {item}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Category | Time Ago</CardSubtitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <Button role="button" outline color="secondary">View Article</Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    )
};

export default HomePage;