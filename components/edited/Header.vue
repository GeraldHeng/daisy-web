<template>
  <header
    class="header-section header-shadow"
    :class="{ 'is-sticky': isSticky }"
  >
    <div class="header-inner">
      <div class="container position-relative">
        <div class="row justify-content-between align-items-center">
          <!-- Header Logo Start -->
          <div class="col-xl-3 col-auto">
            <div class="header-logo">
              <n-link to="/daisy/home#home">
                <img
                  class="dark-logo"
                  src="/images/logo/dark-logo.png"
                  alt="logo dark"
                  style="width: auto; height: 60px"
                />
                <img
                  class="light-logo"
                  src="/images/logo/light-logo.png"
                  alt="logo light"
                  style="width: auto; height: 60px"
                />
              </n-link>
            </div>
          </div>
          <!-- Header Logo End -->

          <!-- Header Main Menu Start -->
          <div class="col d-none d-xl-block position-static">
            <Navigation />
          </div>
          <!-- Header Main Menu End -->

          <!-- Header Right Start -->

          <div class="col-xl-3 col-auto">
            <div class="header-right">
              <div class="inner">
                <!-- Newsletter button start -->

                <n-link
                  class="d-none d-sm-block"
                  to="/daisy/home#newsletter"
                >
                  <a class="btn btn-primary btn-hover-secondary btn-sm">
                    Join our Newsletter!
                    <i class="far fa-long-arrow-right ml-3"></i>
                  </a>
                </n-link>
                <!-- Newsletter button end -->

                <!-- Header Mobile Menu Toggle Start -->
                <div class="header-mobile-menu-toggle d-xl-none ml-sm-2">
                  <button
                    class="toggle"
                    @click="mobiletoggleClass('addClass', 'show-mobile-menu')"
                  >
                    <i class="icon-top"></i>
                    <i class="icon-middle"></i>
                    <i class="icon-bottom"></i>
                  </button>
                </div>
                <!-- Header Mobile Menu Toggle End -->
              </div>
            </div>
          </div>
          <!-- Header Right End -->
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  components: {
    Navigation: () => import("@/components/edited/Navigation"),
  },

  data() {
    return {
      isSticky: false,
      isHidden: true,
    };
  },

  mounted() {
    window.addEventListener("scroll", () => {
      let scrollPos = window.scrollY;
      if (scrollPos >= 200) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    });
  },

  methods: {
    // offcanvas mobilemenu
    mobiletoggleClass(addRemoveClass, className) {
      const el = document.querySelector("#offcanvas-menu");
      if (addRemoveClass === "addClass") {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },
  },
};
</script>