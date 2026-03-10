import { useState } from "react";
import BusinessCard from "./components/BusinessCard";
import QrScreen from "./components/QrScreen";

function App() {

  const [showCard, setShowCard] = useState(false);

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