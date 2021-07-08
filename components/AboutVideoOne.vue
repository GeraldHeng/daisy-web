<template>
    <div class="about-video-section section-padding-top section-padding-bottom-160" :class="addClassName">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-8">
                    <div class="about-me-video-wrapper about-us-one-video pr-55 pr-sm-0 pr-xs-0">
                        <!-- About Me Video Start -->
                        <client-only>
                            <silent-box :image="videos[0]">
                                <template v-slot:silentbox-item>
                                    <div class="about-me-video video-popup">
                                        <img class="image" src="/images/video/about-video.jpg" alt="image">
                                        <img class="icon" src="/images/icons/icon-youtube-play.png" alt="icon">
                                    </div>
                                </template>
                            </silent-box>
                        </client-only>
                        <!-- About Me Video End -->

                        <!-- Animation Shape Start -->
                        <ShapeWithAnimation addClassName="shape-1" dataDepth="3" imgSrc="/images/shape-animation/shape-2.svg" />
                        <ShapeWithAnimation addClassName="shape-2" dataDepth="-3" imgSrc="/images/shape-animation/shape-3.png" />
                        <ShapeWithAnimation addClassName="shape-3" dataDepth="4" />
                        <ShapeWithAnimation addClassName="shape-4" dataDepth="4" imgSrc="/images/shape-animation/shape-1.png" />
                        <!-- Animation Shape End -->
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="about-content mt-sm-50 mt-xs-50">
                        <span class="sub-title">how we work</span>
                        <h2 class="title">Upgrade Your Skills <span>Upgrade Your Life</span> </h2>
                        <p>Spend some time to visit our website or head office and discover our current courses, enrollment procedure, and registration deadline. We're opening new classes every beginning of each month. </p>
                        <n-link to="" class="link link-lg">
                            <mark>Download free guidebook <i class="far fa-long-arrow-right"></i></mark>
                        </n-link>
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

        data () {
            return {
                videos: [
                    {
                        src: 'https://www.youtube.com/watch?v=9No-FiEInLA',
                        thumbnail: ""
                    }
                ],
            }
        }
    };
</script>