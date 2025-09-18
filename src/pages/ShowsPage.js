import { Container } from 'reactstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectProjectByName } from '../features/projects/ProjectsSlice';
import ProjectDetail from '../features/projects/ProjectDetail';
import SubHeader from '../components/SubHeader';

const ProjectDetailPage = () => {
    const { projectName } = useParams();
    console.log(projectName);
    const project = useSelector(selectProjectByName(projectName));
    console.log('project:', project);

    return (
        <>
            <SubHeader current={projectName} detail={true} detailRoute='Projects' />
            <Container>
                    <ProjectDetail project={project} />
            </Container>
            </>
    );
};

export default ProjectDetailPage;