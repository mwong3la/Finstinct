export default function ProductShowcase() {
  const features = [
    {
      icon: "📍",
      title: "Real-Time GPS",
      description: "Track your pet's location anywhere with precision GPS tracking and geofencing alerts.",
    },
    {
      icon: "❤️",
      title: "Health Monitoring",
      description: "Monitor heart rate, activity levels, sleep patterns, and calories burned daily.",
    },
    {
      icon: "🔔",
      title: "Smart Alerts",
      description: "Get instant notifications when your pet leaves safe zones or shows unusual behavior.",
    },
    {
      icon: "🌙",
      title: "Sleep Tracking",
      description: "Understand your pet's sleep quality and rest patterns with advanced analytics.",
    },
    {
      icon: "💧",
      title: "Water Resistant",
      description: "5ATM water resistance rating. Perfect for swimming, rain, or bath time.",
    },
    {
      icon: "🔋",
      title: "Long Battery",
      description: "Up to 30 days of battery life on a single charge with fast charging support.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-6 leading-tight">
            Everything you need.<br />Nothing you don't.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Packed with advanced features designed to keep your pet healthy, safe, and happy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-black mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
