import Image from "next/image";

interface FeatureSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  reverse?: boolean;
}

export default function FeatureSection({
  title,
  description,
  imageUrl,
  imageAlt,
  reverse = false,
}: FeatureSectionProps) {
  return (
    <section className="py-24 lg:py-32 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`flex flex-col ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          } items-center gap-12 lg:gap-20`}
        >
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight">
              {title}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              {description}
            </p>
          </div>

          <div className="flex-1 relative w-full">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
