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
                        <li class="current">Become a Teacher</li>
                    </ul>
                </div>
            </div>
        </div>

        <CallToActionTwo />

        <CounterUpFour :style="{ backgroundColor: '#f5f5f5' }" />

        <!-- Hero Image Section Start -->
        <div class="hero-image-section position-relative bg-f5f5f5">
            <div class="container">
                <div class="hero-image-wrapper">
                    <img class="image" src="/images/others/hero-image.png" alt="image">
                </div>
            </div>

            <!-- Section Bottom Shape Start -->
            <div class="section-bottom-shape d-md-block d-none">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" height="100">
                    <path class="elementor-shape-fill" d="M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0"></path>
                </svg>
            </div>
            <!-- Section Bottom Shape End -->
        </div>
        <!-- Hero Image Section End -->

        <Gradation />

        <!-- Become An Instructor Section Start -->
        <div class="become-an-instructor-section section-padding" :style="{ backgroundImage: `url('/images/bg/become-a-teache-bg.jpg')` }">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 offset-xl-6">
                        <div class="instructor-register-from">
                            <h4 class="title">Register to become an Intructor</h4>
                            <InstructorRegisterForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Become An Instructor Section End -->

        <FooterStyleOne />

    </div>
</template>

<script>
    
    export default {
        components: {
            HeaderStyleTwo: () => import('@/components/HeaderStyleTwo'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            CallToActionTwo: () => import('@/components/CallToActionTwo'),
            CounterUpFour: () => import('@/components/CounterUpFour'),
            Gradation: () => import('@/components/Gradation'),
            InstructorRegisterForm: () => import('@/components/InstructorRegisterForm'),
            FooterStyleOne: () => import('@/components/FooterStyleOne'),
        },

        head() {
            return {
                title: 'Become a Teacher'
            }
        },
    };
</script>


