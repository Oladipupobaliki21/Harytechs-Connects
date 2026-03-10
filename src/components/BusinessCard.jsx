import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { FaShareAlt, FaTimes } from "react-icons/fa";
import Header from "./Header";
import ContactList from "./ContactList";
import SocialLinks from "./SocialLinks";

const PAGE_URL = "https://harytechs-connects.vercel.app/";

function BusinessCard() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-700 to-gray-900 flex justify-center items-center p-4 sm:p-8">

   
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden">

       
        <Header name="Bilikis Oladipupo" title="Frontend Developer" />

     
        <div className="px-4 sm:px-6 pb-6">


       
          <p className="text-sm sm:text-base text-gray-500 text-center mb-6 leading-relaxed px-2">
            Passionate Frontend Developer who enjoys building responsive and
            user-friendly web applications using React, JavaScript, HTML, CSS
            and Tailwind CSS.
          </p>

        
          <ContactList />

        
          <div className="mt-6">
            <h3 className="font-semibold text-base sm:text-lg text-gray-700 mb-3">
              Find me on
            </h3>
            <SocialLinks />
          </div>

        </div>
      </div>

   
      <button
        onClick={() => setShowModal(true)}
        title="Share via QR code"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-5 py-3 rounded-full shadow-2xl font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-blue-700/50 active:scale-95 transition-all duration-200"
      >
        <FaShareAlt />
        <span className="hidden sm:inline">Share</span>
      </button>

   
      {showModal && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-3xl p-8 sm:p-10 flex flex-col items-center gap-5 w-full max-w-xs sm:max-w-sm shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex w-full justify-between items-center">
              <h2 className="text-gray-800 font-bold text-lg">Scan to Visit</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-700 transition"
              >
                <FaTimes size={20} />
              </button>
            </div>

           
            <div className="bg-white p-3 rounded-2xl ring-4 ring-blue-200 shadow-lg">
              <QRCodeCanvas
                value={PAGE_URL}
                size={220}
                bgColor="#ffffff"
                fgColor="#1e3a5f"
                level="H"
                includeMargin={false}
              />
            </div>

            <p className="text-gray-500 text-xs sm:text-sm text-center">
              Scan this QR code with your camera to open the business card
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="w-full py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-700 transition active:scale-95"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BusinessCard;