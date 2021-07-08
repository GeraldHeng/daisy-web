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
                        <li class="current">Courses Grid 01</li>
                    </ul>
                </div>
            </div>

            <div class="page-title">
                <div class="container">
                    <h1 class="title">Courses Grid 01</h1>
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
                        <CourseItem :course="course" />
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
                title: 'Course Grid One'
            }
        },
    };
</script>

<style lang="scss">
    .vs__dropdown-toggle {
        background-color: #f5f5f5;
        border-color: #f5f5f5;
    }
    .vs__actions {
        padding: 4px 15px 0 3px;
    }
    .v-select {
        width: 300px;
    }
    .vs__search, 
    .vs__search:focus {
        width: 100%;
        padding: 0;
        margin: 0;
        border: none;
    }
    .vs__search {
        flex: 1 0;
        background-color: transparent !important;
        border: none;
        height: 50px;
    }
    input.vs__search {
        min-height: 0;
        border: none;
        padding: 0;
    }
    .vs__dropdown-toggle {
        padding: 0;
    }
    .vs__selected {
        margin: 0;
        padding: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
    .vs__dropdown-menu {
        padding: 0;
        li {
            padding: 10px;
            &:hover,
            .active {
                background-color: $primary;
            }
        }
    }
    .vs__selected-options {
        padding: 0 15px;
    }
    .vs__dropdown-option--highlight {
        background: $primary;
    }

</style>


