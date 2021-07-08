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
                        <li class="current">Blog Grid</li>
                    </ul>
                </div>
            </div>

            <div class="page-title">
                <div class="container">
                    <h1 class="title">Blog Grid</h1>
                </div>
            </div>
        </div>

        <!-- Blog Section Start -->
        <div class="section-padding-bottom">
            <div class="container">
                <div class="row row-cols-lg-3 row-cols-md-2 row-cols-1 max-mb-n30">
                    <div class="col max-mb-30" data-aos="fade-up" v-for="blog in blogData.blogs" :key="blog.id">
                        <BlogPostCaptionBottom :blog="blog" />
                    </div>
                </div>

                <!-- Pagination Start -->
                <div class="row max-mt-50">
                    <div class="col">
                        <paginate
                            :page-count="2"
                            :page-range="3"
                            :margin-pages="2"
                            :prev-text="'Prev'"
                            :next-text="'Next'"
                            :container-class="'pagination center'"
                            :page-class="'page-item'">
                        </paginate>
                    </div>
                </div>
                <!-- Pagination End -->
            </div>
        </div>
        <!-- Blog Section End -->

        <FooterStyleOne />

    </div>
</template>

<script>
    import blogData from '~/data/blog'
    
    export default {
        components: {
            HeaderStyleTwo: () => import('@/components/HeaderStyleTwo'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            BlogPostCaptionBottom: () => import('@/components/BlogPostCaptionBottom'),
            FooterStyleOne: () => import('@/components/FooterStyleOne'),
        },

        data () {
            return {
                blogData
            }
        },

        head() {
            return {
                title: 'Blog Grid'
            }
        },
    };
</script>

