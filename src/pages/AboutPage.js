import { Container } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import us from '../app/assets/images/meettheband.png';
import hugs from '../app/assets/images/hugs.jpg';
import anklepit1 from '../app/assets/images/anklepit1.jpg';
import anklepit2 from '../app/assets/images/anklepit2.jpg';

const AboutPage = () => {
    return(
        <>
        <SubHeader current='About' />
        <Container>
            <div className='h2 content-center'>Hi, we're Kurt Cobain's Dad!</div>
            <div className='h6 content-center'>
                the answer to a hypothetical question no one even asked--<br></br>
            </div>
                <img src={us} width='85%' alt='us' />
            <div className='content-center mb-5'>
                "What if Kurt Cobain's father had just been four queers in a trench coat?"
            </div>
            <div className="px-5">
                <div className='content'>
                    We are a band of cute && silly trans && queer friends screamshouting songs about our parents && trying to love one other up from the depths of our hearts and a basement somewhere in West Philadelphia. 
                </div>

                <div className='mt-3 mb-2 content'>
                    We are dedicated to amplifying LGBTQ+BIPOC voices in the DIY music scene and beyond.  We do our best to provide a rockin' good time, promote inclusivity, and celebrate the diverse talents within our community.
                </div>
                <div className='mt-3 mb-5 content'>
                    We would love to hear from you about events and opportunities aligned with these goals.
                </div>
                <img className='mb-5' src={anklepit1} width='85%' alt='playing in the basement' />
                <img className='mb-5' src={anklepit2} width='85%' alt='playing in the basement' />
                <img className='mb-5' src={hugs} width='85%' alt='hugs' />
                <div className='mb-5 content-center'>
                    Photos by <a  className="rainbow-text" href="https://nicollemaroulismedia.my.canva.site/portfolio" target='new_window'>Nicolle Maroulis</a>
                </div>
            </div>
</Container>
</>
    )
};

export default AboutPage;