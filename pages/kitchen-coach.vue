<template>
    <div class="main-container">

        <HeaderTop />

        <HeaderStyleWithSocial />

        <OffCanvasMobileMenu />

        <HeroKitchenCoach />

        <AboutCooking />

        <BrandLogoCarouselThree />

        <CallToActionFour />

        <KitchenOnlineCourse />

        <CookingFundamentals />

        <SignatureCourseCarouselTwo />

        <NewsletterFour />

        <TestimonialStyleEleven />

        <InstagramStyleTwo />

        <FooterStyleOne addBackgroundColor="bg-f8f8f8" />

    </div>
</template>

<script>
    export default {
        components: {
            HeaderTop: () => import('@/components/HeaderTop'),
            HeaderStyleWithSocial: () => import('@/components/HeaderStyleWithSocial'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            HeroKitchenCoach: () => import('@/components/HeroKitchenCoach'),
            AboutCooking: () => import('@/components/AboutCooking'),
            BrandLogoCarouselThree: () => import('@/components/BrandLogoCarouselThree'),
            CallToActionFour: () => import('@/components/CallToActionFour'),
            KitchenOnlineCourse: () => import('@/components/KitchenOnlineCourse'),
            CookingFundamentals: () => import('@/components/CookingFundamentals'),
            SignatureCourseCarouselTwo: () => import('@/components/SignatureCourseCarouselTwo'),
            NewsletterFour: () => import('@/components/NewsletterFour'),
            TestimonialStyleEleven: () => import('@/components/TestimonialStyleEleven'),
            InstagramStyleTwo: () => import('@/components/InstagramStyleTwo'),
            FooterStyleOne: () => import('@/components/FooterStyleOne'),
        },

        head() {
            return {
                title: 'Kitchen Coach'
            }
        },
    };
</script>


