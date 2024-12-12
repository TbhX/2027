"use client";

import { WebHero } from "@/components/web/hero";
import { ServiceDetails } from "@/components/web/service-details";
import { ContactForm } from "@/components/web/contact-form";
import { FAQ } from "@/components/web/faq";
import { Footer } from "@/components/web/footer";
import { WebNav } from "@/components/web/nav";

export default function WebPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="fixed inset-0 bg-[url('/cyber-grid.svg')] opacity-10 pointer-events-none" />
      <WebNav />
      <div className="relative">
        <WebHero />
        <div id="services">
          <ServiceDetails />
        </div>
        <div id="pricing">
          <ContactForm />
        </div>
        <div id="faq">
          <FAQ />
        </div>
        <Footer />
      </div>
    </div>
  );
}