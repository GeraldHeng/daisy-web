<template>
    <div class="main-container">

        <HeaderTransparent class="header-light header-sticky-bg-dark" />

        <OffCanvasMobileMenu />

        <HeroRemoteTraining />

        <TestimonialStyleFive addClassName="section-padding-top-320 bg-pattern" bgImg="backgroundImage: url('/images/bg/background-pattern-grid-line.png')" />

        <CounterUpFour addClassName="bg-pattern pb-0" bgImg="backgroundImage: url('/images/bg/background-pattern-grid-line.png')" />

        <ServiceOne />

        <FeaturedOnlineCourses />

        <TestimonialStyleSix />

        <BrandLogoCarouselTwo />

        <BlogStyleThree />
        
        <FeatureStyleOne />

        <ServiceImage />

        <CtaStyleOne />

        <FooterStyleOne />

    </div>
</template>

<script>
    export default {
        components: {
            HeaderTransparent: () => import('@/components/HeaderTransparent'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            HeroRemoteTraining: () => import('@/components/HeroRemoteTraining'),
            TestimonialStyleFive: () => import('@/components/TestimonialStyleFive'),
            CounterUpFour: () => import('@/components/CounterUpFour'),
            ServiceOne: () => import('@/components/ServiceOne'),
            FeaturedOnlineCourses: () => import('@/components/FeaturedOnlineCourses'),
            TestimonialStyleSix: () => import('@/components/TestimonialStyleSix'),
            BrandLogoCarouselTwo: () => import('@/components/BrandLogoCarouselTwo'),
            BlogStyleThree: () => import('@/components/BlogStyleThree'),
            FeatureStyleOne: () => import('@/components/FeatureStyleOne'),
            ServiceImage: () => import('@/components/ServiceImage'),
            CtaStyleOne: () => import('@/components/CtaStyleOne'),
            FooterStyleOne: () => import('@/components/FooterStyleOne'),
        },

        head() {
            return {
                title: 'Remote Training'
            }
        },
    };
</script>


