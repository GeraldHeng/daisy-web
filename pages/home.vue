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
    Header: () => import("@/components/Header"),
    OffCanvasMobileMenu: () =>
      import("@/components/OffCanvasMobileMenu"),
    HeroCoursePortal: () => import("@/components/HeroCoursePortal"),
    CourseOne: () => import("@/components/CourseOne"),
    FaqWithAccordion: () => import("@/components/FaqWithAccordion"),
    NewsletterOne: () => import("@/components/NewsletterOne"),
    FooterStyleOne: () => import("@/components/FooterStyleOne"),
  },

  head() {
    return {
      title: "Welcome",
    };
  },
};
</script>


