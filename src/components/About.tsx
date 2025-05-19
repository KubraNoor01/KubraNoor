import { Brain, Code, Heart } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import aboutPic from '../assets/aboutpic.jpg';
import modelVideo from '../assets/VistelligenceModel.mp4';

import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';

const images = [img1, img2, img3, img4, img5, img6, img7];

const About = () => {
  return (
    <section className="py-20 relative" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
          About Me
        </h2>

        {/* --- Slider Starts Here --- */}
        <div className="mb-16">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            className="w-full max-w-4xl mx-auto rounded-xl shadow-lg"
          >
            <SwiperSlide>
              <div className="relative bg-black rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=80"
                  alt="Why Me"
                  className="w-full h-[300px] object-cover opacity-50"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                  <h3 className="text-3xl font-bold text-white mb-4">Why Me?</h3>
                  <p className="text-white text-lg">
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
                  className="w-full h-[300px] object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-medium px-8 text-center">
                  Turning caffeine and chaos into clean, responsive, and aesthetic UI designs ☕💻✨
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative bg-black rounded-xl overflow-hidden">
                <img
                  src={aboutPic}
                  alt="Code"
                  className="w-full h-[300px] object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-medium px-8 text-center">
                  My code isn't messy. It’s organized chaos that works like magic. 🔮✨
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* --- Slider Ends Here --- */}

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
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
                  className="flex items-start space-x-4 p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all"
                >
                  {item.icon}
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video + Final Year Output Slider Section */}
          <div className="flex flex-col gap-8">
            {/* --- Model Video --- */}
            <div className="relative rounded-lg shadow-2xl overflow-hidden w-full group">
              <div className="overflow-hidden">
                <video
                  src={modelVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <p className="text-white text-center text-lg">
                  🎯 This video showcases the AI-generated visa recommendation output from{" "}
                  <span className="font-semibold">Vistelligence</span> – your smart travel assistant for personalized visa advice, success prediction, and interview prep. For detailed review, check the project section.
                </p>
              </div>
            </div>

            {/* --- Final Year Project Image Slider --- */}
            <div>
              <h3 className="text-2xl font-bold text-center text-white mb-4">
                Output of Final Year Project: Vistelligence
              </h3>
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop={true}
                spaceBetween={20}
                slidesPerView={1}
                className="rounded-xl shadow-xl"
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt={`Vistelligence Output ${index + 1}`}
                      className="w-full h-[300px] object-cover rounded-xl"
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
