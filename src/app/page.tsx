import Hero from "@/components/landing/Hero";
import Comparison from "@/components/landing/Comparison";
import ProductLifecycle from "@/components/landing/ProductLifecycle";
import WhyUs from "@/components/landing/WhyUs";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Comparison />
      <ProductLifecycle />
      <WhyUs />
      <Footer />
    </>
  );
}
