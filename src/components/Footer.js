import { Container, Row, Col } from 'reactstrap';
import llgs from '../app/assets/images/llgs.jpg';



const Footer = () => {
    return (
        <footer>
            <Container fluid='true'>
                <Row>
                    <Col className='mx-auto p-10'>
                    <div><img className='mb-0' src={llgs} width='25%' alt='live laugh goon shred' /></div>        
                        <a
                            role='button'
                            className='btn btn-social-icon btn-dark mb-2'
                            href='https://www.instagram.com/_kurtcobainsdad'
                            target='new_window'
                        >
                            <i className='fa fa-instagram' />
                        </a>{' '}
                        <a
                            role='button'
                            className='btn btn-social-icon btn-dark mb-2'
                            href='sms:12156224191'
                            target='new_window'
                        >
                            <i className='fa fa-comments' />
                        </a>{' '}
                        <a
                            role='button'
                            className='btn btn-social-icon btn-dark mb-2'
                            href='mailto:babykittenz69@gmail.com'
                        >
                            <i className='fa fa-envelope-o' />
                        </a>
                        
                    </Col>
                </Row>
            </Container>
        </footer>

    
        



    );
};

export default Footer;