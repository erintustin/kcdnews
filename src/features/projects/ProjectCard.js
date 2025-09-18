import { Card, CardImg, CardSubtitle, CardTitle, 
 ButtonGroup, Button, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

const ProjectCard = ({project}) => {
const { name, screenshots, description, url, github } = project;

return (
       <Card className='m-2 mx-auto project-card' color='dark' inverse>    
           <CardBody className='p-0' >
                <Link to={`/projects/${name}/`}>
                        <CardImg 
                                className='m-0 project-card-img'
                                src={screenshots[0]}
                                alt={`Screenshot of ${name}`}
                        /> 
                </Link>
                <CardTitle tag='h5'className='m-2 mx-5'>{name}</CardTitle>
                <CardSubtitle className='p-2'>{description}</CardSubtitle>
           </CardBody>
              <ButtonGroup className='mx-auto m-3'>
                   <Button 
                       color='secondary'
                       size='sm'
                       className='m-1'
                       href={github} target='new_window'>
                       Code</Button>
                    <Button 
                        color='secondary'
                        href={url} target='new_window'
                        size='sm'
                        className='m-1'
                        >Demo</Button>
                   <Button
                           color='secondary'
                           size='sm'
                           className='m-1'
                           href={`/portfolio/${name}/`}>
                           Details</Button>
               </ButtonGroup>             
        
       </Card>
);
}

export default ProjectCard;