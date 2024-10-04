/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SearchArea from "../components/SearchArea";
import PropertyGridHome from "../components/PropertyGridHome";
import FeatureSection from "../components/FeatureSection";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";

function Index() {
  return (
      <div className="flex overflow-hidden flex-col bg-white">
        <Header />
        <div>
          <Hero />
          <SearchArea />
          <section>
            <h2 className="self-center mt-16 text-3xl font-bold leading-tight text-center text-black max-md:mt-10">
              Top Properties on Sale
            </h2>
            <PropertyGridHome />
          </section>
          <FeatureSection
            title="Transparent Bidding Platform for Mortgage Properties"
            description="Experience a secure and transparent bidding platform for loan mortgages. Our platform provides a seamless and efficient process for buying and selling loan mortgage vehicles from banks."
            features={[
              {
                title: "Efficient",
                description:
                  "Streamline your loan mortgage transactions with our secure and transparent platform.",
              },
              {
                title: "Convenient",
                description:
                  "Access a wide range of loan mortgage vehicles from reputable banks in one place.",
              },
            ]}
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?placeholderIfAbsent=true&apiKey=525aac9cf92746e7a7350665a34e7ffc"
          />
          <FeatureSection
            title="Quick Buying Platform for Mortgage Properties"
            description="Quick Buying Platform offers a fast and easy way to secure mortgage loans. Compare rates, get personalized quotes, and apply online—all in one place. Simplify your vehicle buying journey with trusted sellers and instant approvals."
            features={[
              {
                title: "Efficient",
                description:
                  "Streamline your loan mortgage transactions with our secure and transparent platform.",
              },
              {
                title: "Convenient",
                description:
                  "Access a wide range of loan mortgage vehicles from reputable banks in one place.",
              },
            ]}
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?placeholderIfAbsent=true&apiKey=525aac9cf92746e7a7350665a34e7ffc"
          />
          <section className="self-center w-full max-w-[1312px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/695e35fe9375ed813e9267c48b6e6e0ed2c5303c0a4eb46842040dcb8370ac1e?placeholderIfAbsent=true&apiKey=525aac9cf92746e7a7350665a34e7ffc"
                  alt="Mortgage property illustration"
                  className="object-contain grow w-full aspect-[0.96] max-md:mt-10 max-md:max-w-full"
                />
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
                  <div className="flex flex-col text-right text-black min-h-[249px] max-md:max-w-full">
                    <h2 className="text-4xl font-bold leading-10 max-md:max-w-full">
                      Discover the Advantages of Buying Properties through Our
                      _____
                    </h2>
                    <p className="mt-6 text-lg leading-7 max-md:max-w-full">
                      Explore our extensive network of banks to find the perfect
                      vehicle for your needs. With our streamlined bidding and
                      selling process, you can enjoy a hassle-free experience.
                    </p>
                  </div>
                  <a
                    href="#learn-more"
                    className="gap-2 self-end px-6 py-3 text-base text-blue-600 border border-blue-600 border-solid max-md:px-5"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </section>
          <HowItWorks />
          {/* <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9e3d280d562e6bee20695261157815864881196741bce89bb53d6d50efc8d68?placeholderIfAbsent=true&apiKey=525aac9cf92746e7a7350665a34e7ffc"
            alt="Property showcase"
            className="object-contain self-center mt-36 w-full aspect-[1.78] max-w-[1312px] max-md:mt-10 max-md:max-w-full"
          /> */}
        </div>
        <Footer />
      </div>

  );
};

export default Index;
