/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Header from "../components/Header";
import PropertyDetails from "../components/PropertyDetails";
import PropertyDescription from "../components/PropertyDescription";
import Footer from "../components/Footer";

function PropertyPage() {
  return (
    <div className="flex overflow-hidden flex-col items-center bg-white">
      <Header />
      <main>
        <PropertyDetails />
        <PropertyDescription />
      </main>
      <Footer />
    </div>
  );
}

export default PropertyPage;
