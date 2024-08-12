import InfoList from "@/components/Cards/InfoList";
import ContactForm from "@/components/Forms/ContactForm";
import NewsletterSubscriptionForm from "@/components/Forms/NewsletterSubscriptionForm";
import { contact_data } from "@/data/contacts";
import { ContactImage } from "@/public/images";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft, faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const IconItem = ({ icon, value, name }) => {
  return (
    <div className="grid text-center">
      <FontAwesomeIcon
        className="w-10 h-10 xl:w-12 xl:h-12 mx-auto text-theme-six"
        icon={icon}
      />
      <span className="font-semibold text-lg xl:text-2xl tracking-wide font-hannari">
        {value}
      </span>
      <small className="uppercase font-poppins mt-2 text-[10px]">{name}</small>
    </div>
  );
};

export default function ContactPage() {
  return (
    <>
      <header className="container py-6 xl:py-10 mt-8 xl:mt-20">
        <div className="grid xl:grid-cols-2 gap-y-10 items-center">
          <div className="xl:pr-12">
            <div className="mb-4 xl:mb-8">
              <h3 className="subtitle">contact us</h3>
              <h2 className="primary-heading">Got questions or feedback?</h2>
              <p>
                Reach out to our dedicated support team for prompt assistance
              </p>
            </div>
            <div className="space-y-4 mb-8">
              {contact_data.map((value, i) => {
                return (
                  <InfoList
                    key={i}
                    name={value.name}
                    value={value.value}
                    icon={value.icon}
                  />
                );
              })}
            </div>

            <div>
              <h3 className="subtitle">follow me</h3>
              <div className="flex gap-6">
                <IconItem
                  name={"subscribers"}
                  icon={faYoutube}
                  value={"1.2M+"}
                />
                <IconItem
                  name={"followers"}
                  icon={faInstagram}
                  value={"1.8M+"}
                />
                <IconItem name={"readers"} icon={faWifi} value={"80k"} />
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </header>

      <section className="container">
        <div className="grid xl:grid-cols-[3fr_5fr] gap-5 xl:gap-10 pt-4 xl:pt-10">
          <div>
            <Image src={ContactImage} alt="contact image" />
          </div>
          <div>
            <button className="mb-4 text-theme-six">
              <FontAwesomeIcon icon={faQuoteLeft} className="text-2xl" />
            </button>
            <h2 className="primary-heading">
              <span>Iconic Structures: </span>
              <span>Redefining Modern Architecture</span>
            </h2>
            <p className="my-5 text-sm xl:text-base">
              we don&apos;t just build buildings; we craft experiences. With a
              fusion of innovation, elegance, and sustainability, we redefine
              modern architecture, creating timeless landmarks that inspire awe
              and admiration. Elevate your vision with our unparalleled
              expertise and passion for pushing the boundaries of design. With
              an unwavering commitment to excellence, our team combines
              visionary design with cutting-edge technology to create spaces
              that transcend the ordinary. From concept to completion, we invite
              you to join us in shaping the future of architecture.
            </p>
            <div>
              <h6 className="font-medium">Riya Sen Kapoor</h6>
              <span className="text-xs text-slate-500 font-medium">
                FOUNDER
              </span>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSubscriptionForm />
    </>
  );
}
