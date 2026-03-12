import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CanvasCursor from "./components/Cursor";
import ScrollTop from "@/components/ui/ScrollTop";
import FloatingWhatsapp from "./components/FloatingWatsapp";

// ✅ Import Toaster
import { Toaster } from "react-hot-toast";

// Lazy-loaded routes
const Services = React.lazy(() => import("./pages/Services"));
const Blog = React.lazy(() => import("./pages/Blog"));
const Contact = React.lazy(() => import("./pages/Contact"));
const About = React.lazy(() => import("./pages/About"));
const WebDevelopment = React.lazy(() => import("./pages/services/WebDevelopment"));
const UiUxDesign = React.lazy(() => import("./pages/services/UiUxDesign"));
const MobileApps = React.lazy(() => import("./pages/services/MobileApps"));
const SeoMarketing = React.lazy(() => import("./pages/services/DigitalMarketing"));
const Seo = React.lazy(() => import("./pages/DigitalMarketing/Seo"));
const EmailMarketing = React.lazy(() => import("./pages/DigitalMarketing/EmailMarketing"));
const ContentMarketing = React.lazy(() => import("./pages/DigitalMarketing/ContentMarketing"));
const SocialMediaMarketing = React.lazy(() => import("./pages/DigitalMarketing/SocialMediaMarketing"));
const MetaAds = React.lazy(() => import("./pages/DigitalMarketing/MetaAds"));
const GoogleCampign = React.lazy(() => import("./pages/DigitalMarketing/GoogleCampign"));
const Careers = React.lazy(() => import("./pages/Careers"));
const Privacy = React.lazy(() => import("@/pages/Privacy"));
const Terms = React.lazy(() => import("./pages/Terms"));
const BlogPost = React.lazy(() => import("./pages/BlogPost"));

// Minimal loading indicator to avoid layout jumps
const PageLoader = () => (
  <div className="flex justify-center items-center py-32 min-h-[50vh]">
    <div className="w-8 h-8 rounded-full animate-spin border-4 border-slate-200 border-t-teal-500"></div>
  </div>
);

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

        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms-and-conditions" element={<Terms />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/ui-ux" element={<UiUxDesign />} />
            <Route path="/services/mobile-apps" element={<MobileApps />} />
            <Route path="/services/seo-marketing" element={<SeoMarketing />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/digital-marketing/seo" element={<Seo />} />
            <Route path="/services/digital-marketing/email-marketing" element={<EmailMarketing />} />
            <Route path="/services/digital-marketing/content-marketing" element={<ContentMarketing />} />
            <Route path="/services/digital-marketing/social-media" element={<SocialMediaMarketing />} />
            <Route path="/services/digital-marketing/meta-ads" element={<MetaAds />} />
            <Route path="/services/digital-marketing/google-campaigns" element={<GoogleCampign />} />
          </Routes>
        </Suspense>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
