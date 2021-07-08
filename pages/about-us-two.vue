<template>
    <div class="main-container">

        <HeaderStyleTwo />

        <OffCanvasMobileMenu />

        <div class="page-title-section section-padding-top-0">
            <div class="page-breadcrumb position-static">
                <div class="container">
                    <ul class="breadcrumb">
                        <li>
                            <n-link to="/">Home</n-link>
                        </li>
                        <li class="current">About Us 02</li>
                    </ul>
                </div>
            </div>
        </div>

        <TestimonialStyleFive />

        <CounterUpFour />

        <VideoAbout class="pt-0" style="backgroundImage: linear-gradient(180deg,#fff 0%,#f5f5f5 100%)" />

        <!-- Learners Section Start -->
        <div class="learners-section section-padding pt-0">
            <div class="container">
                <!-- Section Title Start -->
                <div class="section-title text-center" data-aos="fade-up">
                    <span class="sub-title">Learn at your Pace</span>
                    <h2 class="title">Enjoyable <span>Benefits</span> For Our Learners.</h2>
                </div>
                <!-- Section Title End -->

                <div class="row row-cols-xl-3 row-cols-sm-2 row-cols-1 max-mb-n30">
                    <div class="col max-mb-30" data-aos="fade-up" v-for="learner in learners" :key="learner.id">
                        <LearnGalleryItem :learner="learner" />
                    </div>
                </div>
            </div>
        </div>
        <!-- Learners Section End -->

        <TestimonialStyleFour />

        <BrandLogoCarousel />

        <NewsletterTwo />

        <FooterStyleOne />

    </div>
</template>

<script>
    export default {
        components: {
            HeaderStyleTwo: () => import('@/components/HeaderStyleTwo'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            TestimonialStyleFive: () => import('@/components/TestimonialStyleFive'),
            CounterUpFour: () => import('@/components/CounterUpFour'),
            VideoAbout: () => import('@/components/VideoAbout'),
            TestimonialStyleFour: () => import('@/components/TestimonialStyleFour'),
            BrandLogoCarousel: () => import('@/components/BrandLogoCarousel'),
            NewsletterTwo: () => import('@/components/NewsletterTwo'),
            FooterStyleOne: () => import('@/components/FooterStyleOne'),
            LearnGalleryItem: () => import('@/components/LearnGalleryItem'),
        },

        data () {
            return {
                learners: [
                    {
                        id: 1,
                        iconSrc: "/images/learner/learner-01.png",
                        alt: "icon",
                        title: "Customize Freely to Your Preferences",
                        text: "Learners are given the right to arrange and customize their study schedule and timetable based on preferences.",
                    },
                    {
                        id: 2,
                        iconSrc: "/images/learner/learner-02.png",
                        alt: "icon",
                        title: "Cloud Storage or Download Lessons to Devices",
                        text: "You can store online lessons via online cloud or download to your device and revise lessons on the way.",
                    },
                    {
                        id: 3,
                        iconSrc: "/images/learner/learner-03.png",
                        alt: "icon",
                        title: "Multimedia Study Materials & Info Channels",
                        text: "We provide study materials with various formats: video, audio, slides, doc, prints, books and applications.",
                    }
                ]
            }
        },

        head() {
            return {
                title: 'About Us'
            }
        },
    };
</script>


