import React from 'react';
import { Link } from 'react-router-dom';

const FooterSection = ({ title, links }) => (
  <div className="flex overflow-hidden flex-col flex-1 shrink basis-0">
    <h3 className="text-base font-semibold text-black">{title}</h3>
    <nav className="flex flex-col mt-4 w-full text-sm text-black">
      {links.map((link, index) => (
        <Link key={index} to={link.href} className="flex-1 shrink py-2 w-full whitespace-nowrap">
          {link.text}
        </Link>
      ))}
    </nav>
  </div>
);

const Footer = () => {
  const sections = [
    {
      title: "About Us",
      links: [
        { text: "Contact", href: "/contact" },
        { text: "FAQ", href: "/faq" },
        { text: "Support", href: "/support" },
        { text: "Terms", href: "/terms" },
        { text: "Privacy", href: "/privacy" }
      ]
    },
    {
      title: "Resources",
      links: [
        { text: "Blog", href: "/blog" },
        { text: "Guides", href: "/guides" },
        { text: "Tutorials", href: "/tutorials" },
        { text: "Help Center", href: "/help" },
        { text: "Community", href: "/community" }
      ]
    },
    {
      title: "Partners",
      links: [
        { text: "Affiliates", href: "/affiliates" },
        { text: "Investors", href: "/investors" },
        { text: "Careers", href: "/careers" },
        { text: "Press", href: "/press" },
        { text: "Events", href: "/events" }
      ]
    }
  ];

  return (
    <footer className="flex overflow-hidden flex-col py-20 pr-16 pl-16 mt-7 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-start w-full min-h-[248px] max-md:max-w-full">
        <div className="flex flex-wrap flex-1 shrink gap-10 items-start basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex overflow-hidden flex-col flex-1 shrink items-start basis-0">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9008086bdaebbd151c53a8505b8ea333e53ed3e6813000387a931155e7d71bd5?placeholderIfAbsent=true&apiKey=525aac9cf92746e7a7350665a34e7ffc" alt="Company logo" className="object-contain aspect-[2.33] w-[63px]" />
          </div>
          {sections.map((section, index) => (
            <FooterSection key={index} {...section} />
          ))}
        </div>
        <div className="flex flex-col min-w-[240px] w-[500px] max-md:max-w-full">
          <div className="flex flex-col w-full text-base text-black max-md:max-w-full">
            <h3 className="font-semibold max-md:max-w-full">Subscribe</h3>
            <p className="mt-4 max-md:max-w-full">
              Join our community to stay updated on the latest news and releases.
            </p>
          </div>
          <form className="flex flex-col mt-6 w-full max-md:max-w-full">
            <div className="flex flex-wrap gap-4 items-start w-full text-base max-md:max-w-full">
              <label htmlFor="emailInput" className="sr-only">Enter email address</label>
              <input
                type="email"
                id="emailInput"
                className="flex-1 shrink gap-2 self-stretch p-3 bg-white border border-black border-solid basis-6 min-w-[240px] text-stone-500"
                placeholder="Enter email address"
                aria-label="Enter email address"
              />
              <button type="submit" className="gap-2 self-stretch px-6 py-3 text-black whitespace-nowrap border border-black border-solid w-[119px] max-md:px-5">
                Subscribe
              </button>
            </div>
            <p className="mt-4 text-xs leading-5 text-black max-md:max-w-full">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </form>
        </div>
      </div>
      <div className="flex flex-col mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex w-full bg-black border border-black border-solid min-h-[1px] max-md:max-w-full" />
      </div>
    </footer>
  );
};

export default Footer;