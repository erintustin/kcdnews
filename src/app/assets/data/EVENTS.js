
import jasmine4tflyer from '../images/events/flyers/jasmine4tflyer1.jpg';
import kindaalrightfarewellflyer from '../images/events/flyers/philamoca09062025flyer.jpg';
import kindaalrightfarewellphoto1 from '../images/events/kindaalright/kcdphilamocapokemon.jpg';
import kindaalrightfarewellphoto2 from '../images/events/kindaalright/squirtlesquad.jpg';
import hoagieconflyer from '../images/events/flyers/hoagieconflyer.jpg';
import tralfamadore07202025flyer from '../images/events/flyers/tralf07202025flyer.jpg';
import wppf2025flyer from '../images/events/flyers/wppf2025flyer.jpg';
import Abyssinia05252025flyer from '../images/events/flyers/abyssinia05252025flyer.jpg';
import war3houseflyer from '../images/events/flyers/warehouse3flyer.jpg';
import hhhflyer from '../images/events/flyers/hhhflyer.jpg';
import kohshowflyer from '../images/events/flyers/kohshow.jpg';
import centuryflyer from '../images/events/flyers/century.jpg';

export const EVENTS = [
{
    name: 'SUPPORTING JASMINE.4.T',
    location:'The Lounge at World Cafe Live, Philadelphia, PA',
    date:'September 30, 2025',
    flyer:jasmine4tflyer,
    photos:[],
    type:'upcoming',         
    description: 'Supporting Jasmine.4.T on the Philly stop of her world tour!',
    link: ''
},
{
    name: 'KINDA ALRIGHT FAREWELL SHOW',
    location:'PhilaMOCA, Philadelphia, PA',
    date:'September 6, 2025',
    flyer:kindaalrightfarewellflyer,
    photos:[
        {
          "src": kindaalrightfarewellphoto2, 
          "alt": "Kurt Cobain's Dad on stage at PhilaMOCA with an episode of Pokemon projected behind them", 
          "credit": "Photo by Dallas Scott",
          "id": 1
        },
        {
          "src": kindaalrightfarewellphoto1, 
          "alt": "Kurt Cobain's Dad on stage at PhilaMOCA with an episode of Pokemon projected behind them", 
          "credit": "Photo by Dallas Scott",
          "id": 2
        }
    ],
    type:'past',         
    description: 'Joining FutureBeer and the Night Owls and Good Game along with Kinda Alright for their farewell show.'
},
{
    name: 'BABY KITTENZ JAM AT HOAGIECON FURRYDELPHIA',
    location:'Sheraton Downtown, Philadelphia, PA',
    date:'August 23, 2025',
    flyer:hoagieconflyer,
    photos:[
       
    ],
    type:'past',         
    description: 'An all ages jam panel hosted at Furrydelphia 2025'
},
{
    name: 'Tralfamadore 07/20/2025',
    location:'Tralfamadore, Philadelphia, PA',
    date:'July 20, 2025',
    flyer: tralfamadore07202025flyer,
    photos:[
      
    ],
    type:'past',         
    description: 'South Philly basement show with our friends Cutie Riot and Flavorless Gum',
},
{
    name: 'WEST PHILLY PORCHFEST 2025',
    location:'Philadelphia, PA',
    date:'May 31, 2025',
    flyer:wppf2025flyer,
    photos:[
      
    ],
    type:'past',         
    description: 'An all day outdoor event featuring local bands, drag performances, and food for the community'
},
{
    name: 'SUPPORTING LINNEAS GARDEN',
    location:'Upstairs at Abyssinia, Philadelphia, PA',
    date:'May 25, 2025',
    flyer: Abyssinia05252025flyer,
    photos:[
      
    ],
    type:'past',         
    description: "Supporting Linnea's Garden on the Philly stop of their spring tour"
},
{
    name: 'WAR3HOUSE MAY 2025',
    location:'WAR3HOUSE, Swarthmore, PA',
    date:'May 16, 2025',
    flyer:war3houseflyer,
    photos:[
     
    ],
    type:'past',         
    description: 'Up the alley with some metal dudes'
},
{
    name: 'HHH MONTHLY FUND',
    location:'Homies Helping Homies HQ, Philadelphia, PA',
    date:'March 14, 2025',
    flyer:hhhflyer,
    photos:[
    ],
    type:'past',         
    description: 'Monthly Fund fundraiser for Homies Helping Homies, a Philly-based mutual aid collective'
},
{
    name: 'KOH SHOW LIVE',
    location:'Koh Show Live, Wilmington, DE',
    date:'March 10, 2025',
    flyer:kohshowflyer,
    photos:[
    ],
    type:'past',         
    description: 'Streaming Live from a basement in Wilmington, DE'
},
{
    name: 'CENTURY BAR SHOW',
    location:'Century, Philadelphia, PA',
    date:'February 23, 2025',
    flyer:centuryflyer,
    photos:[
    ],
    type:'past',         
    description: 'Dive bar show with our friends Bagel'
},
];