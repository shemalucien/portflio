import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import { MdLocationOff } from 'react-icons/md';
import { sendMessage } from '../features/Queries/SendMessageSlice';
import { sendSubscribe, sendUnsubscribe } from '../features/Subscribers/SubsriberSlice';

export default function Contact() {
  const dispatch = useDispatch(); // Get the dispatch function from Redux
  // State variables for the form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSub, setEmailSub] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false); // You can use this state to manage the subscription status
  const handleSendClick = async (e) => {
    e.preventDefault();
    try {
      // Dispatch the sendMessage action to send the message
      dispatch(sendMessage(name, email, message));
      // Display a success toast
      toast.success('Message sent successfully!');
      // Clear the form inputs after successful submission (optional)
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(error);
      // Display an error toast
      toast.error('Failed to send message. Please try again later.');
    }
  };


  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      await dispatch(sendSubscribe(emailSub));
      setIsSubscribed(true);
      toast.success('Successfully subscribed!');
    } catch (error) {
      console.error(error);
      toast.error('Error subscribing. Please try again later.');
    }
  };

  const handleUnsubscribe = async (e) => {
    e.preventDefault();
    try {
      await dispatch(sendUnsubscribe(emailSub));
      setIsSubscribed(false);
      toast.success('Successfully unsubscribed!');
    } catch (error) {
      console.error(error);
      toast.error('Error unsubscribing. Please try again later.');
    }
  };

  return (
    <section id="contact" className="">
      <div className="container px-5 py-5 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-1/2 md:w-1/2 flex flex-col rounded-lg overflow-hidden sm:mr-5 md:py-8 mt-8 md:mt-0">
          <form onSubmit={isSubscribed ? handleUnsubscribe : handleSubscribe}>
            <div className="text-center">
              <div className="lg:w-full ">
                <h1 className="sm:text-4xl text-3xl font-extrabold text-white-900 mb-4 ">
                  Get Our Weekly
                </h1>
                <h3 className="text-center">
                  Newsletter
                </h3>
                <p className="text-center">
                  Get Weekly Updates On The Newest Design Stories, Case Studies And Tips Right In Your Mailbox.
                </p>
                <h2 className="text-center">
                  Subscribe Now
                </h2>
                <div className="flex justify-center">
                  <input type="text"
                    value={emailSub} onChange={(event) => setEmailSub(event.target.value)}
                    className="mt-6 mr-5 ml-5 w-1/2  rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "></input>

                  <button
                    type="submit"
                    className={`mt-6 mr-5 text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base w-1/3 ${isSubscribed ? 'bg-red-500 hover:bg-red-600' : ''
                      }`}
                  >
                    {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
                  </button>
                </div>
                <p className="mt-6 text-center">
                  Your email is safe with us, we dont spam.
                </p>

              </div>

              <div className="lg:w-full flex flex-col lg:flex-row lg:justify-between mt-12">
                <div className="lg:w-1/3 flex flex-col justify-center items-center mb-6 lg:mb-0">
                  <MdLocationOff className="inline-block mb-2 text-xl" />
                  <p className="text-center">Kigali,Rwanda</p>
                </div>
                <div className="lg:w-1/3 flex flex-col justify-center items-center mb-6 lg:mb-0">
                  <AiOutlineMail class="text-2xl mb-2" />
                  <p className="text-center">shemalucien5@gmail.com</p>
                </div>
                <div className="lg:w-1/3 flex flex-col justify-center items-center">
                  <FiPhoneCall class="text-2xl mb-2" />
                  <p className="text-center">(+250)0788392932</p>
                </div>
              </div>
            </div>
          </form>
        </div>

        <form
          netlify
          name="test"
          onSubmit={handleSendClick}
          className="lg:w-1/2 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="sm:text-4xl text-center text-3xl font-extrabold text-white-900 mb-4 ">
            Reach out to Me
          </h2>
          <p className="leading-relaxed text-center mb-5">
            Contact me, let’s make magic together
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name} onChange={(e) => setName(e.target.value)}
              className="w-full  rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"

            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full  rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"

            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message} onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-500 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              placeholder="Message"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-1/3">
            Send
          </button>
        </form>
      </div>
    </section >
  );
}
