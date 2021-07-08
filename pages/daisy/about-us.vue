<template>
  <div class="main-container">
    <Header />

    <OffCanvasMobileMenu />

    <AboutUsOne />

    <AboutVideoOne addClassName="pt-0" />

    <NewsletterOne />

    <FooterStyleOne />
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import("@/components/edited/Header"),
    OffCanvasMobileMenu: () =>
      import("@/components/edited/OffCanvasMobileMenu"),
    AboutUsOne: () => import("@/components/edited/AboutUsOne"),
    AboutVideoOne: () => import("@/components/edited/AboutVideoOne"),
    NewsletterOne: () => import("@/components/edited/NewsletterOne"),
    FooterStyleOne: () => import("@/components/edited/FooterStyleOne"),
    // PageBannerOne: () => import("@/components/PageBannerOne"),
    // TestimonialStyleTwo: () => import("@/components/TestimonialStyleTwo"),
    // TeamStyleTwo: () => import("@/components/TeamStyleTwo"),
    // CallToActionOne: () => import("@/components/CallToActionOne"),
    
  },

  head() {
    return {
      title: "About Us",
    };
  },
};
</script>


