import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import About from "./pages/About";
import CanvasCursor from "./components/Cursor";
import WebDevelopment from "./pages/services/WebDevelopment";
import UiUxDesign from "./pages/services/UiUxDesign";
import MobileApps from "./pages/services/MobileApps";
import SeoMarketing from "./pages/services/DigitalMarketing";
import Footer from "./components/Footer";
import Seo from "./pages/DigitalMarketing/Seo";
import EmailMarketing from "./pages/DigitalMarketing/EmailMarketing";
import ContentMarketing from "./pages/DigitalMarketing/ContentMarketing";
import SocialMediaMarketing from "./pages/DigitalMarketing/SocialMediaMarketing";
import MetaAds from "./pages/DigitalMarketing/MetaAds";
import GoogleCampign from "./pages/DigitalMarketing/GoogleCampign";
import Careers from "./pages/Careers";
import ScrollTop from "@/components/ui/ScrollTop";

// ✅ Import Toaster
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Toaster
          position="top-center"
          containerStyle={{ top: "90px" }} // <--- moves toast below navbar
          toastOptions={{
            duration: 3500,
            style: {
              zIndex: 999999, // <--- stays on top visually
              borderRadius: "10px",
            },
          }}
        />

        <ScrollTop />
        <CanvasCursor />
        <Header />

        <div className="h-16 md:h-20"></div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/services/web-development"
            element={<WebDevelopment />}
          />
          <Route path="/services/ui-ux" element={<UiUxDesign />} />
          <Route path="/services/mobile-apps" element={<MobileApps />} />
          <Route path="/services/seo-marketing" element={<SeoMarketing />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/digital-marketing/seo" element={<Seo />} />
          <Route
            path="/services/digital-marketing/email-marketing"
            element={<EmailMarketing />}
          />
          <Route
            path="/services/digital-marketing/content-marketing"
            element={<ContentMarketing />}
          />
          <Route
            path="/services/digital-marketing/social-media"
            element={<SocialMediaMarketing />}
          />
          <Route
            path="/services/digital-marketing/meta-ads"
            element={<MetaAds />}
          />
          <Route
            path="/services/digital-marketing/google-campaigns"
            element={<GoogleCampign />}
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
