<template>
    <div class="main-container">

        <HeaderStyleTwo />

        <OffCanvasMobileMenu />

        <div class="page-title-section section-padding-top-0">
            <div class="page-breadcrumb position-static">
                <div class="container">
                    <ul class="breadcrumb">
                        <li>
                            <n-link to="/">Home</n-link>
                        </li>
                        <li class="current">Contact Me</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="contact-information-section section-padding-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="contact-title">
                            <span class="sub-title">Get excited already?</span>
                            <h2 class="title">Reach me!</h2>
                        </div>

                        <div class="contact-info-wrap max-mb-n50">
                            <!-- Single Contact Info Start -->
                            <div class="contact-info max-mb-50">
                                <div class="icon">
                                    <i class="fal fa-map-marker-alt"></i>
                                </div>
                                <div class="info">
                                    <h4 class="title"> Address</h4>
                                    <span class="info-text"> Your address goes here</span>
                                </div>
                            </div>
                            <!-- Single Contact Info End -->

                            <!-- Single Contact Info Start -->
                            <div class="contact-info max-mb-50">
                                <div class="icon">
                                    <i class="fal fa-phone"></i>
                                </div>
                                <div class="info">
                                    <h4 class="title">Contact</h4>
                                    <span class="info-text"> 
                                        Mobile: <strong>0123456789</strong>
                                        <br> 
                                        Hotline: <strong>0123456789</strong>
                                        <br>
                                        Mail: <a href="mailto:demo@example.com">demo@example.com</a>
                                    </span>
                                </div>
                            </div>
                            <!-- Single Contact Info End -->

                            <!-- Single Contact Info Start -->
                            <div class="contact-info max-mb-50">
                                <div class="icon">
                                    <i class="fal fa-clock"></i>
                                </div>
                                <div class="info">
                                    <h4 class="title">Hour of operation</h4>
                                    <span class="info-text">Monday – Friday : 09:00 – 20:00 <br> Sunday &amp; Saturday: 10:30 – 22:00</span>
                                </div>
                            </div>
                            <!-- Single Contact Info End -->
                        </div>

                    </div>
                    <div class="col-lg-8">
                        <div class="contact-image mt-sm-50 mt-xs-50">
                            <img src="/images/others/contact.jpg" alt="image">

                            <!-- Animation Shape Start -->
                            <ShapeWithAnimation addClassName="shape-1" dataDepth="3" imgSrc="/images/shape-animation/about-shape-1.png" />
                            <ShapeWithAnimation addClassName="shape-3" dataDepth="4" />
                            <ShapeWithAnimation addClassName="shape-4" dataDepth="4" imgSrc="/images/shape-animation/shape-1.png" />
                            <ShapeWithAnimation addClassName="shape-5" dataDepth="4" imgSrc="/images/shape-animation/nwesletter-shape-2.png" />
                            <!-- Animation Shape End -->
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="contact-form-section section-padding-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="contact-title">
                            <h2 class="title">Or just drop me a line</h2>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>

        <FooterStyleOne />

    </div>
</template>

<script>
    export default {
        components: {
            HeaderStyleTwo: () => import('@/components/HeaderStyleTwo'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            ShapeWithAnimation: () => import('@/components/ShapeWithAnimation'),
            ContactForm: () => import('@/components/ContactForm'),
            FooterStyleOne: () => import('@/components/FooterStyleOne'),
        },

        head() {
            return {
                title: 'Contact Me'
            }
        },
    };
</script>


