<template>
    <div class="main-container">

        <HeaderStyleLogoCenter />

        <OffCanvasMobileMenu />

        <HeroDistantLearning />

        <AboutUsOne addClassName="bg-f5f5f5" />

        <CounterupTwo />

        <AboutVideoOne addClassName="bg-f5f5f5" />

        <LatestOnlineCourses />

        <TestimonialStyleThree />

        <TeamStyleOne />

        <BlogStyleThree />

        <NewsletterOne />

        <FooterStyleOne />

    </div>
</template>

<script>
    export default {
        components: {
            HeaderStyleLogoCenter: () => import('@/components/HeaderStyleLogoCenter'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            HeroDistantLearning: () => import('@/components/HeroDistantLearning'),
            AboutUsOne: () => import('@/components/AboutUsOne'),
            CounterupTwo: () => import('@/components/CounterupTwo'),
            AboutVideoOne: () => import('@/components/AboutVideoOne'),
            LatestOnlineCourses: () => import('@/components/LatestOnlineCourses'),
            TestimonialStyleThree: () => import('@/components/TestimonialStyleThree'),
            TeamStyleOne: () => import('@/components/TeamStyleOne'),
            BlogStyleThree: () => import('@/components/BlogStyleThree'),
            NewsletterOne: () => import('@/components/NewsletterOne'),
            FooterStyleOne: () => import('@/components/FooterStyleOne'),
        },

        head() {
            return {
                title: 'Distance Learning'
            }
        },
    };
</script>


