// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import S3Page from "./pages/S3Page";
import EC2Page from "./pages/EC2Page";
import IAMPage from "./pages/IAMPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/s3" element={<S3Page />} />
        <Route path="/ec2" element={<EC2Page />} />
        <Route path="/iam" element={<IAMPage />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;