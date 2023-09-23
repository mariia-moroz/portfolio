import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import SectionWrapper from "./SectionWrapper";
import { fadeIn } from "../utils/motion";
import toast from "react-hot-toast";

const key = "zUe8ngdjyXQh9_7tr";
const templateId = "template_a29uaqj";
const serviceId = "service_j0rtjdf";
const myName = "Mariia";
const myEmail = "mma.moroz.mariia@gmail.com";

const Contact = () => {
  const formRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    e.target.lastChild.disabled = true;
    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: name,
          to_name: myName,
          from_email: email,
          to_email: myEmail,
          message: message,
        },
        key
      )
      .then(() => {
        setLoading(false);
        toast.success("Thank you! I will get back to you as soon as possible.");
        e.target.lastChild.disabled = false;
      });
  };

  return (
    <>
      <div className='xl:mt-12 flex gap-10 justify-center overflow-hidden'>
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 0.8)}
          className='max-lg:flex-[0.95] flex-[0.65] rounded-[20px] green-pink-gradient-border'
        >
          <div
            className='glassmorphism rounded-[20px] p-8'
            style={{ boxShadow: "none" }}
          >
            <p className={`${styles.sectionSubText}`}>Get in touch</p>
            <h3 className={`${styles.sectionHeadText}`}>Contact</h3>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className='mt-12 flex flex-col gap-8 items-center'
            >
              <label className='flex flex-col w-full'>
                <span className='text-white font-medium mb-4'>Your Name</span>
                <input
                  type='text'
                  name='name'
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="What's your name?"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium opacity-90'
                />
              </label>
              <label className='flex flex-col w-full'>
                <span className='text-white font-medium mb-4'>Your Email</span>
                <input
                  type='email'
                  name='email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="What's your email?"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium opacity-90'
                />
              </label>
              <label className='flex flex-col w-full'>
                <span className='text-white font-medium mb-4'>
                  Your Message
                </span>
                <textarea
                  rows='7'
                  name='message'
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder='What do you want to say?'
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium resize-none opacity-90'
                />
              </label>
              <button
                type='submit'
                className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-3 px-16 outline-none w-fit text-white font-medium shadow-md shadow-primary rounded-xl block my-auto'
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
