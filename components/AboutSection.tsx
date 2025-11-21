import { ImageWithFallback } from "./fallback/ImageWithFallback";
import { Button } from "./ui/button";

export default function AboutSection() {
  const stats = [
    { number: "5+", label: "Projects Completed" },
    { number: "10+", label: "Happy Customers" },
    { number: "6+", label: "Months of Experience" },
  ];

  const experience = [
    {
      type: "Education",
      items: [
        {
          period: "03/2025 - 09/2025",
          title: "PW Skills",
          subtitle: "UI/UX Design Bootcamp",
        },

        {
          period: "08/2024 - 03/2025",
          title: "Udemy",
          subtitle: "UI/UX Design, Web & Mobile Apps",
        },
        {
          period: "2019 - 2023",
          title: "Dr. Ambedkar Institute of Technology, Kanpur",
          subtitle: "B.Tech (Biotechnology)",
        },
      ],
    },
    {
      type: "Work Experience",
      items: [
        {
          period: "03/2025 - Present",
          title: "Ancestropedia Pvt. Ltd.",
          subtitle: "UI/UX Designer",
        },
        // {
        //   period: "02/2025 - 05/2025",
        //   title: "Pent IT Solutions",
        //   subtitle: "UI/UX Design Intern",
        // },
        {
          period: "06/2024 - 12/2024",
          title: "Cogito Tech",
          subtitle: "Data Annotation Specialist",
        },
        {
          period: "01/2024 - 04/2024",
          title: "Tele Perfomance",
          subtitle: "Senior Customer Support Associate",
        },
      ],
    },
  ];

  return (
    <section id="about" className="py-20">
      {/* About Me Section */}
      <div className="bg-slate-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left - Image */}
            <div className="flex-1">
              <div className="relative w-96 h-96 mx-auto">
                <div className="absolute inset-0 bg-yellow-400 rounded-full"></div>
                <div className="absolute inset-4 rounded-full overflow-hidden bg-gray-500">
                  <ImageWithFallback
                    src="/ProfilePicture.png"
                    alt="Gaurav Singh Kushwaha"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 bg-white text-black rounded-full px-3 py-1 text-sm font-medium">
                  UI/UX Designer
                </div>
                <div className="absolute bottom-4 left-4 bg-white text-black rounded-full px-3 py-1 text-sm font-medium">
                  Gaurav Singh Kushwaha
                </div>
                <div className="absolute top-1/2 right-0 bg-yellow-400 text-black rounded-full px-3 py-1 text-sm font-medium">
                  Creative Design
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-block bg-gray-700 rounded-full px-4 py-2 mb-4">
                <span className="text-sm text-gray-300">— About Me</span>
              </div>
              <h2 className="text-3xl lg:text-4xl mb-6">
                Who is{" "}
                <span className="text-yellow-400">Gaurav Singh Kushwaha?</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-md mx-auto lg:mx-0">
                I’m a UI/UX Designer with a background in Biotechnology and
                front-end basics. I specialize in crafting intuitive, engaging
                interfaces that balance user needs with business goals.
                Passionate about UX research and design principles, I turn
                insights into seamless digital experiences.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <a href="./UI_UX_GauravResume.pdf" target="_blank">
                <Button className="bg-yellow-400 cursor-pointer hover:bg-yellow-500 text-black px-8 py-3">
                  Download CV
                  <span className="ml-2">→</span>
                </Button>
              </a>

              {/* Signature */}
              <div className="mt-8">
                <div className="text-yellow-400 text-2xl font-script italic">
                  Gaurav Singh Kushwaha
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education & Experience Section */}
      <div className="bg-white py-20 " id="education">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-gray-100 rounded-full px-4 py-2 mb-4">
              <span className="text-sm text-gray-600">— Education & Work</span>
            </div>
            <h2 className="text-3xl lg:text-4xl">
              My <span className="text-yellow-400">Academic and</span>
              <br />
              <span className="text-yellow-400">Professional</span> Journey
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {experience.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <div className="flex items-center mb-8">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                    <span className="text-black text-sm">📚</span>
                  </div>
                  <h3 className="text-xl font-semibold">{section.type}</h3>
                </div>

                <div className="space-y-6">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-gray-50 rounded-lg p-6">
                      <div className="text-sm text-gray-500 mb-2">
                        {item.period}
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{item.subtitle}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
