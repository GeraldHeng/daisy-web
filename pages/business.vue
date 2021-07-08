<template>
    <div class="main-container">

        <HeaderStyleTwo class="header-fluid" />

        <OffCanvasMobileMenu />

        <HeroBusiness />

        <FeatureStyleTwo />

        <ServiceStyleTwo />

        <CourseStyleTwo />

        <FaqWithVideo />

        <UpcomingEvents />

        <TestimonialStyleTwo />

        <NewsletterOne />

        <FooterStyleOne />

    </div>
</template>

<script>
    export default {
        components: {
            HeaderStyleTwo: () => import('@/components/HeaderStyleTwo'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            HeroBusiness: () => import('@/components/HeroBusiness'),
            FeatureStyleTwo: () => import('@/components/FeatureStyleTwo'),
            CourseStyleTwo: () => import('@/components/CourseStyleTwo'),
            ServiceStyleTwo: () => import('@/components/ServiceStyleTwo'),
            FaqWithVideo: () => import('@/components/FaqWithVideo'),
            UpcomingEvents: () => import('@/components/UpcomingEvents'),
            TestimonialStyleTwo: () => import('@/components/TestimonialStyleTwo'),
            NewsletterOne: () => import('@/components/NewsletterOne'),
            FooterStyleOne: () => import('@/components/FooterStyleOne'),
        },

        head() {
            return {
                title: 'Business'
            }
        },
    };
</script>



