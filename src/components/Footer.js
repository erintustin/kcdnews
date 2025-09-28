import { Container, Row, Col } from 'reactstrap';
import llgs from '../app/assets/images/llgs.jpg';

const Footer = () => {
    return (
        <footer>
            <Container fluid='true'>
                <Row>
                    <Col className='mx-auto p-10'>
                        <div>
                            <a role='button' href='/'><img className='mb-0' src={llgs} width='25%' alt='live laugh goon shred' /></a>
                        </div>        
                        <a
                            role='button'
                            className='btn btn-social-icon btn-dark mb-2'
                            href='https://www.instagram.com/_kurtcobainsdad'
                            target='new_window'
                        ><i className='fa fa-instagram' /></a>{' '}
                        <a
                            role='button'
                            className='btn btn-social-icon btn-dark mb-2'
                            href='https://www.youtube.com/channel/UCRKWtdPgPRZtaDDuXxzz8Ag'
                            target='new_window'
                        ><i className='fa fa-youtube' /></a>{' '}
                        <a
                            role='button'
                            className='btn btn-social-icon btn-dark mb-2'
                            href='mailto:babykittenz69@gmail.com'
                        ><i className='fa fa-envelope-o' /></a>   
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;