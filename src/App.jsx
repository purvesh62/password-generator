import PasswordGenerator from "./components/passwordGenerator";
import { themeChange } from "theme-change";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    themeChange(false);
  });

  return (
    <div className="h-screen">
      <Header />
      <div className="flex align-middle items-center max-h-screen py-60">
        <div className="w-full flex items-center flex-col">
          {/* Logo Text */}
          <div className="flex items-center justify-center py-5 text-4xl lg:text-5xl font-extrabold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Password Generator
            </span>
          </div>

          {/* Password Generator */}
          <PasswordGenerator />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
