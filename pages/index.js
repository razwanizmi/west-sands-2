import Layout from "../components/shared/Layout";
import Navigation from "../components/shared/Navigation";
import Gallery from "../components/room/Gallery";
import Summary from "../components/room/Summary";
import Highlights from "../components/room/Highlights";
import Reviews from "../components/room/Reviews";
import Amenities from "../components/room/Amenities";

const Index = () => (
  <Layout>
    <Navigation />
    <Gallery />
    <Summary />
    <Highlights />
    <Reviews />
    <Amenities />
  </Layout>
);

export default Index;
