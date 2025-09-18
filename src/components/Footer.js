import { Container, Row, Col } from 'reactstrap';



const Footer = () => {
    return (
        <footer>
            <Container fluid='true'>
                <Row>
                    <Col className='mx-auto p-10'>
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
                            href='tel:+2156224191'
                            target='new_window'
                        >
                            <i className='fa fa-phone' />
                        </a>{' '}
                        <a
                            role='button'
                            className='btn btn-social-icon btn-dark mb-2'
                            href='mailto:babykittenz69@gmail.com'
                        >
                            <i className='fa fa-envelope-o' />
                        </a>
                        <p>© 2025 Kurt Cobain's Dad</p>
                    </Col>
                </Row>
            </Container>
        </footer>

    
        



    );
};

export default Footer;