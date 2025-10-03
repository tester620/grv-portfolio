import { Smartphone, Monitor, BarChart3 } from "lucide-react";
import { Button } from "./ui/button";

export default function ServicesSection() {
  const services = [
    {
      icon: <Smartphone className="h-8 w-8 text-yellow-500" />,
      title: "Mobile Design",
      description:
        "Creating responsive and engaging mobile interfaces that ensure smooth interactions and optimized user experiences on handheld devices.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-yellow-500" />,
      title: "SaaS Application Design",
      description:
        "Designing scalable and intuitive SaaS interfaces that enhance user productivity and simplify complex workflows.",
    },
    {
      icon: <Monitor className="h-8 w-8 text-yellow-500" />,
      title: "Website Design",
      description:
        "Building responsive websites with clear structure, appealing visuals, and optimized performance across all devices.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-white rounded-full px-4 py-2 mb-4">
            <span className="text-sm text-gray-600">— Services</span>
          </div>
          <h2 className="text-3xl lg:text-4xl mb-4">
            <span className="text-yellow-400">Services</span> I Provide
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center  duration-300  hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-50 rounded-2xl flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Button
                variant="link"
                className="text-yellow-500 cursor-pointer p-0"
              >
                Learn More →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
