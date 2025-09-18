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
  Button,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import mainphoto from '../app/assets/images/kohshow.jpg';

const Summary = () => {
    return(
        <Container>
        {/* --- Featured Article Section --- */}
        <Row className="mb-4">
          <Col md="8">
            <Card>
              <CardImg top width="100%" src={mainphoto} alt="Main Photo" />
              <CardBody>
                <CardTitle tag="h2">GAY ROCK MUSIC</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Local 'Gay News Crew' Also Plays Instruments</CardSubtitle>
                <CardText>
                  We are a collective of queer artists and friends dedicated to amplifying LGBTQ+BIPOC voices in the diy music scene. Our mission is to provide a rockin good time, promote inclusivity, and celebrate the diverse talents within our community.
                </CardText>
                <Button color="primary">Read More</Button>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <h4 className="mb-3">Top Stories</h4>
            {/* Can be an additional card or list group */}
            <Card className="mb-3">
              <CardBody>
                <CardTitle tag="h5">Second top story</CardTitle>
                <CardText>Brief summary of another top story.</CardText>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <CardTitle tag="h5">Third top story</CardTitle>
                <CardText>Brief summary of yet another top story.</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* --- Grid of News Cards Section --- */}
        <h3 className="my-4">Latest Articles</h3>
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
                  <Button outline color="secondary">View Article</Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>



//         <Container className='summary mx-auto col-10'>
//             <div className='h2 content'>Hi, we're Kurt Cobain's Dad!</div>
//                 <img src={mainphoto} alt='self-portrait' className='avatar' />
//             <div className='content'>
//                 I’m a well-organized, persistent, adaptable, and unflappable developer 
//                 with prior experiences in the aviation and real estate industries. 
//                 I specialize in mobile-first and responsive design with a focus on accessibility.
//             </div>
//                 <ButtonGroup className='main-buttons'>
//                     <Button href='/projects' className='m-1'>Projects</Button>
//                     <Button href='/resume' className='m-1'>Resume</Button>
//                 </ButtonGroup>
// </Container>
    )
};

export default Summary;