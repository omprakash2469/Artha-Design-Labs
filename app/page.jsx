import Blogs from "@/components/Home/Blogs";
import ContactUs from "@/components/Home/ContactUs";
import Faqs from "@/components/Home/Faqs";
import FeaturesProjects from "@/components/Home/FeaturesProjects";
import MainHeader from "@/components/Home/MainHeader";
import Testimonials from "@/components/Home/Testimonials";
import WhoWeAre from "@/components/Home/WhoWeAre";

export default function Home() {
  return (
    <>
      <MainHeader />
      <WhoWeAre />
      <FeaturesProjects />
      <Faqs />
      <Blogs />
      <ContactUs />
      <Testimonials />
    </>
  );
}
