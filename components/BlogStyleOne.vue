<template>
    <div class="blog-section section-padding bg-pattern-one bg-f5f5f5" :style="{ backgroundImage: `url('/images/bg/maxcoach-shape-03.png')` }">
        <div class="container blog-shape-animation">
            <!-- Section Title Start -->
            <div class="section-title text-center" data-aos="fade-up">
                <span class="sub-title">study with your favorite tutors</span>
                <h2 class="title">Secrets of learning revealed in blogs</h2>
            </div>
            <!-- Section Title End -->
            <div class="row isotope-grid">
                <!-- <div class="grid-sizer col-1"></div> -->
                <div class="col-xl-3 col-md-6 grid-item" data-aos="fade-up">
                    <div class="blog-2 mt-150 mt-md-0 mt-sm-0 mt-xs-0 mb-30">
                        <div class="thumbnail">
                            <n-link to="/blog/blog-details" class="image">
                                <img src="/images/blog/270/blog-01.jpg" alt="Blog Image">
                            </n-link>
                        </div>
                        <div class="info">
                            <n-link to="/blog/blog-details" class="category">Online Education</n-link>
                            <h3 class="title">
                                <n-link to="/blog/blog-details">Become a Better Blogger: Content Planning</n-link>
                            </h3>
                            <ul class="meta">
                                <li><i class="far fa-calendar"></i>Dec 11, 2019</li>
                                <li><i class="far fa-eye"></i>47 views</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-md-6 plr-40 grid-item" data-aos="fade-up">
                    <div class="blog-2 mb-30">
                        <div class="thumbnail overlay-thumb">
                            <n-link to="/blog/blog-details" class="image">
                                <img src="/images/blog/500/blog-03.jpg" alt="Blog Image">
                            </n-link>
                        </div>
                        <div class="info content-absolute">
                            <n-link to="/blog/blog-details" class="category">Learning Strategies</n-link>
                            <h3 class="title">
                                <n-link to="/blog/blog-details">Five Essential Online Learning Strategies</n-link>
                            </h3>
                            <ul class="meta">
                                <li><i class="far fa-calendar"></i>Dec 11, 2019</li>
                                <li><i class="far fa-eye"></i>32 views</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6 grid-item" data-aos="fade-up">
                    <div class="blog-2 mt-50 mt-sm-0 mt-xs-0 mb-30">
                        <div class="thumbnail">
                            <n-link to="/blog/blog-details" class="image">
                                <img src="/images/blog/270/blog-02.jpg" alt="Blog Image">
                            </n-link>
                        </div>
                        <div class="info">
                            <n-link to="/blog/blog-details" class="category">Learning Strategies</n-link>
                            <h3 class="title">
                                <n-link to="/blog/blog-details">Five Essential Online Learning Strategies</n-link>
                            </h3>
                            <ul class="meta">
                                <li><i class="far fa-calendar"></i>Dec 11, 2019</li>
                                <li><i class="far fa-eye"></i>32 views</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row max-mt-70">
                <div class="text-center col-lg-7 mx-auto">
                    <n-link to="/blog/blog-details" class="link link-lg">
                        Get into details now?​ 
                        <mark>
                            View all posts 
                            <i class="far fa-long-arrow-right"></i>
                        </mark>
                    </n-link>
                </div>
            </div>

            <!-- Animation Shape Start -->
            <ShapeWithAnimation addClassName="shape-1" dataDepth="4" />
            <ShapeWithAnimation addClassName="shape-2" dataDepth="-3" imgSrc="/images/shape-animation/shape-3.png" />
            <ShapeWithAnimation addClassName="shape-3" dataDepth="3" imgSrc="/images/shape-animation/shape-2.svg" />
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            ShapeWithAnimation: () => import('@/components/ShapeWithAnimation'),
        },
    };
</script>