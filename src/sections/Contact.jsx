import React, { useState } from "react";
import TitleHeader from "../components/TitleHeader";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { ModelRoom } from "../components/HeroModels/ModelRoom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your form submission logic
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="section-padding py-20 md:py-32 w-full min-h-screen flex items-center">
      <div className="w-full max-w-7xl mx-auto">
        {/* Title Header */}
        <div className="mb-16 md:mb-24">
          <TitleHeader title="Get In Touch" sub="CONTACT" />
        </div>

        {/* Two Column Layout */}
        <div className="mt-16 grid-12-cols">
          {/* Left Column - Contact Form */}
          <div className="xl:col-span-5 flex flex-col justify-start">

           <div className="flex-center card-border rounded-xl p-10">
               
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-7">
              {/* Name Input */}
              <div className="form-group">
                <label htmlFor="name" className="block text-white-50 mb-3 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 md:py-4 md:text-base text-sm placeholder:text-blue-50 bg-blue-100 rounded-lg border border-transparent focus:border-white-50 focus:outline-none transition-all duration-300 hover:bg-opacity-80"
                />
              </div>

              {/* Email Input */}
              <div className="form-group">
                <label htmlFor="email" className="block text-white-50 mb-3 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-3 md:py-4 md:text-base text-sm placeholder:text-blue-50 bg-blue-100 rounded-lg border border-transparent focus:border-white-50 focus:outline-none transition-all duration-300 hover:bg-opacity-80"
                />
              </div>

              {/* Subject Input */}
              <div className="form-group">
                <label htmlFor="subject" className="block text-white-50 mb-3 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  className="w-full px-4 py-3 md:py-4 md:text-base text-sm placeholder:text-blue-50 bg-blue-100 rounded-lg border border-transparent focus:border-white-50 focus:outline-none transition-all duration-300 hover:bg-opacity-80"
                />
              </div>

              {/* Message Textarea */}
              <div className="form-group">
                <label htmlFor="message" className="block text-white-50 mb-3 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows="5"
                  required
                  className="w-full px-4 py-3 md:py-4 md:text-base text-sm placeholder:text-blue-50 bg-blue-100 rounded-lg border border-transparent focus:border-white-50 focus:outline-none transition-all duration-300 hover:bg-opacity-80 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
              >
               <div className="cta-button group">
                 <div className="bg-circle" />
                 <p className="text">Send Message</p>
                 <div className="arrow-wrapper">
                  <img src="/images/arrow-down.svg" alt="arrow" />
                 </div>
               </div>
              </button>

              {/* Success Message */}
              {isSubmitted && (
                <div className="p-4 bg-green-900 bg-opacity-30 border border-green-500 rounded-lg text-green-400 text-center animate-pulse">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
           </div>

          </div>

          {/* Right Column - 3D Model */}
          <div className="xl:col-span-7 min-h-96">
            <Suspense
              fallback={
                <div className="w-full h-full flex-center">
                  <div className="text-white-50 text-center">
                    <p>Loading 3D Model...</p>
                  </div>
                </div>
              }
            >
              <Canvas
                camera={{ position: [0, 2, 8], fov: 50 }}
                className="w-full h-full"
              >
                <PerspectiveCamera makeDefault position={[0, 2, 8]} fov={50} />
                <ambientLight intensity={0.8} />
                <directionalLight position={[10, 10, 10]} intensity={1.2} />
                <directionalLight position={[-10, -10, -10]} intensity={0.4} />
                <OrbitControls
                  enableZoom={false}
                  enablePan={true}
                  minPolarAngle={Math.PI / 4}
                  maxPolarAngle={(3 * Math.PI) / 4}
                />
                <ModelRoom />
              </Canvas>
            </Suspense>
          </div>
        </div>

        {/* Mobile Responsive Note */}
        <div className="mt-16 md:mt-24 p-6 bg-black-100 border border-black-50 rounded-lg">
          <p className="text-white-50 text-center md:text-left">
            <span className="font-semibold text-white">💡 Tip:</span> Fill out the
            form on the left and I'll get back to you as soon as possible. On mobile
            devices, scroll down to see the 3D model!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
