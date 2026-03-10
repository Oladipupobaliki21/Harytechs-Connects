import { useState, useEffect } from "react";
import BusinessCard from "./components/BusinessCard";
import QrScreen from "./components/QrScreen";

function App() {
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("card") === "true") {
      setShowCard(true);
    }
  }, []);

  return (
    <>
      {showCard ? (
        <BusinessCard />
      ) : (
        <QrScreen onScan={() => setShowCard(true)} />
      )}
    </>
  );
}

export default App;