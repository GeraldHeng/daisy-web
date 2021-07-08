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
    Header: () => import("@/components/Header"),
    OffCanvasMobileMenu: () => import("@/components/OffCanvasMobileMenu"),
    AboutUsOne: () => import("@/components/AboutUsOne"),
    AboutVideoOne: () => import("@/components/AboutVideoOne"),
    NewsletterOne: () => import("@/components/NewsletterOne"),
    FooterStyleOne: () => import("@/components/FooterStyleOne"),
  },

  head() {
    return {
      title: "About Us",
    };
  },
};
</script>


