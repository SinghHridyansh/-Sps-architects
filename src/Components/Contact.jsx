import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="contact bg-black w-full h-max p-8 flex gap-12 flex-col "
    >
      <div className="">
        <h1 className="font-extrabold text-5xl md:text-9xl md:font-extrabold md:tracking-wider">
          SPS ARCHITECTS
        </h1>
      </div>

      <div className="flex flex-col-reverse gap-12 md:flex-row md:justify-between md:mt-8 md:gap-1">
        {/* Address */}
        <div className="address flex gap-2 flex-col text-sm tracking-wider md:w-1/4 md:gap-6 md:font-semibold">
          <p>INFO@MYSITE.COM</p>
          <p>123-456-7890</p>
          <p>
            D-34 VIBHUTI KHAND,
            <br /> LUCKNOW
          </p>

          <div className=""></div>
        </div>

        {/* Navigation */}
        <div className="navigation flex flex-col gap-2 text-sm tracking-wider md:w-1/4 md:gap-6 md:font-semibold">
          <a href="#work" className="">
            PORTFOLIO
          </a>
          <a href="#studio" className="">
            STUDIO
          </a>
          <a href="#contact" className="">
            CONTACT
          </a>
        </div>

        {/* Contact Form */}
        <div className="contact bg-project-yellow text-black p-4 rounded-2xl flex-initial md:w-1/2 md:p-10 md:rounded-3xl">
          <span className="text-sm font-semibold tracking-wide">
            READY TO COLLABORATE?
          </span>

          <br />
          <br />

          <span className="text-base font-normal text-black">
            Let's create something epic together
          </span>

          <div className="mt-4 ">
            <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
              <div className="mb-4">
                <label htmlFor="firstName" className="label">
                  FIRST NAME *
                </label>

                <input
                  type="text"
                  id="firstName"
                  required
                  className="text-field mt-2"
                  placeholder="John"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="lastName" className="label">
                  LAST NAME *
                </label>

                <input
                  type="text"
                  id="lastName"
                  required
                  className="text-field mt-2"
                  placeholder="Prasad"
                />
              </div>
            </div>

            <div className=" md:w-full">
              <div className="mb-4">
                <label htmlFor="email" className="label">
                  EMAIL *
                </label>

                <input
                  type="text"
                  id="email"
                  required
                  className="text-field mt-2"
                  placeholder="hello@example.com
				"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="label">
                  MESSAGE*
                </label>

                <textarea
                  name="message"
                  id="message"
                  placeholder="Typw your message here"
                  className="text-field  resize-y min-h-32 max-h-80"
                ></textarea>
              </div>

              <div className="mb-4 grid place-items-center">
                <button className="max-w-max h-10 flex items-center gap-2 px-12 rounded-3xl font-medium text-sm bg-black text-white ">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
