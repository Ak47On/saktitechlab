import FAQSection from "@/components/faq/FAQSection";

export default function FAQPage() {

  return (

    <main className="min-h-screen bg-black text-white pt-28">

      {/* HERO */}

      <section className="text-center px-6 mb-20">

        <h1 className="text-5xl md:text-7xl font-bold mb-6">

          Frequently Asked Questions

        </h1>

        <p className="text-white/60 max-w-2xl mx-auto text-lg">

          Everything you need to know about our
          services, development process,
          pricing and support.

        </p>

      </section>

      {/* FAQ SECTION */}

      <FAQSection />

    </main>

  );
}
