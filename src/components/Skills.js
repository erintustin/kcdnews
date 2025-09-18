import { Container, Button } from "reactstrap";
import SkillsList from "../features/skills/SkillsList";

const Skills = () => {
    return(
        <Container className='skills mx-auto col-8'>
            <div className='h4 content'>What can I do for you?</div>
            <SkillsList />
            <div className='mt-10'>
            <a className='btn btn-secondary btn-md' href='mailto:erintustin@gmail.com'>Contact Me</a>
            </div>
        </Container>
    )
};
export default Skills;