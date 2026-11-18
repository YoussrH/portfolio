"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

const inputClasses =
  "w-full px-4 py-3 rounded-xl font-dm text-foreground text-sm placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg transition-all duration-200 hover:border-accent/50";

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const sendEmail = (params) => {
    const toastId = toast.loading("Sending your message…");
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: { throttle: 5000 },
        }
      )
      .then(
        () => {
          toast.success("Message received! I'll get back to you soon.", { id: toastId });
          reset();
        },
        () => {
          toast.error("Something went wrong. Please try again.", { id: toastId });
        }
      );
  };

  const onSubmit = (data) => {
    sendEmail({
      to_name: "Yosr",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    });
  };

  return (
    <>
      <Toaster richColors position="bottom-center" />
      <motion.form
        variants={container}
        initial="hidden"
        animate="show"
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-4"
      >
        {/* Name */}
        <motion.div variants={item} className="space-y-1">
          <input
            type="text"
            placeholder="Your name"
            {...register("name", {
              required: "Name is required",
              minLength: { value: 3, message: "At least 3 characters" },
            })}
            className={inputClasses}
          />
          {errors.name && (
            <p className="text-accent text-xs pl-1">{errors.name.message}</p>
          )}
        </motion.div>

        {/* Email */}
        <motion.div variants={item} className="space-y-1">
          <input
            type="email"
            placeholder="Your email"
            {...register("email", { required: "Email is required" })}
            className={inputClasses}
          />
          {errors.email && (
            <p className="text-accent text-xs pl-1">{errors.email.message}</p>
          )}
        </motion.div>

        {/* Message */}
        <motion.div variants={item} className="space-y-1">
          <textarea
            rows={5}
            placeholder="Your message…"
            {...register("message", {
              required: "Message is required",
              minLength: { value: 20, message: "At least 20 characters" },
              maxLength: { value: 500, message: "Max 500 characters" },
            })}
            className={`${inputClasses} resize-none`}
          />
          {errors.message && (
            <p className="text-accent text-xs pl-1">{errors.message.message}</p>
          )}
        </motion.div>

        {/* Submit */}
        <motion.button
          variants={item}
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(254,254,91,0.3)" }}
          whileTap={{ scale: 0.98 }}
          className="w-full px-6 py-3.5 rounded-xl font-dm text-sm font-semibold uppercase tracking-widest
            border border-accent/40 bg-accent/5 text-foreground
            hover:bg-accent/10 hover:border-accent/70 hover:text-accent
            disabled:opacity-50 disabled:cursor-not-allowed
            transition-all duration-200 flex items-center justify-center gap-2"
        >
          <Send size={15} strokeWidth={1.5} />
          Send Message
        </motion.button>
      </motion.form>
    </>
  );
}
