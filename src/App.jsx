import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TopupForm from './components/TopupForm';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <TopupForm />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}

export default App;
