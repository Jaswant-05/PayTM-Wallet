import Navbar from "../components/Navbar";

export default function Hero() {
  return (
    <>
      <Navbar />
      <section className="h-screen bg-gray-100 text-gray-900 flex flex-col justify-center items-center p-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">PayTM - Your Money, Your Way</h1>
          <p className="text-xl mb-8 max-w-md mx-auto">
            Easily send, receive, and exchange money with PayTM, designed for secure and seamless transactions.
          </p>
          <button className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition">
            Get Started
          </button>
        </div>
      </section>
    </>
  );
}
