import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "test", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="">
      <div className="container px-5 py-5 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 flex flex-col rounded-lg overflow-hidden sm:mr-10 md:py-8 mt-8 md:mt-0  relative">
          <div className="">
            <div className="lg:w-full ">
              <h1 className="text-white text-center sm:text-4xl text-3xl mb-1 font-medium title-font">
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
                <input type="text" className="mt-6 mr-5  rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "></input>
               {/* reduce the button size */}
                <button className="mt-6 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-blue-600 transition-all duration-300">
                  <a href="https://drive.google.com/file/d/1TjhqZ-v6hY8-4g6vz_1y6v1y8T6v1y8/view?usp=sharing" target="_blank" rel="noreferrer">
                    Subscribe
                  </a></button>
                {/* <button
                  type="submit"
                  className="text-white bg-indigo-500 px-1 focus:outline-none hover:bg-indigo-600 rounded ">
                  Subscribe to Newsletter
                </button> */}
              </div>
              <p className="mt-6 text-center">
                Your email is safe with us, we dont spam.
              </p>

            </div>
            <div className="lg:w-full flex flex-1 mt-12">
              <div className="lg:w-full text-center mr-3">
                <h2 className="title-font font-semibold tracking-widest text-xs text-center ">
                  ADDRESS
                </h2>
                <p className="text-center">
                  Kigali,Rwanda
                </p>
              </div>

              <div className="lg:w-full mr-3">
                <h2 className="title-font font-semibold  text-xs tracking-widest text-center">
                  EMAIL
                </h2>
                <p className="text-indigo-400 text-center">
                  shemalucien5@gmail.com
                </p>
              </div>
              <div className="lg:w-full mr-3">
                <h2 className="title-font font-semibold tracking-widest text-xs text-center">
                  PHONE
                </h2>
                <p className="text-center">(+250)0788392932</p>
              </div>

            </div>
          </div>

        </div>

        <form
          netlify
          name="test"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Reach out to Me
          </h2>
          <p className="leading-relaxed mb-5">
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
              className="w-full  rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
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
              className="w-full  rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
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
              className="w-full rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-500 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
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
