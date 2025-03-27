import Footer from "@/components/home/footer";
import Homepage from "@/components/home/home";
import Navbar from "@/components/home/navbar";

const Home = () => {
  return (
    <div>
      <main className=" min-h-screen">
        {/* <Navbar isHome /> */}
        <Homepage />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
  