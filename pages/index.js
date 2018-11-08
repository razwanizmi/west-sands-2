import Layout from "../components/shared/Layout";
import Navigation from "../components/shared/Navigation";
import Gallery from "../components/room/Gallery";
import Summary from "../components/room/Summary";

const Index = () => (
  <Layout>
    <Navigation />
    <Gallery />
    <Summary />
  </Layout>
);

export default Index;
