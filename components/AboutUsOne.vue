<template>
    <div class="about-section section-padding-top-190 section-padding-bottom" :class="addClassName">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 order-lg-1 order-2">
                    <div class="about-content mt-sm-50 mt-xs-50">
                        <span class="sub-title">Get to know about <strong>MaxCoach</strong></span>
                        <h2 class="title">Learn about our <span>Work Culture</span> at MaxCoach</h2>
                        <p>Spend some time to visit our website or head office and discover our current courses, enrollment procedure, and registration deadline. We're opening new classes every beginning of each month.</p>
                        <n-link to="" class="link link-lg"> 
                            Have questions?​ <mark> Get Free Form <i class="far fa-long-arrow-right"></i></mark>
                        </n-link>
                    </div>
                </div>

                <div class="col-lg-6 order-lg-1 order-1">
                    <div class="about-image">
                        <div class="about-image-one">
                            <img src="/images/about/about01/about1.jpg" alt="about-01">
                        </div>
                        <div class="about-image-two">
                            <img src="/images/about/about01/about2.jpg" alt="about-02">
                        </div>

                        <!-- Animation Shape Start -->
                        <ShapeWithAnimation addClassName="shape-1" dataDepth="4" />
                        <ShapeWithAnimation addClassName="shape-2" dataDepth="4" imgSrc="/images/shape-animation/about-shape-1.png" />
                        <ShapeWithAnimation addClassName="shape-3" dataDepth="4" imgSrc="/images/shape-animation/nwesletter-shape-2.png" />
                        <ShapeWithAnimation addClassName="shape-4" dataDepth="4" imgSrc="/images/shape-animation/shape-1.png" />
                        <!-- Animation Shape End -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['addClassName'],

        components: {
            ShapeWithAnimation: () => import('@/components/ShapeWithAnimation'),
        },
    }
</script>