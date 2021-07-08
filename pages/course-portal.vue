<template>
    <div class="main-container">

        <HeaderStyleTwo />

        <OffCanvasMobileMenu />

        <HeroCoursePortal />

        <BrandLogoCarousel />

        <FeaturedOnlineCourses />

        <SmartTutoringProgram />

        <VideoCompanionship />

        <TestimonialStyleTwo class="pb-0" />

        <CallToActionOne addClassName="bg-f8f8f8" />

        <CounterupOne />

        <BlogStyleTwo />

        <NewsletterOne />

        <FooterStyleOne />

    </div>
</template>

<script>
    export default {
        components: {
            HeaderStyleTwo: () => import('@/components/HeaderStyleTwo'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            HeroCoursePortal: () => import('@/components/HeroCoursePortal'),
            BrandLogoCarousel: () => import('@/components/BrandLogoCarousel'),
            FeaturedOnlineCourses: () => import('@/components/FeaturedOnlineCourses'),
            SmartTutoringProgram: () => import('@/components/SmartTutoringProgram'),
            VideoCompanionship: () => import('@/components/VideoCompanionship'),
            TestimonialStyleTwo: () => import('@/components/TestimonialStyleTwo'),
            CallToActionOne: () => import('@/components/CallToActionOne'),
            CounterupOne: () => import('@/components/CounterupOne'),
            BlogStyleTwo: () => import('@/components/BlogStyleTwo'),
            NewsletterOne: () => import('@/components/NewsletterOne'),
            FooterStyleOne: () => import('@/components/FooterStyleOne'),
        },

        head() {
            return {
                title: 'Course Portal'
            }
        },
    };
</script>


