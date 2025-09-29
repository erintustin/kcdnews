import { Card, CardImg, CardImgOverlay, CardText } from 'reactstrap';

const EventPhotoCard = ({photo}) => {
    const {src, alt, credit, id} = photo;

    return (
    <Card>
        <CardImg
        top
        alt={alt}
        src={src}
        className="img-fluid"
        key={id}
        width="100%"
        />
        <CardImgOverlay className="d-flex flex-column justify-content-end">
        <CardText>
            <small className="content-smaller" style={{color:'lightgray'}}>
            {credit}
            </small>
        </CardText>
        </CardImgOverlay>
    </Card>   
    );
};

export default EventPhotoCard;