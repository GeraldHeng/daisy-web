<template>
    <div class="cta-section section-padding" :class="addClassName">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="cta-content text-center">
                        <span class="sub-title">Start today for getting <span>Online Certification</span></span>
                        <h2 class="title">You can be your own guiding star with our help!</h2>
                        <n-link to="/" class="btn btn-primary btn-hover-secondary btn-width-300">Get started for free</n-link>
                        <!-- Animation Shape Start -->
                        <ShapeWithAnimation addClassName="shape-1" dataDepth="4" />
                        <ShapeWithAnimation addClassName="shape-2" dataDepth="4" imgSrc="/images/shape-animation/cta-shape-01.png" />
                        <ShapeWithAnimation addClassName="shape-3" dataDepth="4" imgSrc="/images/shape-animation/nwesletter-shape-2.png" />
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