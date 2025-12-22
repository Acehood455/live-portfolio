import { FaGithub, FaLinkedin, FaXTwitter, FaTelegram } from "react-icons/fa6";
import { motion } from "framer-motion";
import { containerVariant, itemVariant } from "../constants/animations/variants";

const FooterDivider = () => {
  return (
    <div className="relative w-full h-px mb-5 overflow-hidden">
      {/* Base gradient line */}
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-purple2 to-transparent"
        initial={{ width: "0%", opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Moving highlight */}
      <motion.div
        className="absolute top-0 h-px w-32 bg-gradient-to-r from-purple2 via-gold2 to-purple2 blur-sm"
        animate={{
          x: ["-50%", "calc(100vw + 50%)"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 6,
            ease: "linear",
            delay: 1,
          },
        }}
      />
    </div>
  );
};


const Footer = () => {
  return (
    <footer className="bg-cardColor picture text-text py-8 mt-1 md:mt-3 relative rounded-b-2xl">
        <FooterDivider />
        
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4"
      >
        {/* Left: copyright */}
        <motion.p variants={itemVariant} className="text-sm opacity-70 text-center md:text-left z-10">
          © {new Date().getFullYear()} <span className="text-purple4">Ace Taiwo.</span> All rights reserved.
        </motion.p>

        {/* Middle: nav links (optional) */}
        <motion.div variants={itemVariant} className="flex gap-4 text-sm opacity-80 z-10">
          <a href="#" className="hover:text-purple2 transition">Home</a>
          <a href="#about" className="hover:text-purple2 transition">About</a>
          <a href="#skills" className="hover:text-purple2 transition">Skills</a>
          <a href="#projects" className="hover:text-purple2 transition">Projects</a>
        </motion.div>

        {/* Right: social icons */}
        <motion.div variants={itemVariant} className="flex gap-4 text-lg">
          <a href="https://github.com/Acehood455" target="_blank" className="hover:text-[#3f3e3e] z-10 transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/ace-taiwo-046a6b384" target="_blank" className="hover:text-[#0A66C2] z-10 transition">
            <FaLinkedin />
          </a>
          <a href="https://x.com/acetaiwo" target="_blank" className="hover:text-slate-500 z-10 transition">
            <FaXTwitter />
          </a>
          <a href="https://t.me/acetaiwo" target="_blank" className="hover:text-[#229ed9] z-10 transition">
            <FaTelegram />
          </a>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
