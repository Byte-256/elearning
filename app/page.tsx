import Footer from "@/components/home/footer";
import Homepage from "@/components/home/home";
import Navbar from "@/components/home/navbar";

const Home = () => {
  return (
    <div>
      <main className="bg-gray-100 min-h-screen">
        <Navbar />
        <Homepage />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
