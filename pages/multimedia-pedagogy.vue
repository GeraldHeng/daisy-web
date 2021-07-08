<template>
    <div class="main-container">

        <HeaderStyleTwo />

        <OffCanvasMobileMenu />

        <HeroMultimediaPedagogy />

        <LeranerGallery />

        <CounterUpThree />

        <VideoStyleTwo />

        <SignatureCourses />

        <TestimonialStyleFour />

        <SignatureCourseCarousel />

        <BlogStyleThree />

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
            HeroMultimediaPedagogy: () => import('@/components/HeroMultimediaPedagogy'),
            LeranerGallery: () => import('@/components/LeranerGallery'),
            CounterUpThree: () => import('@/components/CounterUpThree'),
            VideoStyleTwo: () => import('@/components/VideoStyleTwo'),
            SignatureCourses: () => import('@/components/SignatureCourses'),
            TestimonialStyleFour: () => import('@/components/TestimonialStyleFour'),
            SignatureCourseCarousel: () => import('@/components/SignatureCourseCarousel'),
            BlogStyleThree: () => import('@/components/BlogStyleThree'),
            BrandLogoCarousel: () => import('@/components/BrandLogoCarousel'),
            NewsletterTwo: () => import('@/components/NewsletterTwo'),
            FooterStyleOne: () => import('@/components/FooterStyleOne'),
        },

        head() {
            return {
                title: 'Multimedia Pedagogy'
            }
        },
    };
</script>


