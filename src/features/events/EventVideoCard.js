import { InstagramEmbed } from 'react-social-media-embed';
import { Card } from 'reactstrap';


const EventVideoCard = ({video}) => {
const { url } = video;

return (
      <Card width='100%'>
        <InstagramEmbed url={url} width='100%'/>
        </Card>
);

};

export default EventVideoCard;