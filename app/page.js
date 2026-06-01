import Hero from "@/components/home/hero";
import Presentation from "@/components/home/presentation";
import BannerImage from "@/components/home/bannerImage";
import CallToAction from "@/components/home/callToAction";

export default function Home() {
  return (
    <main>
      <Hero />
      <Presentation />
      <BannerImage />
      <CallToAction />
    </main>
  );
}