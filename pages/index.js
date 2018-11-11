import Layout from "../components/shared/Layout";
import Navigation from "../components/shared/Navigation";
import Gallery from "../components/room/Gallery";
import Summary from "../components/room/Summary";
import Highlights from "../components/room/Highlights";
import Reviews from "../components/room/Reviews";
import Amenities from "../components/room/Amenities";
import Offer from "../components/room/Offer";
import StickyNav from "../components/room/StickyNav";
import MoreRooms from "../components/room/MoreRooms";
import Footer from "../components/shared/Footer";

const Index = () => (
  <Layout>
    <Navigation />
    <Gallery />
    <StickyNav />
    <Summary />
    <Highlights />
    <Reviews />
    <Amenities />
    <Offer />
    <MoreRooms />
    <Footer />
  </Layout>
);

export default Index;
