import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllProjects } from '../features/projects/ProjectsSlice';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, 
        Container, Row, Col } from 'reactstrap';
import ProjectCard from '../features/projects/ProjectCard';
import SubHeader from '../components/SubHeader';

const ProjectsPage = () => {
    const projects = useSelector(selectAllProjects);
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === projects.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? projects.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };
    
    const slides = projects.map((project) => {
        return(
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={project.name}
                className='portfolio-slide'
            >
                <ProjectCard project={project} />
            </CarouselItem> 
            );
    });

    return (
        <>
        <SubHeader current='Projects' />
        <Container className='mx-auto'>
            <Row>
                <Col className='mx-auto'>
                    <h2 style={{color:'white'}}>PROJECTS</h2>
                </Col>
            </Row>
            <Row>
                <Col xs='10' className='mx-auto'>
                    <Carousel
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                        slide={String(true)}
                        keyboard={String(true)}
                        pause='hover'
                        enableTouch={String(true)}
                        className='mx-auto mb-5'
                    >
                        <CarouselIndicators
                        items={projects}
                        activeIndex={activeIndex}
                        onClickHandler={goToIndex}
                        />
                        {slides}
                        <CarouselControl
                        direction="prev"
                        directionText="Previous"
                        onClickHandler={previous}
                        className='carousel-control'
                        />
                        <CarouselControl
                        direction="next"
                        directionText="Next"
                        onClickHandler={next}
                        className='carousel-control'
                        />
                    </Carousel>
                </Col>
            </Row>
      </Container>
      </>
    );
};

export default ProjectsPage;