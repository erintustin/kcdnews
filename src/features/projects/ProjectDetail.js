import { useState } from 'react';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, 
        Container, Row, Col, ButtonGroup, Button } from 'reactstrap';

const ProjectDetail = ({project}) => {
    const {name, screenshots, description, url, github, skills, details, readme } = project;

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === screenshots.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? screenshots.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = screenshots.map((screenshot, i) => {
        return(
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={i}
                className='portfolio-slide'
            >
                <img 
                    className='screenshot mx-auto img-fluid' 
                    src={screenshot} 
                    alt={`Screenshot of ${name}`} 
                />
            </CarouselItem> 
            );
    });
    return (
        <Container className='mx-auto'>
            <Row>
                <Col md='8' className='mx-auto'>
                    <h2 className='content'>{name}</h2>
                </Col>
            </Row>
            <Row>
                <Col xs='10' className='mx-auto m-0'>
                    <Carousel
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                        pause='hover'
                        className='mx-auto mb-5'
                    >
                        <CarouselIndicators
                        items={screenshots}
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
            <Row>
                <Col md='7' style={{marginTop:'-50px'}}className='mx-auto'>
                    <h5 className='content'>{description}</h5>
                </Col>
            </Row>
            <Row>
                <Col md='7' className='mx-auto'>
                    <p className='content' align='justify'>{details}</p>
                </Col>
            </Row>
            <Row>
                <Col xs='6' className='mx-auto'>
                    <ButtonGroup className='mx-auto mb-3'>
                        <Button 
                            color='secondary'
                            size='md'
                            className='m-1'
                            href={github} target='new_window'>
                            Code</Button>
                            <Button 
                                color='secondary'
                                href={url} target='new_window'
                                size='md'
                                className='m-1'
                                >Demo</Button>
                        <Button 
                                color='secondary'
                                href={readme} target='new_window'
                                size='md'
                                className='m-1'
                                >.README</Button>
                    </ButtonGroup>  
               </Col>          
            </Row>
            <Row>
                <Col xs='12' md='7' className='mx-auto mb-5'>
                    <p align='justify'>{skills.join(', ')}</p>
                </Col>
            </Row>
      </Container>
    )
};





   
    



export default ProjectDetail;