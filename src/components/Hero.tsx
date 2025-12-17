import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-black mb-6 leading-none">
            PetConnect Pro
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            The future of pet care. Advanced health monitoring, GPS tracking, and AI-powered insights in a beautiful, lightweight design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-black text-white px-8 py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-all hover:scale-105">
              Pre-order Now
            </button>
            <button className="border-2 border-black text-black px-8 py-4 rounded-full text-base font-medium hover:bg-black hover:text-white transition-all hover:scale-105">
              Learn More
            </button>
          </div>
          <p className="text-sm text-gray-500">
            Starting at $199 • Available Q2 2024
          </p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto">
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="PetConnect Pro Device"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl px-8 py-4 flex items-center gap-6">
            <div className="text-center border-r border-gray-200 pr-6">
              <p className="text-2xl font-bold text-black">30 days</p>
              <p className="text-sm text-gray-600">Battery Life</p>
            </div>
            <div className="text-center border-r border-gray-200 pr-6">
              <p className="text-2xl font-bold text-black">5ATM</p>
              <p className="text-sm text-gray-600">Waterproof</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-black">25g</p>
              <p className="text-sm text-gray-600">Lightweight</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
