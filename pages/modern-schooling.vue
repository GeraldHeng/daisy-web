<template>
    <div class="main-container">

        <HeaderTransparent />

        <OffCanvasMobileMenu />

        <HeroModernSchooling />

        <CourseOne />

        <FaqWithAccordion />

        <CounterUpFour addClassName="bg-f8f8f8 pb-0" />

        <SignatureCoursesTwo />

        <ImageContentBox />

        <ImageContentBoxTwo />

        <UpcomingEvents />

        <TestimonialStyleSeven />

        <CallToActionOne addClassName="bg-f8f8f8" />

        <FooterStyleOne />

    </div>
</template>

<script>
    export default {
        components: {
            HeaderTransparent: () => import('@/components/HeaderTransparent'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            HeroModernSchooling: () => import('@/components/HeroModernSchooling'),
            CourseOne: () => import('@/components/CourseOne'),
            FaqWithAccordion: () => import('@/components/FaqWithAccordion'),
            CounterUpFour: () => import('@/components/CounterUpFour'),
            SignatureCoursesTwo: () => import('@/components/SignatureCoursesTwo'),
            ImageContentBox: () => import('@/components/ImageContentBox'),
            ImageContentBoxTwo: () => import('@/components/ImageContentBoxTwo'),
            UpcomingEvents: () => import('@/components/UpcomingEvents'),
            TestimonialStyleSeven: () => import('@/components/TestimonialStyleSeven'),
            CallToActionOne: () => import('@/components/CallToActionOne'),
            FooterStyleOne: () => import('@/components/FooterStyleOne'),
        },

        head() {
            return {
                title: 'Modern schooling'
            }
        },
    };
</script>




