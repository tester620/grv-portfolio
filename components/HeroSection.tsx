"use client"
import { Play, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./fallback/ImageWithFallback";

export default function HeroSection() {
  return (
    <section id="home" className="pt-24 pb-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center bg-gray-100 rounded-full px-4 py-2 mb-6">
              <span className="text-sm text-gray-600">
                <span
                  className="inline-block"
                  style={{
                    display: "inline-block",
                    transformOrigin: "70% 70%",
                    animation: "wave 1.5s infinite",
                  }}
                >
                  👋
                </span>{" "}
                Hello There!
              </span>
              <style jsx>{`
                @keyframes wave {
                  0% {
                    transform: rotate(0deg);
                  }
                  10% {
                    transform: rotate(14deg);
                  }
                  20% {
                    transform: rotate(-8deg);
                  }
                  30% {
                    transform: rotate(14deg);
                  }
                  40% {
                    transform: rotate(-4deg);
                  }
                  50% {
                    transform: rotate(10deg);
                  }
                  60% {
                    transform: rotate(0deg);
                  }
                  100% {
                    transform: rotate(0deg);
                  }
                }
              `}</style>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl mb-6">
              I&apos;m <span className="text-yellow-400">Gaurav Singh Kushwaha</span>
              ,<br />
              Product Designer
              <br />
              Based in India.
            </h1>

            <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto lg:mx-0">
              I’m a motivated designer with a strong foundation in user-centered
              design. Over the past 6 months, I’ve gained hands-on experience
              across the full design process.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#projects">
                <Button className="bg-yellow-400 cursor-pointer hover:bg-yellow-500 text-black px-8 py-3">
                  View My Work
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </a>
              <Button
                variant="outline"
                className="px-8 py-3 cursor-pointer border-gray-300"
              >
                <Play size={18} className="mr-2" />
                Hire Me
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex-1 relative">
            <div className="relative">
              {/* Main Image */}
              <div className="relative w-[400px] h-[400px] mx-auto">
                <ImageWithFallback
                  src="https://ik.imagekit.io/ancestor/myImage_244dAq3cs.jpg?w=484&q=100"
                  alt="Gaurav Singh"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute top-8 right-8 bg-white rounded-full p-4 shadow-lg">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-sm">6+</span>
                </div>
                <div className="text-center mt-2">
                  <div className="text-xs font-semibold text-gray-900">
                    Months
                  </div>
                  <div className="text-xs text-gray-600">Experience</div>
                </div>
              </div>

              {/* UI/UX Designer Badge */}
              <div className="absolute bottom-8 left-0 bg-white rounded-full px-4 py-2 shadow-lg">
                <span className="text-sm font-semibold text-gray-900">
                  UI/UX Designer
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 flex flex-wrap justify-center lg:justify-between items-center gap-8 text-center lg:text-left">
          <div className="flex flex-wrap gap-8 justify-space between">
            <div className="bg-yellow-50 px-4 py-2 rounded-lg">
              <span className="text-sm font-medium">App Design</span>
            </div>
            <div className="bg-yellow-50 px-4 py-2 rounded-lg">
              <span className="text-sm font-medium">Website Design</span>
            </div>
            <div className="bg-yellow-50 px-4 py-2 rounded-lg">
              <span className="text-sm font-medium">SAAS Dashboard</span>
            </div>
            <div className="bg-yellow-50 px-4 py-2 rounded-lg">
              <span className="text-sm font-medium">Wireframing</span>
            </div>
            <div className="bg-yellow-50 px-4 py-2 rounded-lg">
              <span className="text-sm font-medium">Prototype</span>
            </div>
            <div className="bg-yellow-50 px-4 py-2 rounded-lg">
              <span className="text-sm font-medium">UX Research</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
