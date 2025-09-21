import { useState } from 'react';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, 
        Container, Row, Col, ButtonGroup, Button } from 'reactstrap';

const EventDetail = ({event}) => {
    const {name, location, date, type, flyer, photos, description } = event;

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === photos.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? photos.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = photos.map((photo, i) => {
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
                    alt={'${photo.alt}'} 
                />
            </CarouselItem> 
            );
    });
    return (
        <Container className='mx-auto'>
            <Row>
                <Col xs='6' className='mx-auto mt-4 mb-2'>
                    <img src={flyer} alt='${name} Flyer' className='img-fluid' />
                </Col>
            </Row>
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
                        items={photos}
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
                    <p className='content' align='justify'>{description}</p>
                </Col>
            </Row>
            <Row>
                <Col xs='6' className='mx-auto'>
                    <ButtonGroup className='mx-auto mb-3'>
                        
                    </ButtonGroup>  
               </Col>          
            </Row>
            <Row>
                <Col xs='12' md='7' className='mx-auto mb-5'>
                   
                </Col>
            </Row>
      </Container>
    )
};

export default EventDetail;