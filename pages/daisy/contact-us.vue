<template>
  <div class="main-container">
    <Header />

    <OffCanvasMobileMenu />

    <div class="page-title-section section-padding-top-0">
      <div class="page-breadcrumb position-static">
        <div class="container">
          <ul class="breadcrumb">
            <li>
              <n-link to="/">Home</n-link>
            </li>
            <li class="current">Contact Us</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="contact-information-section section-padding-bottom">
      <div class="container">
        <div class="row margin-bottom-85">
          <div class="col-12">
            <div class="contact-title max-width-740">
              <h2 class="title">{{ contactData.infoHeading }}</h2>
            </div>
          </div>
        </div>
        <div
          class="row row-30 row-cols-lg-3 row-cols-md-2 row-cols-1 max-mb-n30"
        >
          <div class="col max-mb-30">
            <div class="contact-info">
              <div class="icon">
                <i class="fal fa-map-marker-alt"></i>
              </div>
              <div class="info">
                <h4 class="title">{{ contactData.address.title }}</h4>
                <span class="info-text">{{
                  contactData.address.location
                }}</span>
              </div>
            </div>
          </div>
          <div class="col max-mb-30">
            <div class="contact-info">
              <div class="icon">
                <i class="fal fa-phone"></i>
              </div>
              <div class="info">
                <h4 class="title">{{ contactData.contact.title }}</h4>
                <span class="info-text">
                  Mobile: <strong>{{ contactData.contact.mobileNo }}</strong>
                  <br />
                  Hotline: <strong>{{ contactData.contact.hotline }}</strong>
                  <br />
                  Mail:
                  <a href="mailto:hello@hasthemes.com">{{
                    contactData.contact.email
                  }}</a>
                </span>
              </div>
            </div>
          </div>
          <div class="col max-mb-30">
            <div class="contact-info">
              <div class="icon">
                <i class="fal fa-clock"></i>
              </div>
              <div class="info">
                <h4 class="title">{{ contactData.workingHour.title }}</h4>
                <span class="info-text">
                  <p>{{ contactData.workingHour.dayOne }}</p>
                  <p>{{ contactData.workingHour.dayTwo }}</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="google-map-area">
      <div class="container">
        <GoogleMap />
      </div>
    </div>

    <div class="contact-form-section section-padding text-center">
      <div class="container">
        <div class="row">
          <div class="offset-lg-2 col-lg-8">
            <div class="contact-title max-width-600">
              <h2 class="title">{{ contactData.contactFormHeader }}</h2>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>

    <FooterStyleOne />
  </div>
</template>

<script>
import contactData from "~/data/contact.json";

export default {
  components: {
    Header: () => import("@/components/edited/Header"),
    OffCanvasMobileMenu: () =>
      import("@/components/edited/OffCanvasMobileMenu"),
    GoogleMap: () => import("@/components/GoogleMap"),
    ContactForm: () => import("@/components/ContactForm"),
    FooterStyleOne: () => import("@/components/edited/FooterStyleOne"),
  },

  data() {
    return {
      contactData,
    };
  },

  head() {
    return {
      title: "Contact Us",
    };
  },
};
</script>


