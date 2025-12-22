import React, { useRef, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { FaPaperPlane, FaEnvelope, FaWhatsapp, FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { LiaConnectdevelop } from "react-icons/lia";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";
import { motion } from "motion/react";
import { containerVariant, slideFromLeft, slideFromRight } from "../constants/animations/variants";


const AnimatedNoiseGradient = () => {
  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden">
      {/* Gradient layer (below) */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-purple2 via-gold2 to-purple2 bg-[length:200%_200%] animate-gradient-x"
        style={{ zIndex: 0 }}
      />

      {/* SVG noise overlay (on top) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          zIndex: 10,
          opacity: 1,           
          mixBlendMode: "multiply" 
        }}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 800 600"
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.3"
            numOctaves="2"
            stitchTiles="stitch"
            seed="2"
            result="turb"
          >
            <animate
              attributeName="seed"
              from="0"
              to="100"
              dur="5s"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feColorMatrix type="saturate" values="0" in="turb" result="mono" />
        </filter>

        <rect width="100%" height="100%" filter="url(#noiseFilter)" fill="#000" />
      </svg>
    </div>
  );
};




const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setForm({ name: "", email: "", message: "" });
      setSuccess(true);

      setTimeout(() => setSuccess(false), 20000); // hide success after 20s
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
  id="contact"
  className="relative picture bg-cardColor w-full max-w-[95%] md:max-w-[97%] mx-auto mb-5 rounded-b-2xl"
>
  <SectionTitle
    title="Contact"
    outerColor="body"
    innerColor="cardColor"
    rounded="none"
    hasRoundDown={true}
  />

  {/* Bento Grid */}
  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.2 }} 
    className="grid md:grid-cols-2 gap-4 h-full p-4 mt-5 rounded-2xl items-stretch"
  >
    {/* Left - Contact Form */}
    <motion.div 
      variants={containerVariant}
      className="flex flex-col justify-center p-4 bg-cardColor2 rounded-xl shadow-lg z-10"
    >
      <motion.h2 variants={slideFromLeft} className="text-text flex items-center gap-2 text-lg mb-4 font-semibold">
        <LiaConnectdevelop size={12} className="text-purple2" />
        Lets Connect
      </motion.h2>
      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-4"
      >
        <motion.div variants={slideFromLeft}>
          <label htmlFor="name" className="block text-text mb-1 text-base font-medium">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="How would you like to be addressed?"
            required
            className="w-full p-3 rounded-lg border-2 border-text text-text bg-background text-sm"
          />
        </motion.div>

        <motion.div variants={slideFromLeft}>
          <label htmlFor="email" className="block text-text mb-1 text-base font-medium">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What’s your email address?"
            required
            className="w-full p-3 rounded-lg border-2 border-text text-text bg-background text-sm"
          />
        </motion.div>

        <motion.div variants={slideFromLeft}>
          <label htmlFor="message" className="block text-text mb-1 text-base font-medium">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="How can I help you?"
            rows="4"
            required
            className="w-full p-3 rounded-lg text-text border-2 border-text bg-background text-sm"
          />
        </motion.div>

        {success && (
          <motion.div variants={slideFromLeft}
            initial="hidden"
            animate="visible"
            exit="hidden"  
            className="p-3 rounded-lg border border-green-400 bg-green-100 text-green-700 text-xs font-medium animate-fade-in"
          >
            ✅ Message sent successfully! Thank you for reaching out. I would get back to you as soon as possible.
          </motion.div>
        )}

        <motion.button variants={slideFromLeft}
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 px-3 py-2 
                     rounded-lg bg-purple2 text-background text-sm font-bold
                     hover:scale-95 duration-300 shadow-lg disabled:opacity-70"
        >
          {loading ? (
            <span>Sending...</span>
          ) : (
            <>
              <FaPaperPlane size={14} />
              <span>Send</span>
            </>
          )}
        </motion.button>
      </motion.form>
    </motion.div>

    {/* Right - Image + Alternative Contacts */}
    <motion.div 
      variants={containerVariant} 
      className="flex flex-col gap-3 h-full"
    >
      {/* Top Image - strict 1/4 height */}
      <motion.div variants={slideFromRight} className="bg-cardColor2 rounded-xl flex items-center justify-center shadow-md p-2 h-1/4 min-h-[100px] relative">
        <AnimatedNoiseGradient />
      </motion.div>

      {/* Contacts - 3/4 height */}
      <motion.div 
        variants={containerVariant} 
        className="bg-cardColor2 rounded-xl p-3 flex flex-col shadow-md h-full md:h-3/4 z-10"
      >
        <motion.h3 variants={slideFromRight} className="text-sm flex font-semibold text-text items-center gap-2 mb-2 text-center">
          <LiaConnectdevelop size={12} className="text-purple2" />
          Want a more familiar form of contact?
        </motion.h3>

        <div className="grid grid-cols-1 gap-2 md:gap-[6px]">
          {/* Email */}
          <motion.a 
            variants={slideFromRight}
            href="mailto:hey@acetaiwo.com"
            target="_blank"
            className="flex items-center gap-2 w-full px-2 py-2 rounded-lg bg-cardColor 
                       text-text shadow-sm transform transition 
                       hover:translate-x-3 hover:scale-[1.02] hover:border hover:border-[#EA4335] hover:bg-[#EA4335]/10 duration-300"
          >
            <FaEnvelope className="text-[#EA4335] text-lg" />
            <div className="flex flex-col">
              <span className="font-medium text-sm">Email</span>
              <span className="text-xs opacity-70">hey@acetaiwo.com</span>
            </div>
          </motion.a>

          {/* LinkedIn */}
          <motion.a 
            variants={slideFromRight}
            href="https://linkedin.com/in/ace-taiwo-046a6b384"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 w-full px-2 py-2 rounded-lg bg-cardColor 
                      text-text shadow-sm transform transition 
                      hover:translate-x-3 hover:scale-[1.02] hover:border hover:border-[#0077B5] hover:bg-[#0077B5]/10 duration-300"
          >
            <FaLinkedin className="text-[#0077B5] text-lg" />
            <div className="flex flex-col">
              <span className="font-medium text-sm">LinkedIn</span>
              <span className="text-xs opacity-70">AceTaiwo</span>
            </div>
          </motion.a>

          {/* WhatsApp */}
          <motion.a 
            variants={slideFromRight}
            href="https://wa.me/2349025677869"
            target="_blank"
            className="flex items-center gap-2 w-full px-2 py-2 rounded-lg bg-cardColor 
                       text-text shadow-sm transform transition 
                       hover:translate-x-3 hover:scale-[1.02] hover:border hover:border-[#25D366] hover:bg-[#25D366]/10 duration-300"
          >
            <FaWhatsapp className="text-[#25D366] text-lg" />
            <div className="flex flex-col">
              <span className="font-medium text-sm">WhatsApp</span>
              <span className="text-xs opacity-70">+234 902 5677 869</span>
            </div>
          </motion.a>


          {/* Twitter */}
          <motion.a 
            variants={slideFromRight}
            href="https://x.com/acetaiwo"
            target="_blank"
            className="flex items-center gap-2 w-full px-2 py-2 rounded-lg bg-cardColor 
                       text-text shadow-sm transform transition 
                       hover:translate-x-3 hover:scale-[1.02] hover:border hover:border-white hover:bg-white/10 duration-300 "
          >
            <FaXTwitter className="text-white text-lg" />
            <div className="flex flex-col">
              <span className="font-medium text-sm">X</span>
              <span className="text-xs opacity-70">@AceTaiwo</span>
            </div>
          </motion.a>

          {/* GitHub */}
          <motion.a 
            variants={slideFromRight}
            href="https://github.com/Acehood455"
            target="_blank"
            className="flex items-center gap-2 w-full px-2 py-2 rounded-lg bg-cardColor 
                       text-text shadow-sm transform transition 
                       hover:translate-x-3 hover:scale-[1.02]  hover:border hover:border-slate-300 hover:bg-slate-300/10 duration-300"
          >
            <FaGithub className="text-slate-300 text-lg" />
            <div className="flex flex-col">
              <span className="font-medium text-sm">GitHub</span>
              <span className="text-xs opacity-70">Acehood455</span>
            </div>
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  </motion.div>

  <Footer />
</section>

  );
};

export default Contact;