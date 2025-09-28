import { InstagramEmbed } from 'react-social-media-embed';

const StoryCard = ({story}) => {
const { url } = story;

return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <InstagramEmbed className='insta-embed' url={url} width='100%'/>
      </div>
  );
};

export default StoryCard;