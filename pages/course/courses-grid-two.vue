<template>
    <div class="main-container">

        <HeaderStyleTwo />

        <OffCanvasMobileMenu />

        <div class="page-title-section section-padding-top-0">
            <div class="page-breadcrumb">
                <div class="container">
                    <ul class="breadcrumb">
                        <li>
                            <n-link to="/">Home</n-link>
                        </li>
                        <li class="current">Courses Grid 02</li>
                    </ul>
                </div>
            </div>

            <div class="page-title">
                <div class="container">
                    <h1 class="title">Courses Grid 02</h1>
                </div>
            </div>
        </div>

        <div class="section-padding-bottom">
            <div class="container">
                <!-- Course Top Bar Start -->
                <div class="row justify-content-between align-items-center max-mb-20">
                    <div class="col-sm-auto col-12 max-mb-10">
                        <p class="result-count">We found <span>22</span> courses available for you</p>
                    </div>
                    <div class="col-sm-auto col-12 max-mb-10">
                        <v-select :options="options" :placeholder="getSelectorPlaceholder"></v-select>
                    </div>
                </div>
                <!-- Course Top Bar End -->

                <!-- Courses Wrapper Start -->
                <div class="row row-cols-lg-3 row-cols-md-2 row-cols-1 max-mb-n30">
                    <div class="col max-mb-30" data-aos="fade-up" v-for="course in courseData.coursePostItem" :key="course.id">
                        <div class="course-2">
                            <div class="thumbnail">
                                <n-link to="/" class="image">
                                    <img :src="course.image" :alt="course.title + 'Thumbnail'">
                                </n-link>
                            </div>
                            <div class="info">
                                <span class="price">{{ course.price }}</span>
                                <span class="date">{{ course.date }}</span>
                                <h3 class="title">
                                    <n-link to="/">{{ course.title }}</n-link>
                                </h3>
                                <ul class="meta">
                                    <li>
                                        <i class="far fa-file-alt"></i>
                                        {{ course.lessons }}
                                    </li>
                                    <li>
                                        <i class="far fa-user-alt"></i>
                                        {{ course.students }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Courses Wrapper End -->

                <div class="row max-mt-50">
                    <div class="col text-center">
                        <button class="btn btn-outline-primary load-more-btn">
                            Load More 
                            <i class="fal fa-redo ml-3"></i>
                        </button>
                    </div>
                </div>

            </div>
        </div>

        <FooterStyleOne />

    </div>
</template>

<script>
    import courseData from '~/data/courses'
    
    export default {
        components: {
            HeaderStyleTwo: () => import('@/components/HeaderStyleTwo'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            FooterStyleOne: () => import('@/components/FooterStyleOne'),
        },

        data () {
            return {
                courseData,
                options: [
                    'Popularity', 
                    'Latest',
                    'Price: low to high',
                    'Price: high to low'
                ],
                placeholderItem: 'Default'
            }
        },

        computed: {
            getSelectorPlaceholder: function () {
                return this.placeholderItem
            }
        },

        head() {
            return {
                title: 'Course Grid Two'
            }
        },
    };
</script>


