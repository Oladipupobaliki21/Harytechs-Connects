import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { FaShareAlt, FaTimes, FaCheckCircle } from "react-icons/fa";
import Header from "./Header";
import ContactList from "./ContactList";
import SocialLinks from "./SocialLinks";

const PAGE_URL = "https://harytechs-connects.vercel.app/";

function BusinessCard() {
  const [showQrModal, setShowQrModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Bilikis Oladipupo – Digital Business Card",
          text: "Check out my digital business card!",
          url: PAGE_URL,
        });
      } catch (_) {
        fallbackCopy();
      }
    } else {
      setShowQrModal(true);
    }
  };

  const fallbackCopy = () => {
    navigator.clipboard.writeText(PAGE_URL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-700 to-gray-900 flex justify-center items-center p-4 sm:p-8">

      {/* Card */}
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Banner + Avatar (handled by Header) */}
        <Header name="Bilikis Oladipupo" title="Frontend Developer" />

        {/* Body – mt-16 accounts for the avatar overflow */}
        <div className="mt-16 px-4 sm:px-6 pb-6">

          {/* Name + title row */}
          <div className="text-center mb-4">
            <h1 className="text-xl sm:text-2xl font-extrabold text-gray-800">
              Bilikis Oladipupo
            </h1>
            <p className="text-sm text-blue-600 font-medium">Frontend Developer</p>
          </div>

          {/* Bio */}
          <p className="text-sm sm:text-base text-gray-500 text-center mb-6 leading-relaxed px-2">
            Passionate Frontend Developer who enjoys building responsive and
            user-friendly web applications using React, JavaScript, HTML, CSS
            and Tailwind CSS.
          </p>

          {/* Contact list */}
          <ContactList />

          {/* Social links */}
          <div className="mt-6">
            <h3 className="font-semibold text-base sm:text-lg text-gray-700 mb-3">
              Find me on
            </h3>
            <SocialLinks />
          </div>

        </div>
      </div>

      {/* Floating Share / QR button */}
      <button
        onClick={handleShare}
        title="Share business card"
        className={`fixed bottom-6 right-6 z-40 flex items-center gap-2 px-5 py-3 rounded-full shadow-2xl font-semibold text-white transition-all duration-300 active:scale-95 ${copied
            ? "bg-green-600 shadow-green-700/50"
            : "bg-blue-600 hover:bg-blue-500 shadow-blue-700/50"
          }`}
      >
        {copied ? <FaCheckCircle /> : <FaShareAlt />}
        <span className="hidden sm:inline">{copied ? "Copied!" : "Share"}</span>
      </button>

      {/* QR Share Modal */}
      {showQrModal && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowQrModal(false)}
        >
          <div
            className="bg-white rounded-3xl p-6 sm:p-10 flex flex-col items-center gap-5 w-full max-w-xs sm:max-w-sm shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex w-full justify-between items-center">
              <h2 className="text-gray-800 font-bold text-lg">Share via QR</h2>
              <button
                onClick={() => setShowQrModal(false)}
                className="text-gray-400 hover:text-gray-700 transition"
              >
                <FaTimes size={20} />
              </button>
            </div>

            <div className="bg-white p-3 rounded-2xl ring-4 ring-blue-200 shadow-lg">
              <QRCodeCanvas
                value={PAGE_URL}
                size={200}
                bgColor="#ffffff"
                fgColor="#1e3a5f"
                level="H"
                includeMargin={false}
              />
            </div>

            <p className="text-gray-500 text-xs sm:text-sm text-center">
              Scan this QR code with any camera to open the business card
            </p>

            <button
              onClick={fallbackCopy}
              className={`w-full py-3 rounded-xl font-semibold transition-all ${copied
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {copied ? "✓ Link Copied!" : "Copy Link Instead"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BusinessCard;