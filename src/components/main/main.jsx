import React from "react";
import { BannerTop } from "./banner-top/banner-top";
import { ClientsList } from "./clients-list/clients-list";
import { OurWork } from "./our-work/our-work";
import { AboutUs } from "./about-us/about-us";
import { OurSolutions } from "./our-solutions/our-solutions";
import { FormSection } from "./form-section/form-section";
export const Main = () => {
  return (
    <section>
      <BannerTop />
      <ClientsList />
      <OurWork />
      <AboutUs />
      <OurSolutions />
      <FormSection />
    </section>
  );
};
