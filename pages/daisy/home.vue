<template>
  <div class="main-container">
    <Header />

    <OffCanvasMobileMenu />

    <HeroCoursePortal id="home" />

    <CourseOne id="programme" />

    <FaqWithAccordion id="faq" />

    <NewsletterOne id="newsletter" />

    <FooterStyleOne />
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import("@/components/edited/Header"),
    OffCanvasMobileMenu: () =>
      import("@/components/edited/OffCanvasMobileMenu"),
    HeroCoursePortal: () => import("@/components/edited/HeroCoursePortal"),
    CourseOne: () => import("@/components/edited/CourseOne"),
    FaqWithAccordion: () => import("@/components/edited/FaqWithAccordion"),
    NewsletterOne: () => import("@/components/edited/NewsletterOne"),
    FooterStyleOne: () => import("@/components/edited/FooterStyleOne"),
  },

  head() {
    return {
      title: "Welcome",
    };
  },
};
</script>


