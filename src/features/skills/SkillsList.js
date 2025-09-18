import { useSelector } from 'react-redux';
import { Container, Col, Row } from 'reactstrap';
import SkillCard from "./SkillCard";
import { selectAllSkills } from './SkillsSlice';

const SkillsList = () => {
    const skills = useSelector(selectAllSkills);

    return (
        <Container className='p-0 mt-2'>
        <Row>
            {skills.map((skill) => {
                return(
                    <Col md='2'
                        xs='4'
                        className='mt-2 mb-2 skill-container' 
                        key={skill.name}>
                        <SkillCard skill={skill} />
                    </Col>
                );
            })}
        </Row>
        </Container>
        )
}
export default SkillsList;