<template>
    <div class="main-container">

        <HeaderStyleTwo class="header-fluid" />

        <OffCanvasMobileMenu />

        <HeroBanner />

        <OnlineCoachingLessons />

        <TeacherQuote />

        <CounterupWithTestimonial />

        <VideoStyleOne />

        <CurrentSignatureCourse />

        <BlogStyleOne />

        <BrandLogoCarousel />

        <FooterStyleOne addClassName="light-color" addBackgroundColor="bg-navy-blue" />

    </div>
</template>

<script>
    export default {
        components: {
            HeaderStyleTwo: () => import('@/components/HeaderStyleTwo'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            HeroBanner: () => import('@/components/HeroBanner'),
            OnlineCoachingLessons: () => import('@/components/OnlineCoachingLessons'),
            TeacherQuote: () => import('@/components/TeacherQuote'),
            CounterupWithTestimonial: () => import('@/components/CounterupWithTestimonial'),
            VideoStyleOne: () => import('@/components/VideoStyleOne'),
            CurrentSignatureCourse: () => import('@/components/CurrentSignatureCourse'),
            BlogStyleOne: () => import('@/components/BlogStyleOne'),
            BrandLogoCarousel: () => import('@/components/BrandLogoCarousel'),
            FooterStyleOne: () => import('@/components/FooterStyleOne'),
        },

        head() {
            return {
                title: 'MaxCoach Education'
            }
        },
    };
</script>


