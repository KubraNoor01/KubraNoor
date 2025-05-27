import { Brain, Code, Heart } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const images = [
  '/assets/1.png',
  '/assets/2.png',
  '/assets/3.png',
  '/assets/4.png',
  '/assets/5.png',
  '/assets/6.png',
  '/assets/7.png',
];

const About = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 relative" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
          About Me
        </h2>

        {/* --- Slider Starts Here --- */}
        <div className="mb-10 sm:mb-14 md:mb-16">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            className="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto rounded-xl shadow-lg"
          >
            <SwiperSlide>
              <div className="relative bg-black rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=80"
                  alt="Why Me"
                  className="w-full h-[160px] xs:h-[200px] sm:h-[250px] md:h-[300px] object-cover opacity-50"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-2 sm:px-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-4">Why Me?</h3>
                  <p className="text-white text-sm sm:text-base md:text-lg">
                    Because I don’t just code websites — I craft experiences that make users go “whoa!” 🎨⚡
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative bg-black rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80"
                  alt="Creative Design"
                  className="w-full h-[160px] xs:h-[200px] sm:h-[250px] md:h-[300px] object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white text-sm sm:text-base md:text-lg font-medium px-2 sm:px-4 text-center">
                  Turning caffeine and chaos into clean, responsive, and aesthetic UI designs ☕💻✨
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative bg-black rounded-xl overflow-hidden">
                <img
                  src="/assets/aboutpic.jpg"
                  alt="Code"
                  className="w-full h-[160px] xs:h-[200px] sm:h-[250px] md:h-[300px] object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white text-sm sm:text-base md:text-lg font-medium px-2 sm:px-4 text-center">
                  My code isn't messy. It’s organized chaos that works like magic. 🔮✨
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* --- Slider Ends Here --- */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* --- Skills Section --- */}
          <div className="space-y-4 sm:space-y-6">
            {[
              {
                icon: <Code className="w-6 h-6 text-purple-500" />,
                title: "Frontend Development",
                description: "Skilled in building responsive and interactive user interfaces using modern web technologies",
              },
              {
                icon: <Brain className="w-6 h-6 text-blue-500" />,
                title: "Software Testing",
                description: "Familiar with various testing methods to ensure software quality and reliability",
              },
              {
                icon: <Brain className="w-6 h-6 text-blue-500" />,
                title: "Version Control (Git/GitHub)",
                description: "Proficient in using Git for code management, collaboration, and version tracking",
              },
              {
                icon: <Heart className="w-6 h-6 text-pink-500" />,
                title: "Problem Solver",
                description: "Turning complex challenges into elegant solutions",
              },
              {
                icon: <Heart className="w-6 h-6 text-pink-500" />,
                title: "Presentation & Communication",
                description: "Strong ability to convey ideas clearly through presentations and team collaboration.",
              },
              {
                icon: <Heart className="w-6 h-6 text-pink-500" />,
                title: "Content Writing",
                description: "Proficient in crafting structured, engaging content with a background in editorial work",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all"
              >
                {item.icon}
                <div>
                  <h3 className="font-semibold text-white text-base sm:text-lg">{item.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* --- Video & Final Year Output Slider --- */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* Video */}
            <div className="relative rounded-lg shadow-2xl overflow-hidden w-full group">
              <div className="overflow-hidden">
                <video
                  src="/assets/VistelligenceModel.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto max-h-[220px] sm:max-h-[260px] md:max-h-[320px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2 sm:p-4">
                <p className="text-white text-xs sm:text-sm md:text-base text-center">
                  🎯 This video showcases the AI-generated visa recommendation output from <span className="font-semibold">Vistelligence</span> – your smart travel assistant for personalized visa advice, success prediction, and interview prep. For detailed review, check the project section.
                </p>
              </div>
            </div>

            {/* Slider for FYP Images */}
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-white mb-2 sm:mb-4">
                Output of Final Year Project: Vistelligence
              </h3>
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop={true}
                spaceBetween={10}
                slidesPerView={1}
                className="rounded-xl shadow-xl"
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt={`Vistelligence Output ${index + 1}`}
                      className="w-full h-[160px] xs:h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-xl"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;