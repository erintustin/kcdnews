import { Container } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import videobg from '../app/assets/images/contactussmall.mov';

const ContactPage = () => {
    return(
        <>
        <SubHeader current='Contact' />
        <Container>
            <div className='video-wrapper'>
                <video className='video img-fluid' src={videobg} autoPlay loop controls muted />
                <div className='contact-container mt-5 p-3'>
                    <div className="overlay-wrapper" style={{position: 'relative', width: '100%'}}>
                        <div className="overlay-bg"></div>
                        <div className="overlay-content">
                            <h2 className="h2"> WE WOULD LOVE TO HEAR FROM YOU</h2>
                            <p className='content-center'>For Booking, Media, && all other Inquiries</p>
                            <p className='content-center'>
                                <a
                                role='button'
                                className='btn btn-social-icon btn-dark mb-2'
                                href='mailto:babykittenz69@gmail.com'
                                ><i className='fa fa-envelope-o' /></a>    {''}
                                <a
                                role='button'
                                className='btn btn-social-icon btn-dark mb-2'
                                href='sms:12156224191'
                                target='new_window'
                                ><i className='fa fa-comments' /></a>{' '}
                               <a
                                role='button'
                                className='btn btn-social-icon btn-dark mb-2'
                                href='tel:12156224191'
                                target='new_window'
                                ><i className='fa fa-phone' /></a>{' '}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
</>
    )
};

export default ContactPage;