<template>
  <div class="popup-mobile-menu popup-mobile-visiable" id="offcanvas-menu">
    <div
      class="mobile-menu-overlay"
      @click="mobiletoggleClass('removeClass', 'show-mobile-menu')"
    ></div>
    <div class="inner custom-scrollbar">
      <div class="mobile-header">
        <div class="logo">
          <n-link to="/">
            <img src="/images/logo/dark-logo.png" alt="site logo" />
          </n-link>
        </div>
        <button
          class="mobile-close-btn"
          @click="mobiletoggleClass('removeClass', 'show-mobile-menu')"
        ></button>
      </div>
      <div class="menu-content">
        <MobileNavigation />

        <!-- Newsletter button start -->
        <n-link
          class="mt-25 d-block d-sm-none"
          to="/daisy/home#newsletter"
        >
          <a class="btn btn-primary btn-hover-light btn-sm">
            Join our Newsletter!
            <i class="far fa-long-arrow-right ml-3"></i>
          </a>
        </n-link>
        <!-- Newsletter button end -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    MobileNavigation: () => import("@/components/edited/MobileNavigation"),
  },

  methods: {
    // offcanvas menu close
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