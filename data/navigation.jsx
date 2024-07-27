import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  ABOUT_US,
  BLOGS,
  COMMERCIAL_SERVICES,
  CONTACT_US,
  HOSPITALITY_SERVICES,
  INSTITUTIONAL_SERVICES,
  INTERIOR_STYLING_SERVICES,
  PROJECTS,
  RENOVATION_SERVICES,
  RESIDENTIAL_SERVICES,
  SERVICES,
  URBAN_PLANNING_SERVICES,
} from "./urls";
import {
  faEnvelope,
  faGlobe,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export const primaryNavbar = [
  {
    link: "/",
    name: "Home",
  },
  {
    link: ABOUT_US,
    name: "About Us",
  },
  {
    link: SERVICES,
    name: "Services",
  },
  {
    link: PROJECTS,
    name: "Projects",
  },
  {
    link: BLOGS,
    name: "Blogs",
  },
  {
    link: CONTACT_US,
    name: "Contact Us",
  },
];

// Social Media Links
export const social_media = [
  {
    icon: faXTwitter,
    link: "https://twitter.com",
  },
  {
    icon: faFacebook,
    link: "https://twitter.com",
  },
  {
    icon: faYoutube,
    link: "https://twitter.com",
  },
  {
    icon: faInstagram,
    link: "https://twitter.com",
  },
];

// Footer Links
export const usefulLinks = [
  {
    name: "About Us",
    link: "/about-us",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
  {
    name: "Contact Us",
    link: "/contact-us",
  },
  {
    name: "FAQs",
    link: "/faqs",
  },
];

export const our_servcies = [
  {
    name: "Residential",
    link: RESIDENTIAL_SERVICES,
  },
  {
    name: "Commercial",
    link: COMMERCIAL_SERVICES,
  },
  {
    name: "Hospitality",
    link: HOSPITALITY_SERVICES,
  },
  {
    name: "Institutional",
    link: INSTITUTIONAL_SERVICES,
  },
  {
    name: "Urban Planning",
    link: URBAN_PLANNING_SERVICES,
  },
  {
    name: "Interior Styling and Decoration",
    link: INTERIOR_STYLING_SERVICES,
  },
  {
    name: "Renovation and Restoration",
    link: RENOVATION_SERVICES,
  },
];

export const footer_location = [
  {
    icon: faLocation,
    name: "5th Floor, KFC Building, Gumtala Sub Urban, D - Block, Ranjit Avenue, Amritsar, Punjab 143001",
    link: "#",
  },
  {
    icon: faGlobe,
    name: "www.arthalabs.com",
    link: "https://www.arthalabs.com",
  },
  {
    icon: faEnvelope,
    name: "contact@arthadesignlabs.com",
    link: "mailto:contact@arthadesignlabs.com",
  },
  {
    icon: faPhone,
    name: "+91 9814227724",
    link: "tel:9814227724",
  },
];
