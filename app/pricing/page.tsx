import Menu from "../components/menu";
import Maintenance from "../components/maintenance";

export const metadata = {
  title: "Pricing | Noor Technologies",
  description:
    "Explore website development, software, design and website maintenance pricing at Noor Technologies.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white text-[#111111]">
      {/* Pricing Page Header */}
      <section className="border-b border-[#E5E5E5] px-4 pb-6 pt-10 sm:px-8 sm:pb-8 sm:pt-14 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#079E9A]">
            NOOR TECHNOLOGIES / INVESTMENT
          </p>

          <h1 className="mt-3 text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-[0.95] tracking-[-0.07em]">
            Clear pricing.
            <br />
            <span className="text-[#079E9A]">Real solutions.</span>
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-6 text-[#555555] sm:text-base">
            Explore our services and pricing to find the right solution for
            your business. Need something custom? Contact us for a quote.
          </p>
        </div>
      </section>

      {/* Services and Pricing */}
      <Menu />

      {/* Maintenance Plans */}
      <Maintenance />
    </main>
  );
}