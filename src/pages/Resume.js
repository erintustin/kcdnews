import { Container, Row, Col, Button } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import resume from '../app/assets/images/resume/Resume.png'

const Resume = () => {
    return(
        <>
        <SubHeader current='Resume' />
        <Container className='mb-5'>
            <Row>
                <Col className='mx-auto'>
                    <h2 style={{color:'white'}}>RESUME</h2>
                </Col>
            </Row>
            <Row>
                <Col className='p-2'>
                <img src={resume} style={{width:800}} className='img-fluid' /></Col>
            </Row>
            <Row>
                <Col className='mx-auto m-1'>
                    <Button 
                        className='btn btn-secondary btn-md' 
                        href={process.env.PUBLIC_URL + 'resume.pdf'}>
                        View .PDF</Button>
                </Col>
            </Row>
            </Container>
            </>
    )
};

export default Resume;