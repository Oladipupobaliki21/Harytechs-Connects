import { QRCodeCanvas } from "qrcode.react";
import { useState } from "react";
import { FaShareAlt, FaTimes } from "react-icons/fa";

const PAGE_URL = "https://harytechs-connects.vercel.app/";

function QrScreen({ onScan }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-linear-to-br from-gray-900 via-gray-800 to-gray-950 text-white p-4 sm:p-8">

   
      <div className="w-full max-w-sm sm:max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl p-6 sm:p-10 flex flex-col items-center gap-6">

  
        <span className="text-xs font-semibold tracking-widest uppercase text-blue-400 bg-blue-900/40 px-4 py-1 rounded-full">
          Digital Business Card
        </span>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-center leading-tight">
          Bilikis <span className="text-blue-400">Oladipupo</span>
        </h1>
        <p className="text-gray-400 text-sm sm:text-base -mt-4 text-center">
          Frontend Developer · Harytechs
        </p>

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

      
        <div className="flex flex-col sm:flex-row gap-3 w-full">
      
          <button
            onClick={onScan}
            className="flex-1 bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all duration-200 text-white font-semibold py-3 rounded-xl shadow-lg shadow-blue-700/40"
          >
            View Card
          </button>

        
          <button
            onClick={() => setShowModal(true)}
            className="flex-1 flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 active:scale-95 transition-all duration-200 font-semibold py-3 rounded-xl shadow-lg"
          >
            <FaShareAlt className="text-white" />
            <span>Share QR</span>
          </button>
        </div>
      </div>

     
      <p className="mt-8 text-gray-600 text-xs text-center">
        Powered by Harytechs · {new Date().getFullYear()}
      </p>

      
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

export default QrScreen;