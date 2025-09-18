import { Container, Button, ButtonGroup } from "reactstrap";
import avatar from '../app/assets/images/avatar.jpg';

const Summary = () => {
    return(
        <Container className='summary mx-auto col-8'>
            <div className='h2 content'>Hi, I'm Erin!</div>
                <img src={avatar} alt='self-portrait' className='avatar' />
            <div className='content'>
                I’m a well-organized, persistent, adaptable, and unflappable developer 
                with prior experiences in the aviation and real estate industries. 
                I specialize in mobile-first and responsive design with a focus on accessibility.
            </div>
                <ButtonGroup className='main-buttons'>
                    <Button href='/projects' className='m-1'>Projects</Button>
                    <Button href='/resume' className='m-1'>Resume</Button>
                </ButtonGroup>
</Container>
    )
};

export default Summary;