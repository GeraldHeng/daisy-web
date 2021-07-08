<template>
    <div class="main-container">

        <HeaderStyleTwo />

        <OffCanvasMobileMenu />

        <div class="page-title-section section-padding-top-0 bg-f5f5f5">
            <div class="page-breadcrumb position-static">
                <div class="container">
                    <ul class="breadcrumb">
                        <li>
                            <n-link to="/">Home</n-link>
                        </li>
                        <li class="current">About Me</li>
                    </ul>
                </div>
            </div>
        </div>

        <OnlineCoachingLessons class="bg-f5f5f5" />

        <VideoAbout />

        <TestimonialStyleNine class="pt-0" />

        <BrandLogoCarousel class="pt-0" />

        <CounterUpFour :style="{ backgroundColor: '#f5f7fa' }" />

        <NewsletterOne />

        <FooterStyleOne addClassName="light-color" addBackgroundColor="bg-navy-blue" />

    </div>
</template>

<script>
    export default {
        components: {
            HeaderStyleTwo: () => import('@/components/HeaderStyleTwo'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            OnlineCoachingLessons: () => import('@/components/OnlineCoachingLessons'),
            VideoAbout: () => import('@/components/VideoAbout'),
            TestimonialStyleNine: () => import('@/components/TestimonialStyleNine'),
            BrandLogoCarousel: () => import('@/components/BrandLogoCarousel'),
            CounterUpFour: () => import('@/components/CounterUpFour'),
            NewsletterOne: () => import('@/components/NewsletterOne'),
            FooterStyleOne: () => import('@/components/FooterStyleOne'),
        },

        head() {
            return {
                title: 'About Me'
            }
        },
    };
</script>


