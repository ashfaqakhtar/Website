import "./DestinationStyles.css";
import ladakh1 from "../assests/ladakh.jpg";
import ladakh2 from "../assests/ladakh2.jpg";
import Travel4 from "../assests/travel4.jpg"
import viator from "../assests/viator.jpg"
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours Guives us oppoutunity to explore the world</p>

      <DestinationData
    hName="first-des"
       heading="Bike Trip to Ladakh"
      text="Ladakh gains a lot of popularity for being the only cold desert in India apart from bordering the World’s highest saltwater Lake Pangong Lake. Riding up the highest motorable road in the world, Khardung la is a dream come true for many. The Hunder sand dunes, frozen river trek and snow leopards all find their only home in Ladakh."
      
      img1={ladakh1}
      img2={ladakh2}
      />

<DestinationData
className="first-des-reverse"
hName="first-des-reverse"
       heading="Cappadocia – The Land Of Hot-Air Balloons"
      text="This marvelous city is known for its unique rock formations that have caves with ancient Islamic inscriptions. Mixed with the exotic culture and fascinating history of Turkey, this place is perfect for a romantic honeymoon, a trip with family, or even a solo backpacking adventure, making it one of the best places to visit in May outside India. The balloon studded skies of Cappadocia aren’t the only thing that attracts people here. You’ll be equally blown away by its labyrinthine underground cities, caves, and ravines that will make you want to stay here forever. "
      
      img1={Travel4 }
      img2={viator}
      />
    </div>
  );
};

export default Destination;
