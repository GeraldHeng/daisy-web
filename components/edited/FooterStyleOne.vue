<template>
  <div class="footer-section" :class="addBackgroundColor">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-md-5 max-mb-50">
          <div class="footer-widget" :class="addClassName">
            <h4 class="footer-widget-title">Address</h4>
            <div class="footer-widget-content">
              <div class="content">
                <p>Demsey Road 8D</p>
                <p>+65 67043534 (9am - 8pm EST)</p>
                <p>
                  <a href="mailto:info@example.com">info@daisykids.com</a>
                </p>
              </div>
              <div class="footer-social-inline">
                <a href="https://www.facebook.com/" target="_blank">
                  <i class="fab fa-facebook-square"></i>
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-md-4 col-sm-7 max-mb-50">
          <div class="footer-widget" :class="addClassName">
            <h4 class="footer-widget-title">Explore</h4>
            <div class="footer-widget-content">
              <ul class="column-2">
                <li>
                  <n-link to="/daisy/home#programme"> Programmes</n-link>
                </li>

                <li>
                  <n-link to="/daisy/about-us">About</n-link>
                </li>

                <li>
                  <n-link to="/daisy/home#faq">FAQ</n-link>
                </li>

                <li>
                  <n-link to="/daisy/contact-us">Contact us</n-link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- <div class="col-xl-3 col-md-3 col-sm-5 col-12 max-mb-50">
          <div class="footer-widget" :class="addClassName">
            <h4 class="footer-widget-title">Information</h4>
            <div class="footer-widget-content">
              <ul>
                <li>
                  <n-link to="">Membership</n-link>
                </li>
                <li>
                  <n-link to="">Purchase guide</n-link>
                </li>
                <li>
                  <n-link to="">Privacy policy</n-link>
                </li>
                <li>
                  <n-link to="">Terms of service</n-link>
                </li>
              </ul>
            </div>
          </div>
        </div> -->
      </div>

      <!-- Footer Copyright Start -->
      <div class="row max-mt-20">
        <div class="col">
          <p class="copyright">
            &copy; {{ new Date().getFullYear() }} <b>Daisy</b> Made with
            <i class="fa fa-heart text-danger"></i> by
            <a href="https://dancersdreamstudio.com/" target="_blank"
              ><b>Dancer's Dream Studio</b></a
            >
          </p>
        </div>
      </div>
      <!-- Footer Copyright End -->
    </div>

    <client-only>
      <back-to-top class="scroll-top" bottom="30px">
        <i class="arrow-top fal fa-long-arrow-up"></i>
        <i class="arrow-bottom fal fa-long-arrow-up"></i>
      </back-to-top>
    </client-only>
  </div>
</template>

<script>
export default {
  props: ["addClassName", "addBackgroundColor"],
};
</script>