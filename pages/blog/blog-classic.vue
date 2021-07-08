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
                        <li class="current">Blog Classic</li>
                    </ul>
                </div>
            </div>

            <div class="page-title">
                <div class="container">
                    <h1 class="title">Blog Classic</h1>
                </div>
            </div>
        </div>

        <!-- Blog Section Start -->
        <div class="section-padding-bottom fix">
            <div class="container">
                <div class="row max-mb-n50">
                    <div class="col-lg-8 col-12 order-lg-2 max-mb-50">
                        <!-- Blog Wrapper Start -->
                        <div class="row row-cols-1 no-gutters">
                            <div class="blog-3 col" data-aos="fade-up" v-for="blog in blogData.blogClassic" :key="blog.id">
                                <div class="thumbnail">
                                    <n-link to="/blog/blog-details" class="image">
                                        <img :src="blog.imgSrc" :alt="blog.title">
                                    </n-link>
                                </div>
                                <div class="info">
                                    <n-link to="/blog/blog-details" class="category">{{ blog.category }}</n-link>
                                    <h3 class="title">
                                        <n-link to="/blog/blog-details">{{ blog.title }}</n-link>
                                    </h3>
                                    <ul class="meta">
                                        <li>
                                            <n-link to="/blog/blog-details">
                                                <img :src="blog.avatar" alt="image" class="avatar">
                                                {{ blog.name }}
                                            </n-link>
                                        </li>
                                        <li><i class="far fa-calendar"></i>{{ blog.date }}</li>
                                        <li><i class="far fa-eye"></i>{{ blog.view }}</li>
                                    </ul>
                                    <div class="desc">
                                        <p>{{ blog.desc }}</p>
                                    </div>
                                    <div class="row justify-content-between max-mt-30">
                                        <div class="col-auto">
                                            <n-link to="/blog/blog-details" class="btn btn-primary btn-hover-secondary">Read More</n-link>
                                        </div>
                                        <div class="col-auto">
                                            <div class="post-share">
                                                <span class="label">Share this post</span>
                                                <div class="media">
                                                    <span class="icon">
                                                        <i class="fas fa-share-alt"></i>
                                                    </span>
                                                    <div class="list">
                                                        <a href="https://www.facebook.com/" target="_blank">
                                                            <i class="fab fa-facebook-f"></i>
                                                        </a>
                                                        <a href="https://twitter.com/" target="_blank">
                                                            <i class="fab fa-twitter"></i>
                                                        </a>
                                                        <a href="https://www.linkedin.com/" target="_blank">
                                                            <i class="fab fa-linkedin"></i>
                                                        </a>
                                                        <a href="https://www.instagram.com/" target="_blank">
                                                            <i class="fab fa-instagram"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Blog Wrapper End -->

                        <!-- Pagination Start -->
                        <div class="row">
                            <div class="col">
                                <paginate
                                    :page-count="3"
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

                    <div class="col-lg-4 col-12 order-lg-1 max-mb-50">
                        <BlogSidebar :blog="blogData.blogs" :tag="blogData.tags" />
                    </div>

                </div>
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
            BlogSidebar: () => import('@/components/BlogSidebar'),
            FooterStyleOne: () => import('@/components/FooterStyleOne'),
        },

        data () {
            return {
                blogData
            }
        },

        head() {
            return {
                title: 'Blog Classic'
            }
        },
    };
</script>

