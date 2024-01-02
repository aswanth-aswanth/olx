import TopNav from "../components/TopNav";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import List from "../components/List.jsx";
import Banner from "../components/Banner.jsx";

function Home() {
  return (
    <>
      <TopNav />
      <Nav />
      <Banner/>
      <List />
      <Footer />
    </>
  );
}

export default Home;
