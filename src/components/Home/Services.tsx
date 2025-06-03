import Image from "next/image";
import { Subtitle } from "../ui/Subtitle";
import { Title } from "../ui/Title";
import { Description } from "../ui/Description";

export default function Services() {
  const services = [
    {
      title: "Construction",
      description:
        "Lorem ipsum dolor sit amet, cons ectetur elit. Vestibulum nec odios Suspe ndisse cursus mal suada faci. Lorem ipsum dolor.",
      image: "/images/home/services/service-1.jpg",
    },
    {
      title: "Architectural",
      description:
        "Lorem ipsum dolor sit amet, cons ectetur elit. Vestibulum nec odios Suspe ndisse cursus mal suada faci. Lorem ipsum dolor.",
      image: "/images/home/services/service-2.jpg",
    },
    {
      title: "Renovation",
      description:
        "Lorem ipsum dolor sit amet, cons ectetur elit. Vestibulum nec odios Suspe ndisse cursus mal suada faci. Lorem ipsum dolor.",
      image: "/images/home/services/service-3.jpg",
    },
  ];

  return (
    <section className="padding">
      <div className="main_container">
        <div className="text-center mb-[48px] md:mb-[64px]">
          <Subtitle>OUR SERVICES</Subtitle>
          <Title>We Build Everything</Title>
          <Description>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for lorem ipsum
            will uncover many web sites.
          </Description>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-[32px] gap-[20px]">
          {services.map((service, index) => (
            <div key={index} className="border border-gray-200 overflow-hidden">
              <div className="relative w-full lg:h-[182px] aspect-[360/182]">
                <Image
                  src={service.image || "/images/avatar.png"}
                  alt={service.title}
                  fill
                />
              </div>
              <div className="lg:py-[25px] lg:px-[20px] py-[20px] px-[16px]">
                <h3 className="text-[18px] lg:text-[20px] font-semibold mb-[5px] hover:text-primary transition duration-300 tracking-[2px]">
                  {service.title}
                </h3>
                <p className="text-[12px] lg:text-[14px]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
