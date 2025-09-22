import { useState } from 'react';
import { Container, Row, Col,  Carousel,
        CarouselItem, CarouselControl, CarouselIndicators,
        } from 'reactstrap';
import { useSelector } from 'react-redux';
import { selectEventsByType } from './EventsSlice';
import { Container, Row, Col } from 'reactstrap';
import EventCard from './EventCard';

const PastEvents = () => {
    const pastevents = useSelector(selectEventsByType('past'));
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === pastevents.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? pastevents.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };
    
    const slides = pastevents.map((pastevent) => {
        return(
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={pastevent.name}
                className='portfolio-slide'
            >
                <EventCard event={pastevent} />
            </CarouselItem> 
            );
    });

    return (
        <Container className='mx-auto'>
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
                        className='mx-auto mb-5 col-4'
                    >
                        <CarouselIndicators
                        items={pastevents}
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
    );
};

export default PastEvents;