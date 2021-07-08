<template>
    <div class="main-container">

        <HeaderStyleTwo class="header-fluid" />

        <OffCanvasMobileMenu />

        <HeroHealthCoaching />

        <FeaturesLifeStyle />

        <ServiceStyleThree />

        <CourseStyleThree />

        <TestimonialStyleEight />

        <EventStyleTwo />

        <BlogStyleFour />

        <NewsletterThree />

        <InstagramStyleOne />

        <FooterStyleOne addBackgroundColor="bg-f8f8f8" />

    </div>
</template>

<script>
    export default {
        components: {
            HeaderStyleTwo: () => import('@/components/HeaderStyleTwo'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            HeroHealthCoaching: () => import('@/components/HeroHealthCoaching'),
            FeaturesLifeStyle: () => import('@/components/FeaturesLifeStyle'),
            ServiceStyleThree: () => import('@/components/ServiceStyleThree'),
            CourseStyleThree: () => import('@/components/CourseStyleThree'),
            TestimonialStyleEight: () => import('@/components/TestimonialStyleEight'),
            EventStyleTwo: () => import('@/components/EventStyleTwo'),
            BlogStyleFour: () => import('@/components/BlogStyleFour'),
            NewsletterThree: () => import('@/components/NewsletterThree'),
            InstagramStyleOne: () => import('@/components/InstagramStyleOne'),
            FooterStyleOne: () => import('@/components/FooterStyleOne'),
        },

        head() {
            return {
                title: 'Health Coaching'
            }
        },
    };
</script>


