import React, { useRef, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ContactUsProps {}

export const ContactUs: React.FC<ContactUsProps> = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (form.current) {
        const result = await emailjs.sendForm(
          'service_lphm36v',
          'template_05y3win',
          form.current,
          'p2FmLOOB7gO9y32FW'
        );

        console.log(result.text);
        toast.success('Email sent successfully!');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Error: Something went wrong.');
    }
  };

  const defaultRecipientEmail = 'kab6168@gmail.com';

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us to Buy Magnificent Jewelry</h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-md mx-auto p-6 bg-white rounded shadow-md text-black font-semibold md:max-w-xl"
      >
        <input type="hidden" name="to_email" value={defaultRecipientEmail} />

        <label htmlFor="user_name" className="block text-gray-700 text-sm font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          name="user_name"
          id="user_name"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        />

        <label htmlFor="user_email" className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          name="user_email"
          id="user_email"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          defaultValue={defaultRecipientEmail}
          readOnly 
          required
        />

        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
        />

        <input
          type="submit"
          value="Send"
          className="bg-blue-700  text-white font-bold py-2 px-4 rounded-full cursor-pointer hover:bg-blue-500"
        />
      </form>
    </div>
  );
};
