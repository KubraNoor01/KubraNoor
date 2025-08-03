import { Brain, Code, Heart, Award, Users, Clock } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

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
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
          About Me
        </h2>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: <Code className="w-6 h-6" />, value: "3+", label: "Years Experience" },
            { icon: <Users className="w-6 h-6" />, value: "50+", label: "Projects Completed" },
            { icon: <Award className="w-6 h-6" />, value: "100%", label: "Client Satisfaction" },
            { icon: <Clock className="w-6 h-6" />, value: "24/7", label: "Availability" }
          ].map((stat, index) => (
            <div key={index} className="glass-effect p-4 rounded-lg text-center hover-lift" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="text-purple-400 mb-2 flex justify-center">{stat.icon}</div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* --- Enhanced Slider Starts Here --- */}
        <div className="mb-10 sm:mb-14 md:mb-16">
          <Swiper
            modules={[Autoplay, EffectFade]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            effect="fade"
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            className="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto rounded-xl shadow-lg overflow-hidden"
          >
            <SwiperSlide>
              <div className="relative bg-black rounded-xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=80"
                  alt="Why Me"
                  className="w-full h-[160px] xs:h-[200px] sm:h-[250px] md:h-[300px] object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-2 sm:px-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-4">Why Me?</h3>
                  <p className="text-white text-sm sm:text-base md:text-lg">
                    Because I don't just code websites — I craft experiences that make users go "whoa!" 🎨⚡
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative bg-black rounded-xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80"
                  alt="Creative Design"
                  className="w-full h-[160px] xs:h-[200px] sm:h-[250px] md:h-[300px] object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white text-sm sm:text-base md:text-lg font-medium px-2 sm:px-4 text-center">
                  Turning caffeine and chaos into clean, responsive, and aesthetic UI designs ☕💻✨
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative bg-black rounded-xl overflow-hidden group">
                <img
                  src="/assets/aboutpic.jpg"
                  alt="Code"
                  className="w-full h-[160px] xs:h-[200px] sm:h-[250px] md:h-[300px] object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white text-sm sm:text-base md:text-lg font-medium px-2 sm:px-4 text-center">
                  My code isn't messy. It's organized chaos that works like magic. 🔮✨
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* --- Enhanced Slider Ends Here --- */}

        <div className="max-w-4xl mx-auto">
          {/* --- Enhanced About Me Content --- */}
          <div className="animate-slide-in-right">
            <div className="glass-effect p-8 sm:p-10 rounded-2xl relative overflow-hidden">
              {/* Animated Background Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              <div className="relative z-10">

                
                {/* Simple About Me Content */}
                <div className="space-y-6">
                  <div className="text-center">
                    <p className="text-lg sm:text-xl text-white font-medium leading-relaxed">
                      I'm a passionate Software Engineering graduate from the University of Central Punjab, 
                      specializing in creating innovative web solutions and AI-powered applications.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-base text-gray-300 leading-relaxed">
                      My expertise spans from frontend development with React.js and modern CSS frameworks 
                      to backend development with Java, C++, and various databases. I'm particularly proud 
                      of my Final Year Project - Vistelligence, an AI-powered visa recommendation system.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-base text-gray-300 leading-relaxed">
                      Beyond coding, I bring strong analytical skills, excellent communication abilities, 
                      and a collaborative approach to every project. I believe in writing clean, maintainable 
                      code and creating user experiences that make a difference.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;