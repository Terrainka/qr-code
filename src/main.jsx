import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Layout } from "./Layout";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//   },
//   {
//     path: "/qenerate",
//     element: <QrCodeGenerator />,
//   },
//   {
//     path: "/scan",
//     element: <QrCodeScanner />,
//   },
// ]);

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);
