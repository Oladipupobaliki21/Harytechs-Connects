import { QRCodeCanvas } from "qrcode.react";

function QrScreen({ onScan }) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-6">

      <h1 className="text-2xl font-bold mb-6">
        Scan My Digital Business Card
      </h1>

      <div className="bg-white p-4 rounded-xl shadow-lg">
        <QRCodeCanvas
          value="https://harytechs-connects.vercel.app/?card=true"
          size={200}
        />
      </div>

      <p className="mt-4 text-gray-300 text-sm text-center">
        Scan this QR code to view my business card
      </p>

      {/* Demo button for testing */}
      <button
        onClick={onScan}
        className="mt-6 bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700"
      >
        View Card
      </button>

    </div>
  );
}

export default QrScreen;