import { QrCodeGenerator } from "./components/Generate/QrCodeGenerator";
import { QrCodeScanner } from "./components/Scanner/QrCodeScanner";
import { Navigation } from "./components/Navigator/Navigation";
import { Routes, Route } from "react-router-dom";
import { GenerateHistory } from "./components/GenerateHistory";
import { ScannerHistory } from "./components/ScannerHistory";

const Layout = () => {
  return (
    <div>
      <Navigation />
      {/* <QrCodeGenerator /> */}
      {/* <QrCodeScanner /> */}
      <Routes>
        <Route path="/qenerate" element={<QrCodeGenerator />} />
        <Route path="/scan" element={<QrCodeScanner />} />
        <Route path="/qenerateHistory" element={<GenerateHistory />} />
        <Route path="/scanHistory" element={<ScannerHistory />} />
      </Routes>
    </div>
  );
};

export { Layout };
