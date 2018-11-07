import Layout from "../components/shared/Layout";
import Navigation from "../components/shared/Navigation";
import Gallery from "../components/room/Gallery";

const Index = () => (
  <Layout>
    <Navigation />
    <Gallery />
    <div>
      <h1 className="header-1">Header 1</h1>
      <h2 className="header-2">Header 2</h2>
      <h3 className="header-3">Header 3</h3>
      <h4 className="header-4">Header 4</h4>
      <div>Normal text</div>
      <h5 className="header-5">Header 5</h5>
      <h6 className="header-6">Header 6</h6>
    </div>
  </Layout>
);

export default Index;
