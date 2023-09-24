import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import { styles } from "../../styles";
import SectionWrapper from "../SectionWrapper";
import { fadeIn } from "../../utils/motion";

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
          className='flex max-lg:w-full lg:flex-[0.65] rounded-[20px] green-pink-gradient-border'
        >
          <div
            className='glassmorphism rounded-[20px] xs:p-8 py-8 px-6'
            style={{ boxShadow: "none" }}
          >
            <p className={`${styles.sectionSubText}`}>Get in touch</p>
            <h3 className={`${styles.sectionHeadText}`}>Contact</h3>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className='mt-8 flex flex-col gap-8 items-center'
            >
              <label className='flex flex-col w-full'>
                <span className='text-white font-medium mb-4'>Your Name</span>
                <input
                  type='text'
                  name='name'
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="What's your name?"
                  className='bg-tertiary py-4 xs:px-6 px-4 placeholder:text-secondary text-white rounded-lg outline-blue-500 border-[1px] border-solid border-[#4e4198] font-medium'
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
                  className='bg-tertiary py-4 xs:px-6 px-4 placeholder:text-secondary text-white rounded-lg  outline-blue-500 border-[1px] border-solid border-[#4e4198] font-medium'
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
                  className='bg-tertiary py-4 xs:px-6 px-4 placeholder:text-secondary text-white rounded-lg outline-blue-500 border-[1px] border-solid border-[#4e4198] font-medium resize-none'
                />
              </label>
              <button
                type='submit'
                className='button-gradient py-3 px-16 outline-none w-fit text-white font-medium rounded-xl block my-auto'
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
