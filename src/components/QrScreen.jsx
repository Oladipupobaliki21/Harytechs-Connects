import { QRCodeCanvas } from "qrcode.react";
import { useState } from "react";
import { FaShareAlt, FaCheckCircle } from "react-icons/fa";

const PAGE_URL = "https://harytechs-connects.vercel.app/";

function QrScreen({ onScan }) {
  const [shared, setShared] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);

  const handleShare = async () => {
    const shareUrl = PAGE_URL;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Bilikis Oladipupo – Digital Business Card",
          text: "Scan this QR code to view my digital business card!",
          url: shareUrl,
        });
        setShared(true);
        setTimeout(() => setShared(false), 2500);
      } catch (err) {
        // User cancelled or error – fall back to copy
        fallbackCopy(shareUrl);
      }
    } else {
      fallbackCopy(shareUrl);
    }
  };

  const fallbackCopy = (url) => {
    navigator.clipboard.writeText(url).then(() => {
      setShared(true);
      setTimeout(() => setShared(false), 2500);
    });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-white p-4 sm:p-8">

      {/* Card container */}
      <div className="w-full max-w-sm sm:max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl p-6 sm:p-10 flex flex-col items-center gap-6">

        {/* Badge */}
        <span className="text-xs font-semibold tracking-widest uppercase text-blue-400 bg-blue-900/40 px-4 py-1 rounded-full">
          Digital Business Card
        </span>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-center leading-tight">
          Bilikis <span className="text-blue-400">Oladipupo</span>
        </h1>
        <p className="text-gray-400 text-sm sm:text-base -mt-4 text-center">
          Frontend Developer · Harytechs
        </p>

        {/* QR Code */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-xl ring-4 ring-blue-400/40 transition-transform hover:scale-105 duration-300">
          <QRCodeCanvas
            value={PAGE_URL}
            size={180}
            bgColor="#ffffff"
            fgColor="#1e3a5f"
            level="H"
            includeMargin={false}
          />
        </div>

        <p className="text-gray-300 text-xs sm:text-sm text-center max-w-xs">
          Point your camera at the QR code to instantly view the business card
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          {/* View Card */}
          <button
            onClick={onScan}
            className="flex-1 bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all duration-200 text-white font-semibold py-3 rounded-xl shadow-lg shadow-blue-700/40"
          >
            View Card
          </button>

          {/* Share */}
          <button
            onClick={handleShare}
            className={`flex-1 flex items-center justify-center gap-2 font-semibold py-3 rounded-xl shadow-lg transition-all duration-200 active:scale-95 ${
              shared
                ? "bg-green-600 shadow-green-700/40"
                : "bg-white/20 hover:bg-white/30 shadow-white/10"
            }`}
          >
            {shared ? (
              <>
                <FaCheckCircle className="text-white" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <FaShareAlt className="text-white" />
                <span>Share QR</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Footer */}
      <p className="mt-8 text-gray-600 text-xs text-center">
        Powered by Harytechs · {new Date().getFullYear()}
      </p>

      {/* Share QR Modal (shown when share button opens full-screen QR for screenshot) */}
      {showQrModal && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setShowQrModal(false)}
        >
          <div
            className="bg-white rounded-3xl p-8 flex flex-col items-center gap-4 max-w-xs w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-gray-800 font-bold text-lg">Scan to Share</h2>
            <QRCodeCanvas value={PAGE_URL} size={220} level="H" bgColor="#ffffff" fgColor="#1e3a5f" />
            <p className="text-gray-500 text-xs text-center">
              Scan this with any camera app
            </p>
            <button
              onClick={() => setShowQrModal(false)}
              className="bg-gray-800 text-white px-6 py-2 rounded-xl hover:bg-gray-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default QrScreen;