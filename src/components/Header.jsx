import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUserPlus } from "react-icons/fa";
import profileImage from "../assets/profile.jpg";

function Header({ name, title }) {
  /* ---------- vCard download (Add to Contact) ---------- */
  const handleAddContact = () => {
    const vCard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "FN:Bilikis Oladipupo",
      "N:Oladipupo;Bilikis;;;",
      "TITLE:Frontend Developer Intern",
      "ORG:Web3Bridge",
      "TEL;TYPE=CELL:+2348130542998",
      "EMAIL:oladipupobilikisarike@gmail.com",
      "URL:https://oladipupobaliki.vercel.app/",
      "ADR;TYPE=HOME:;;17 Adeolu Egunsola St;Lagos;;Nigeria;",
      "END:VCARD",
    ].join("\n");

    const blob = new Blob([vCard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Bilikis_Oladipupo.vcf";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    /* ── Banner area ── */
    <div className="relative w-full">

      {/* Gradient banner */}
      <div
        className="h-36 sm:h-44 w-full"
        style={{
          background: "linear-gradient(135deg, #3a3a3a 0%, #1a1a1a 60%, #2d2d2d 100%)",
        }}
      />

      {/* Profile image – straddles banner and body */}
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-36 sm:top-44">
        <div
          className="h-24 w-24 sm:h-28 sm:w-28 rounded-full border-4 border-white shadow-xl overflow-hidden"
          style={{ background: "#6c3fc5" }}           /* purple fallback while img loads */
        >
          <img
            src={profileImage}
            alt={name}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* White body beneath the banner (name / title / icons / button) */}
      <div className="bg-white pt-14 sm:pt-16 pb-4 flex flex-col items-center gap-1 px-4">

        {/* Name */}
        <h1 className="text-lg sm:text-xl font-extrabold text-gray-900 tracking-tight">
          {name}
        </h1>

        {/* Title */}
        <p className="text-xs sm:text-sm text-gray-500 font-medium mb-3">{title}</p>

        {/* Action icon row: Phone · Email · Location */}
        <div className="flex items-center justify-center gap-6 mb-4">

          {/* Phone */}
          <a
            href="tel:+2348130542998"
            aria-label="Call"
            className="flex flex-col items-center gap-1 group"
          >
            <span className="flex items-center justify-center h-11 w-11 rounded-full border border-gray-200 shadow-sm bg-white group-hover:bg-gray-50 transition">
              <FaPhoneAlt className="text-gray-600 text-sm" />
            </span>
          </a>

          {/* Email */}
          <a
            href="mailto:oladipupobilikisarike@gmail.com"
            aria-label="Email"
            className="flex flex-col items-center gap-1 group"
          >
            <span className="flex items-center justify-center h-11 w-11 rounded-full border border-gray-200 shadow-sm bg-white group-hover:bg-gray-50 transition">
              <FaEnvelope className="text-gray-600 text-sm" />
            </span>
          </a>

          {/* Location */}
          <a
            href="https://maps.google.com/?q=17+Adeolu+Egunsola+St,+Lagos,+Nigeria"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Location"
            className="flex flex-col items-center gap-1 group"
          >
            <span className="flex items-center justify-center h-11 w-11 rounded-full border border-gray-200 shadow-sm bg-white group-hover:bg-gray-50 transition">
              <FaMapMarkerAlt className="text-gray-600 text-sm" />
            </span>
          </a>
        </div>

        {/* Add to Contact button */}
        <button
          onClick={handleAddContact}
          className="flex items-center justify-center gap-2 w-full max-w-xs
                     border border-gray-300 rounded-lg py-2.5 px-4
                     text-sm font-semibold text-gray-700
                     bg-white hover:bg-gray-50 active:scale-[0.98]
                     transition-all duration-150 shadow-sm"
        >
          <FaUserPlus className="text-gray-500 text-base" />
          Add Contact
        </button>
      </div>
    </div>
  );
}

export default Header;