<template>
    <div class="section-padding position-relative">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="newsletter-content">
                        <h2 class="title">Sign up for our <span>Newsletters</span></h2>
                        <p>Enter your email address to register to our newsletter subscription <br class="d-none d-md-block">delivered on a regular basis!</p>
                        <div class="newsletter-form">
                            <form>
                                <input type="email" placeholder="Your E-mail">
                                <button class="btn btn-primary btn-hover-secondary">Subscribe</button>
                            </form>
                        </div>

                        <!-- Animation Shape Start -->
                        <ShapeWithAnimation addClassName="shape-1" dataDepth="4" />
                        <ShapeWithAnimation addClassName="shape-2" dataDepth="4" imgSrc="/images/shape-animation/nwesletter-shape-1.png" />
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
        components: {
            ShapeWithAnimation: () => import('@/components/ShapeWithAnimation'),
        },
    };
</script>
