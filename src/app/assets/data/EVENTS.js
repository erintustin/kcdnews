
import jasmine4tflyer from '../images/events/jasmine4t/jasmine4tflyer1.jpg';
import kindaalrightfarewellflyer from '../images/events/kindaalright/philamoca09062025flyer.jpg';
import kindaalrightfarewellphoto1 from '../images/events/kindaalright/kcdphilamocapokemon.jpg';
import kindaalrightfarewellphoto2 from '../images/events/kindaalright/squirtlesquad.jpg';

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

];