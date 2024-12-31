import GNB from './components/GNB';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <GNB />
      <main className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold">Welcome to the Site</h1>
        </div>
      </main>
      <Footer />
    </>
  );
}
