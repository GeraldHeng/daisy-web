<template>
  <div class="section-padding">
    <div class="container">
      <!-- Section Title Start -->
      <SectionHeader
        alignment="text-center"
        subTitle="Start Your Kids Learning Journey"
        title="Build Their Dream <span>TODAY</span>"
      />
      <!-- Section Title End -->

      <!-- Feature Wrapper Start -->
      <div class="row row-cols-xl-4 row-cols-sm-2 row-cols-1 max-mb-n30">
        <div
          class="col max-mb-30"
          data-aos="fade-up"
          v-for="course in courses"
          :key="course.title"
        >
          <n-link to="/" class="icon-box h5-icon-box text-center">
            <div class="icon">
              <img :src="course.imgSrc" :alt="course.alt" />
            </div>
            <div class="content">
              <h3 class="title">{{ course.title }}</h3>
              <div class="desc">
                <p>{{ course.desc }}</p>
              </div>
              <!-- <span class="link">
                Start here
                <i class="far fa-long-arrow-right"></i>
              </span> -->
            </div>
          </n-link>
        </div>
      </div>
      <!-- Feature Wrapper End -->
    </div>
  </div>
</template>

<script>
export default {
  components: {
    SectionHeader: () => import("@/components/SectionHeader"),
  },

  data() {
    return {
      courses: [
        {
          title: "Dance course 1",
          desc: "course description 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis est quam, vel rhoncus nunc eleifend sit amet.",
          imgSrc: "/images/learner/home-5-image-box-01.png",
          alt: "icon",
        },
        {
          title: "Art & Craft course 2",
          desc: "course description 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis est quam, vel rhoncus nunc eleifend sit amet.",
          imgSrc: "/images/learner/home-5-image-box-02.png",
          alt: "icon",
        },
        {
          title: "Fitness course 3",
          desc: "course description 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis est quam, vel rhoncus nunc eleifend sit amet.",
          imgSrc: "/images/learner/home-5-image-box-03.png",
          alt: "icon",
        },
        {
          title: "Exploration course 4",
          desc: "course description 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis est quam, vel rhoncus nunc eleifend sit amet.",
          imgSrc: "/images/learner/home-5-image-box-04.png",
          alt: "icon",
        },
      ],
    };
  },
};
</script>