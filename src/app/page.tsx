import connectDB from "@/lib/mongodb";

import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Portfolio from "@/components/portfolio/Portfolio";
import Testimonials from "@/components/testimonials/Testimonials";
import WhyChoose from "@/components/whychoose/WhyChoose";
import Process from "@/components/process/Process";
import ContactCTA from "@/components/contactcta/ContactCTA";
import ContactForm from "@/components/contact/ContactForm";
import Footer from "@/components/footer/Footer";
import FloatingWhatsapp from "@/components/common/FloatingWhatsapp";

export default async function Home() {

  await connectDB();

  return (
    <main>

      <Navbar />

      <Hero />

      <Services />

      <Portfolio />

      <Testimonials />

      <WhyChoose />

      <Process />

      <ContactCTA />

      <ContactForm />

      <Footer />

      <FloatingWhatsapp />

    </main>
  );
}