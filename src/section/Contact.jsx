import React, { useRef, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { FaPaperPlane, FaEnvelope, FaWhatsapp, FaTelegram, FaGithub, FaXTwitter } from "react-icons/fa6";
import { LiaConnectdevelop } from "react-icons/lia";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";

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

      setTimeout(() => setSuccess(false), 20000); // hide success after 5s
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
  id="contact"
  className="relative bg-cardColor min-h-screen w-full max-w-[95%] md:max-w-[97%] mx-auto mb-5 rounded-b-2xl"
>
  <SectionTitle
    title="Contact"
    outerColor="body"
    innerColor="cardColor"
    rounded="none"
    hasRoundDown={true}
  />

  {/* Bento Grid */}
  <div className="grid md:grid-cols-2 gap-4 h-full p-4 mt-5 rounded-2xl items-stretch">
    {/* Left - Contact Form */}
    <div className="flex flex-col justify-center p-4 bg-cardColor2 rounded-xl shadow-lg ">
      <h2 className="text-text flex items-center gap-2 text-lg mb-4 font-semibold">
        <LiaConnectdevelop size={12} className="text-purple2" />
        Lets Connect
      </h2>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-4"
      >
        <div>
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
            className="w-full p-3 rounded-lg border text-text bg-background text-sm"
          />
        </div>

        <div>
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
            className="w-full p-3 rounded-lg border text-text bg-background text-sm"
          />
        </div>

        <div>
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
            className="w-full p-3 rounded-lg text-text border bg-background text-sm"
          />
        </div>

        {success && (
          <div className="p-2 rounded-lg border border-green-300 bg-green-100 text-green-700 text-xs font-medium animate-fade-in">
            ✅ Message sent successfully! Thank you for reaching out. I would get back to you as soon as possible.
          </div>
        )}

        <button
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
        </button>
      </form>
    </div>

    {/* Right - Image + Alternative Contacts */}
    <div className="flex flex-col gap-3 h-full">
      {/* Top Image - strict 1/4 height */}
      <div className="bg-cardColor2 rounded-xl flex items-center justify-center shadow-md p-2 h-1/3 md:h-1/4">
        





      </div>

      {/* Contacts - 3/4 height */}
      <div className="bg-cardColor2 rounded-xl p-4 flex flex-col shadow-md h-full md:h-3/4 ">
        <h3 className="text-sm flex font-semibold text-text items-center gap-2 mb-2 text-center">
          <LiaConnectdevelop size={12} className="text-purple2" />
          Want a more familiar form of contact?
        </h3>

        <div className="grid grid-cols-1 gap-2 md:gap-1">
          {/* Email */}
          <a
            href="mailto:you@example.com"
            className="flex items-center gap-2 w-full px-2 py-2 rounded-lg bg-cardColor 
                       text-text shadow-sm transform transition 
                       hover:translate-x-3 hover:scale-[1.02] hover:border hover:border-[#EA4335] hover:bg-[#EA4335]/10 duration-300"
          >
            <FaEnvelope className="text-[#EA4335] text-lg" />
            <div className="flex flex-col">
              <span className="font-medium text-sm">Email</span>
              <span className="text-xs opacity-70">you@example.com</span>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/1234567890"
            className="flex items-center gap-2 w-full px-2 py-2 rounded-lg bg-cardColor 
                       text-text shadow-sm transform transition 
                       hover:translate-x-3 hover:scale-[1.02] hover:border hover:border-[#25D366] hover:bg-[#25D366]/10 duration-300"
          >
            <FaWhatsapp className="text-[#25D366] text-lg" />
            <div className="flex flex-col">
              <span className="font-medium text-sm">WhatsApp</span>
              <span className="text-xs opacity-70">+123 456 7890</span>
            </div>
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/username"
            className="flex items-center gap-2 w-full px-2 py-2 rounded-lg bg-cardColor 
                       text-text shadow-sm transform transition 
                       hover:translate-x-3 hover:scale-[1.02] hover:border hover:border-[#229ED9] hover:bg-[#229ED9]/10 duration-300"
          >
            <FaTelegram className="text-[#229ED9] text-lg" />
            <div className="flex flex-col">
              <span className="font-medium text-sm">Telegram</span>
              <span className="text-xs opacity-70">@username</span>
            </div>
          </a>

          {/* Twitter */}
          <a
            href="https://x.com/username"
            className="flex items-center gap-2 w-full px-2 py-2 rounded-lg bg-cardColor 
                       text-text shadow-sm transform transition 
                       hover:translate-x-3 hover:scale-[1.02] hover:border hover:border-black hover:bg-black/10 duration-300 "
          >
            <FaXTwitter className="text-black text-lg" />
            <div className="flex flex-col">
              <span className="font-medium text-sm">X</span>
              <span className="text-xs opacity-70">@username</span>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/username"
            className="flex items-center gap-2 w-full px-2 py-2 rounded-lg bg-cardColor 
                       text-text shadow-sm transform transition 
                       hover:translate-x-3 hover:scale-[1.02]  hover:border hover:border-[#333] hover:bg-[#333]/10 duration-300"
          >
            <FaGithub className="text-[#333] text-lg" />
            <div className="flex flex-col">
              <span className="font-medium text-sm">GitHub</span>
              <span className="text-xs opacity-70">username</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</section>

  );
};

export default Contact;
// import SectionTitle from "../components/SectionTitle";
// import { FaPaperPlane, FaEnvelope, FaWhatsapp, FaTelegram, FaGithub, FaXTwitter } from "react-icons/fa6";
// import emailjs from "@emailjs/browser";

// const Contact = () => {
//   const formRef = useRef(null);
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       await emailjs.sendForm(
//         import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
//         formRef.current,
//         import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
//       );

//       setForm({ name: "", email: "", message: "" });
//       setSuccess(true);

//       setTimeout(() => setSuccess(false), 5000); // hide success after 5s
//     } catch (error) {
//       console.error("EmailJS Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="relative bg-cardColor min-h-screen w-full max-w-[95%] md:max-w-[97%] mx-auto"
//     >
//       <SectionTitle
//         title="Contact"
//         outerColor="body"
//         innerColor="cardColor"
//         rounded="none"
//         hasRoundDown={true}
//       />

//       {/* Bento Grid */}
//       <div className="grid md:grid-cols-2 gap-4 h-[80%] p-4 mt-5 rounded-2xl">
//         {/* Left - Contact Form */}
//         <div className="flex flex-col justify-center p-6 bg-cardColor2 rounded-xl shadow-lg">
//           <form
//             ref={formRef}
//             onSubmit={handleSubmit}
//             className="w-full flex flex-col gap-6"
//           >
//             <div>
//               <label htmlFor="name" className="block text-text mb-1 font-medium">Your Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 placeholder="How would you like to addressed?"
//                 required
//                 className="w-full p-2 rounded-lg border bg-background"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-text mb-1 font-medium">Your Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 placeholder="What’s your email address?"
//                 required
//                 className="w-full p-2 rounded-lg border bg-background"
//               />
//             </div>

//             <div>
//               <label htmlFor="message" className="block text-text mb-1 font-medium">Your Message</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={form.message}
//                 onChange={handleChange}
//                 placeholder="How can I help you?"
//                 rows="5"
//                 required
//                 className="w-full p-2 rounded-lg border bg-background"
//               />
//             </div>

//             {/* Success Message */}
//             {success && (
//               <div className="p-2 rounded-lg border-2 border-green-300 bg-green-100 text-green-700 text-sm font-medium animate-fade-in">
//                 ✅ Message sent successfully!
//               </div>
//             )}

//             {/* Button */}
//             <button
//               type="submit"
//               disabled={loading}
//               className="inline-flex items-center justify-center gap-2 px-4 py-2 
//                          rounded-lg bg-purple2 text-background font-bold
//                          hover:scale-95 duration-300 shadow-lg disabled:opacity-70"
//             >
//               {loading ? (
//                 <span>Sending...</span>
//               ) : (
//                 <>
//                   <FaPaperPlane size={16} />
//                   <span>Send Message</span>
//                 </>
//               )}
//             </button>
//           </form>
//         </div>

//         {/* Right - Image + Alternative Contacts */}
//         <div className="grid grid-rows-3 gap-4">
//           {/* Top 1/3 Image */}
//           <div className="row-span-1 bg-cardColor2 rounded-xl flex items-center justify-center shadow-md">
//             <img
//               src="/images/contact.png"
//               alt="Contact"
//               className="w-3/4 h-auto object-contain"
//             />
//           </div>

//           {/* Bottom 2/3 Contacts */}
//             <div className="row-span-2 bg-cardColor2 rounded-xl p-6 flex flex-col shadow-md">
//             <h3 className="text-lg font-semibold text-text mb-6 text-center">
//                 Want a familiar form of contact? Try one of these:
//             </h3>

//             <div className="flex flex-col gap-4">
//                 {/* Email */}
//                 <a
//                 href="mailto:you@example.com"
//                 className="flex items-center gap-3 w-full px-3 py-2 rounded-xl bg-cardColor 
//                             text-text shadow-sm transform transition 
//                             hover:translate-x-2 hover:scale-[1.02] hover:bg-[#EA4335]/10"
//                 >
//                 <FaEnvelope className="text-[#EA4335] text-xl" />
//                 <div className="flex flex-col">
//                     <span className="font-medium">Email</span>
//                     <span className="text-sm opacity-70">you@example.com</span>
//                 </div>
//                 </a>

//                 {/* WhatsApp */}
//                 <a
//                 href="https://wa.me/1234567890"
//                 className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-cardColor 
//                             text-text shadow-sm transform transition 
//                             hover:translate-x-2 hover:scale-[1.02] hover:bg-[#25D366]/10"
//                 >
//                 <FaWhatsapp className="text-[#25D366] text-xl" />
//                 <div className="flex flex-col">
//                     <span className="font-medium">WhatsApp</span>
//                     <span className="text-sm opacity-70">+123 456 7890</span>
//                 </div>
//                 </a>

//                 {/* Telegram */}
//                 <a
//                 href="https://t.me/username"
//                 className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-cardColor 
//                             text-text shadow-sm transform transition 
//                             hover:translate-x-2 hover:scale-[1.02] hover:bg-[#229ED9]/10"
//                 >
//                 <FaTelegram className="text-[#229ED9] text-xl" />
//                 <div className="flex flex-col">
//                     <span className="font-medium">Telegram</span>
//                     <span className="text-sm opacity-70">@username</span>
//                 </div>
//                 </a>

//                 {/* X / Twitter */}
//                 <a
//                 href="https://x.com/username"
//                 className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-cardColor 
//                             text-text shadow-sm transform transition 
//                             hover:translate-x-2 hover:scale-[1.02] hover:bg-black/10"
//                 >
//                 <FaXTwitter className="text-black text-xl" />
//                 <div className="flex flex-col">
//                     <span className="font-medium">X (Twitter)</span>
//                     <span className="text-sm opacity-70">@username</span>
//                 </div>
//                 </a>

//                 {/* GitHub */}
//                 <a
//                 href="https://github.com/username"
//                 className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-cardColor 
//                             text-text shadow-sm transform transition 
//                             hover:translate-x-2 hover:scale-[1.02] hover:bg-[#333]/10"
//                 >
//                 <FaGithub className="text-[#333] text-xl" />
//                 <div className="flex flex-col">
//                     <span className="font-medium">GitHub</span>
//                     <span className="text-sm opacity-70">username</span>
//                 </div>
//                 </a>
//             </div>
//             </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

//       message: "",
//     });
  
//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setForm({ ...form, [name]: value });
//     };
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       setLoading(true); // Show loading state
  
//       try {
//         await emailjs.sendForm(
//           import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
//           import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
//           formRef.current,
//           import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
//         );
  
//         // Reset form and stop loading
//         setForm({ name: "", email: "", message: "" });
//       } catch (error) {
//         console.error("EmailJS Error:", error); // Optional: show toast
//       } finally {
//         setLoading(false); // Always stop loading, even on error
//       }
//     };
    
//   return (
//     <section
//       id="contact"
//       className="relative bg-cardColor min-h-screen w-full max-w-[95%] md:max-w-[97%] mx-auto"
//     >
//       <SectionTitle
//         title="Contact"
//         outerColor="body"
//         innerColor="cardColor"
//         rounded="none"
//         hasRoundDown={true}
//       />

//       <div className="w-[95%] mx-auto bg-cardColor2 h-[80%] p-2 md:p-4 mt-2 md:mt-5 rounded-2xl">
//         <div className="w-full md:w-1/2">
//             <div className="grid-12-cols">
//             <div className="xl:col-span-5">
//                 <div className="flex-center rounded-xl p-10">
//                     <form
//                         ref={formRef}
//                         onSubmit={handleSubmit}
//                         className="w-full flex flex-col gap-7"
//                     >
//                         <div>
//                         <label htmlFor="name">Your name</label>
//                         <input
//                             type="text"
//                             id="name"
//                             name="name"
//                             value={form.name}
//                             onChange={handleChange}
//                             placeholder="What’s your good name?"
//                             required
//                         />
//                         </div>

//                         <div>
//                         <label htmlFor="email">Your Email</label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             value={form.email}
//                             onChange={handleChange}
//                             placeholder="What’s your email address?"
//                             required
//                         />
//                         </div>

//                         <div>
//                         <label htmlFor="message">Your Message</label>
//                         <textarea
//                             id="message"
//                             name="message"
//                             value={form.message}
//                             onChange={handleChange}
//                             placeholder="How can I help you?"
//                             rows="5"
//                             required
//                         />
//                         </div>

//                         <button type="submit" className="inline-flex items-center text-[clamp(1rem,1vw+0.5rem,2rem)] gap-1 px-3 py-1.5 
//                           text-sm md:px-4 md:py-2 md:text-base rounded-lg border bg-purple2 text-background font-bold
//                           hover:scale-95 hover:translate-y-0.5 duration-300 hover:shadow-[0px_4px_16px_0_rgba(207,102,255,.90)] transition">
//                             <div className="group">
//                                 <div className="" />
//                                 <p className="">
//                                 {loading ? "Sending..." : "Send Message"}
//                                 </p>
//                             </div>
//                         </button>
//                     </form>
//                 </div>
//             </div>
//             </div>
//         </div>
//         <div className="w-full md:w-1/2 bg-white">
//             <div className="w-full md:w-1/2 h-1/3 bg-red-500"></div>
//             <div className="w-full md:w-1/2 h-2/3 bg-red-500"></div>
//         </div>
//       </div>
        
//     </section>
//   )
// }

// export default Contact