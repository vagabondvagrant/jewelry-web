import React, { useRef, useState, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ContactUsProps {}

export const ContactUs: React.FC<ContactUsProps> = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsSending(true); 

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
    } finally {
      setIsSending(false);
    }
  };

  const defaultRecipientEmail = 'kab6168@gmail.com';

  return (
    <div>
      <h1 className="text-[22px] font-bold text-center mb-4 md:text-3xl">Contact Us to Buy Magnificent Jewelry</h1>
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
          value={isSending ? 'Sending...' : 'Send'}
          className={`bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer hover:bg-blue-500 ${isSending ? 'opacity-50' : ''}`}
          disabled={isSending}
        />
      </form>

      <ToastContainer position="top-right" autoClose={5000} hideProgressBar newestOnTop closeOnClick rtl pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};
