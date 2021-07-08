<template>
    <div class="intro1-section section-fluid" :style="{backgroundImage: `url('/images/intro/intro1/bg-1.jpg')`}">
        <div class="container">
            <div class="row row-cols-md-2 row-cols-1 max-mb-n30">
                <!-- Intro One Content Start -->
                <div class="col align-self-center max-mb-30">
                    <div class="intro1-content text-center text-md-left">
                        <span class="sub-title">MaxCoach is the lifebuoy</span>
                        <h2 class="title">In Mentoring <br>2B a Better You.</h2>
                        <div class="desc">
                            <p>The right mentoring relationship can be a powerful tool for professional growth. Bark up the right tree.</p>
                        </div>
                        <a class="btn btn-primary btn-hover-secondary" href="/images/sample.pdf" target="_blank">
                            <i class="far fa-download mr-3"></i>
                            Download free guide
                        </a>
                    </div>
                </div>
                <!-- Intro One Content End -->

                <!-- Intro One Course Start -->
                <div class="col max-mb-30">
                    <div class="intro1-course">
                        <img class="popular-course-icon" src="/images/intro/intro1/intro-popular-course.png" alt="image">
                        <!-- Course Start -->
                        <div class="course-2">
                            <div class="thumbnail">
                                <n-link to="/" class="image">
                                    <img src="/images/courses/370/course-2.jpg" alt="Course Image">
                                </n-link>
                            </div>
                            <div class="info">
                                <span class="price">Free</span>
                                <span class="date">Sep 23, 2020</span>
                                <h3 class="title">
                                    <n-link to="/">Customer-centric Info-Tech Strategies</n-link>
                                </h3>
                                <div class="desc">
                                    <p>Now more than ever, corporations are investing heavily in IT. The quality of these investments affects the daily…</p>
                                </div>
                            </div>
                        </div>
                        <!-- Course End -->

                        <ShapeWithAnimation addClassName="intro1-scene" dataDepth="3" imgSrc="/images/shape-animation/shape-1.png" />
                    </div>
                </div>
                <!-- Intro One Course End -->

            </div>
        </div>

        <!-- Section Bottom Shape Start -->
        <div class="section-bottom-shape">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" height="100">
                <path d="M 0 0 L100 0 Q 50 200 0 0"></path>
            </svg>
        </div>
        <!-- Section Bottom Shape End -->
    </div>
</template>

<script>
    export default {
        components: {
            ShapeWithAnimation: () => import('@/components/ShapeWithAnimation'),
        },
    }
</script>