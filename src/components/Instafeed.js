import { useSelector } from 'react-redux';
import { selectAllStories } from '../features/stories/StoriesSlice';
import { Container, Row, Col, CardGroup } from 'reactstrap';
import StoryCard from '../features/stories/StoryCard';


const Instafeed = () => {
    const stories = useSelector(selectAllStories);

    return (
        <Container>
            <Row>
                {stories.map((story) => {
                    return(
                        <Col 
                            style={{maxWidth:350}}
                            md='4'
                            sm ='6'
                            className='mt-2 mb-2 mx-auto' 
                            key={story.id}>
                            <CardGroup>
                            <StoryCard story={story} />
                            </CardGroup>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default Instafeed;