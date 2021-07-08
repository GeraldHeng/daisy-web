<template>
    <div class="main-container">

        <HeaderTransparentTwo class="header-light header-sticky-bg-dark" />

        <OffCanvasMobileMenu />

        <SearchPopupFullscreen />

        <HeroGymCoaching />

        <CounterUpFive />

        <LearnGym />

        <GymOnlineCourse />

        <AboutApp />

        <BrandLogoCarousel :style="{ backgroundColor: '#161821' }" />

        <TestimonialStyleTen />

        <BlogStyleFive />

        <CallToActionThree />

        <FooterStyleOne addClassName="light-color" :style="{ backgroundColor: '#171621' }" />

    </div>
</template>

<script>
    export default {
        components: {
            HeaderTransparentTwo: () => import('@/components/HeaderTransparentTwo'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopupFullscreen: () => import('@/components/SearchPopupFullscreen'),
            HeroGymCoaching: () => import('@/components/HeroGymCoaching'),
            CounterUpFive: () => import('@/components/CounterUpFive'),
            LearnGym: () => import('@/components/LearnGym'),
            GymOnlineCourse: () => import('@/components/GymOnlineCourse'),
            AboutApp: () => import('@/components/AboutApp'),
            BrandLogoCarousel: () => import('@/components/BrandLogoCarousel'),
            TestimonialStyleTen: () => import('@/components/TestimonialStyleTen'),
            BlogStyleFive: () => import('@/components/BlogStyleFive'),
            CallToActionThree: () => import('@/components/CallToActionThree'),
            FooterStyleOne: () => import('@/components/FooterStyleOne'),
        },

        head() {
            return {
                title: 'Gym Coaching'
            }
        },
    };
</script>


