export default function Contacts() {
  return (
    <div id ="contactus">
      <section className="text-gray-400 body-font bg-gray-100">
        <a name="contact"></a>
        <div className="container px-5 py-24 mx-auto border-2 border-blue-500 bg-white rounded-lg">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-800">
              REACHING US
            </h1>
          </div>
          <div className="flex flex-wrap">
            <div className="xl:w-1/2 lg:w-1/2 md:w-full px-8 py-6">
              <div className="bg-gray-200 border border-gray-300 rounded-lg p-8 h-full">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                </div>
                <h2 className="text-lg sm:text-xl text-gray-800 font-medium title-font mb-2">
                  Contact Us
                </h2>
                <p className="leading-relaxed text-base mb-4 text-gray-600">
                  Motilal Nehru National Institute of Technology Allahabad
                  <br />
                  Prayagraj - 211004, INDIA
                  <br />
                  Telephone No.: 91-0532-2545404, 2545407
                  <br />
                  Fax No.: 91-0532-2545341
                  <br />
                  Email: secretary@mnnit.ac.in
                </p>
              </div>
            </div>
            <div className="xl:w-1/2 lg:w-1/2 md:w-full px-8 py-6">
              <div className="bg-gray-200 border border-gray-300 rounded-lg p-8 h-full">
                <h2 className="text-lg sm:text-xl text-gray-800 font-medium title-font mb-2">
                  Visit Us
                </h2>
                <p className="leading-relaxed text-base mb-4 text-gray-600">
                  Motilal Nehru National Institute of Technology (MNNIT)
                  <br />
                  Teliarganj, Prayagraj (Allahabad),
                  <br />
                  Uttar Pradesh 211004
                  <br />
                  India
                </p>
              </div>
            </div>
            <div className="w-full mt-8">
              <div className="rounded-lg overflow-hidden">
                {/* Replace the placeholder map with your actual map component */}
                <div
                  className="w-full h-64 bg-gray-700"
                  style={{ backgroundImage: `url('"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7202.697571927987!2d81.85372687770996!3d25.493411800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399aca78818ddc51%3A0x6690dd2de3a1415b!2sMotilal%20Nehru%20National%20Institute%20of%20Technology%2C%20Allahabad!5e0!3m2!1sen!2sin!4v1689057849063!5m2!1sen!2sin"')` }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7202.697571927987!2d81.85372687770996!3d25.493411800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399aca78818ddc51%3A0x6690dd2de3a1415b!2sMotilal%20Nehru%20National%20Institute%20of%20Technology%2C%20Allahabad!5e0!3m2!1sen!2sin!4v1689057849063!5m2!1sen!2sin"
                    title="map"
                    width="100%"
                    height="100%"
                    frameBorder={0}
                    marginHeight={0}
                    marginWidth={0}
                    scrolling="no"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
