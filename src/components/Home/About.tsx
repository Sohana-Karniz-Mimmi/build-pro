import { Building, Users, Settings } from "lucide-react";
import Image from "next/image";

export default function About() {
  const features = [
    {
      icon: <Building className="h-6 w-6 text-white" />,
      title: "Construction",
      subtitle: "build homes",
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Awesome Stuff",
      subtitle: "1200+ workers",
    },
    {
      icon: <Settings className="h-6 w-6 text-white" />,
      title: "Good Planning",
      subtitle: "architecture",
    },
  ];

  return (
    <section className="relative padding">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/home/about/jumbotron-1.jpg"
          alt="construction-professional-with-yellow-hard-hat"
          fill
        />
      </div>

      {/* Content Overlay */}
      <div className="relative main_container mx-auto px-4">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            About Us And Our Priorities
          </h2>
          <p className="text-[14px] w-full max-w-[750px] mb-8 text-[#333333]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
            {/* Left Column */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={`left-${index}`}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-dark hover:bg-primary transition duration-200">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-[14px]">{feature.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={`right-${index}`}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-dark hover:bg-primary transition duration-200">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-[14px]">{feature.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
