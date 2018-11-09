import Layout from "../components/shared/Layout";
import Navigation from "../components/shared/Navigation";
import Gallery from "../components/room/Gallery";
import Summary from "../components/room/Summary";
import Highlights from "../components/room/Highlights";
import Reviews from "../components/room/Reviews";

const Index = () => (
  <Layout>
    <Navigation />
    <Gallery />
    <Summary />
    <Highlights />
    <Reviews />
  </Layout>
);

export default Index;
