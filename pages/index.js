import Layout from "../components/shared/Layout";
import Navigation from "../components/shared/Navigation";
import Gallery from "../components/room/Gallery";
import Summary from "../components/room/Summary";
import Highlights from "../components/room/Highlights";

const Index = () => (
  <Layout>
    <Navigation />
    <Gallery />
    <Summary />
    <Highlights />
  </Layout>
);

export default Index;
