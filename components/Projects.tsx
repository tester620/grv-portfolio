import { Button } from "./ui/button";

import { ImageWithFallback } from "./fallback/ImageWithFallback";
import { Badge } from "./ui/badge";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Ancestropedia- Build your family tree",
      category: "Web App",
      image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU3NDcxOTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["UI/UX Design", "App Design", "Product Design"]
    },
    {
      id: 2,
      title: "Classic Volt- OTT App for classic movies",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1657812159055-7bae416f386d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBsYW5kaW5nJTIwcGFnZXxlbnwxfHx8fDE3NTc0Njk1NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["UI/UX Design", "App Design", "Wireframe"]
    },
    {
      id: 3,
      title: "Leadsmart - Lead Management SAAS Web App",
      category: "SAAS Dashboard",
      image: "https://images.unsplash.com/photo-1555531469-561be9b3cb17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwbW9iaWxlJTIwYXBwfGVufDF8fHx8MTc1NzUwMTA3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["UI/UX Design", "Web Design", "Wireframe"]
    },
    {
      id: 4,
      title: "Ethnic Cart- An E-Commerce mobile app for Ethnic wear",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1555531469-561be9b3cb17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwbW9iaWxlJTIwYXBwfGVufDF8fHx8MTc1NzUwMTA3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["UI/UX Design", "App Design", "Wireframe"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-16">
          <div>
            <h2 className="text-3xl lg:text-4xl">
              My <span className="text-yellow-400">Latest Projects</span>
            </h2>
          </div>
          <Button className="bg-yellow-400 cursor-pointer hover:bg-yellow-500 text-black mt-4 sm:mt-0">
            View All Projects
            <span className="ml-2">→</span>
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}