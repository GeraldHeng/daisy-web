<template>
    <div class="main-container">

        <HeaderStyleTwo />

        <OffCanvasMobileMenu />

        <div class="event-page-banner overlay section-padding-top-200 section-padding-bottom-180 bg-cover" :style="{ backgroundImage: `url('/images/page-banner/artist-event.jpg')` }">
            <div class="container">
                <div class="col-12">
                    <div class="event-hero-content">
                        <div class="entry-date"> November 23</div>
                        <h1 class="entry-title">International Art Fair 2020</h1>
                        <div class="entry-countdown">
                            <ul class="pro-countdown-1">
                                <li>
                                    <span id="days" class="single-countdown-box-1"></span>
                                    Days
                                </li>
                                <li>
                                    <span id="hours" class="single-countdown-box-1"></span>
                                    Hours
                                </li>
                                <li>
                                    <span id="minutes" class="single-countdown-box-1"></span>
                                    Mins
                                </li>
                                <li>
                                    <span id="seconds" class="single-countdown-box-1"></span>
                                    Secs
                                </li>
                            </ul> 
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- About Event Section Start -->
        <div class="about-event-section section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <!-- Section Title Start -->
                        <div class="section-title text-center" data-aos="fade-up">
                            <h2 class="title fz-48 heading-color">About The Event</h2>
                            <div class="event-entry-meta">
                                <div class="meta-item">
                                    <i class="meta-icon fal fa-map-marker-alt"></i>
                                    <span>Hamburg, Germany</span>
                                </div>

                                <div class="meta-item">
                                    <i class="meta-icon fal fa-calendar"></i>
                                    <span>Nov 23, 2020</span>
                                </div>

                                <div class="meta-item">
                                    <i class="meta-icon fal fa-clock"></i>
                                    <span>2:00 pm - 4:00 pm</span>
                                </div>
                            </div>
                        </div>
                        <!-- Section Title End -->
                    </div>
                </div>
                <div class="row">

                    <div class="col-lg-8 col-12 order-lg-1 max-mb-50">
                        <!-- Event Details Wrapper Start -->
                        <div class="event-details-wrapper">
                            <div class="map-area">
                                <iframe class="event-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2136.986005919501!2d-73.9685579655238!3d40.75862446708152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258e4a1c884e5%3A0x24fe1071086b36d5!2sThe%20Atrium!5e0!3m2!1sen!2sbd!4v1585132512970!5m2!1sen!2sbd"></iframe>
                                <div class="entry-location-address">
                                    <span class="fal fa-map-marker-alt"></span>
                                    Betahaus Hamburg Schanze, Eifflerstraße 43
                                </div>
                            </div>
                        </div>
                        <!-- Event Details Wrapper End -->
                    </div>

                    <div class="col-lg-4 col-12 order-lg-2 max-mb-50">
                        <div class="sidebar-widget-wrapper pr-0 pl-30 pl-md-0 pl-sm-0 pl-xs-0">
                            <div class="sidebar-widget">
                                <div class="sidebar-widget-content">
                                    <div class="sidebar-entry-event">
                                        <div class="entry-register">
                                            <ul class="entry-event-info">
                                                <li class="meta-price">
                                                    <span class="meta-label">
                                                        <i class="meta-icon far fa-money-bill-wave"></i>
                                                        Cost:			
                                                    </span>
                                                    <span class="meta-value">
                                                        <span class="event-price">$19<span class="decimals-separator">.00</span>
                                                    </span>
                                                    </span>
                                                </li>
                                                <li class="total">
                                                    <span class="meta-label">
                                                        <i class="meta-icon far fa-user-friends"></i>
                                                        Total Slot:			</span>
                                                    <span class="meta-value">99</span>
                                                </li>
                                                <li class="booking_slot">
                                                    <span class="meta-label">
                                                        <i class="meta-icon far fa-lock-alt"></i>
                                                        Booked Slot:			</span>
                                                    <span class="meta-value">0</span>
                                                </li>
                                            </ul>

                                            <button class="btn btn-primary btn-hover-secondary btn-width-100">
                                                Book Now
                                            </button>
                                            <p class="event-register-message">You must 
                                                <n-link to="">login</n-link> 
                                                before register event.
                                            </p>

                                        </div>
                                        <ul class="author-social-networks event-social">
                                            <li class="item">
                                                <a href="https://www.facebook.com/" target="_blank" class="social-link"> 
                                                    <i class="fab fa-facebook-f social-link-icon"></i> 
                                                </a>
                                            </li>
                                            <li class="item">
                                                <a href="https://twitter.com/" target="_blank" class="social-link"> 
                                                    <i class="fab fa-twitter social-link-icon"></i> 
                                                </a>
                                            </li>
                                            <li class="item">
                                                <a href="https://www.linkedin.com/" target="_blank" class="social-link"> 
                                                    <i class="fab fa-linkedin social-link-icon"></i> 
                                                </a>
                                            </li>
                                            <li class="item">
                                                <a href="https://www.pinterest.com/" target="_blank" class="social-link"> 
                                                    <i class="fab fa-pinterest social-link-icon"></i> 
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="event-content">
                            <p>International Art Fair is a contemporary art fair that presents collective and solo projects by leading and emerging international artists. The 12th edition will represent a forum for direct exchange of ideas and contacts between collectors, artists, photographers, designers and art professionals. The art fair features paintings, sculptures, photography art, installations, video art and live performance.</p>

                            <p>International Art Fair, organized by ITSLIQUID Group in collaboration with Art Events and Ca’ Zanardi, will be held in Venice, at THE ROOM Contemporary Art Space from April 09 to May 10 2020, at Palazzo Ca’ Zanardi from April 10 to May 10 2020 and in other prestigious venues and historical buildings.</p>

                            <p>International Art Fair provides artists and exhibitors with the unique opportunity to present their works to an international audience of professionals as curators, gallerists, collectors, editors and publishers who seek to acquire, publish and encourage the best contemporary art talents.</p>

                            <p><strong>The participation includes the following services</strong></p>
                            <ul>
                                <li>– exhibition space dedicated to the artist’s works</li>
                                <li>– assisting in finding accommodation for artist</li>
                                <li>– the design and the printing of invitation cards, posters</li>
                                <li>– the global and local press office, publicity, press, banners, totem, etc.</li>
                                <li>– the realization of the exhibition website and dedicated press releases</li>
                                <li>– mounting and dismounting of the exhibition</li>
                                <li>– exhibitions opening event with drinks and food</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- About Event Section End -->

        <!-- Speaker Section Start -->
        <div class="speaker-section section-padding-bottom">
            <div class="container section-border-bottom section-padding-bottom-90">
                <div class="row">
                    <div class="col-12">
                        <!-- Section Title Start -->
                        <div class="section-title text-center max-mb-50" data-aos="fade-up">
                            <h2 class="title fz-48 heading-color">Our Speakers</h2>
                        </div>
                        <!-- Section Title End -->
                    </div>
                </div>
                <div class="speaker-slider" data-aos="fade-up">
                    <swiper :options="swiperOptions">
                        <div class="swiper-slide">
                            <div class="single-speaker">
                                <div class="image">
                                    <img src="/images/speaker/speaker-6.jpg" alt="speaker">
                                </div>
                                <div class="content">
                                    <h6 class="speaker-name">Solomon</h6>
                                    <div class="speaker-description">/ Designer</div>
                                </div>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="single-speaker">
                                <div class="image">
                                    <img src="/images/speaker/speaker-1.jpg" alt="speaker">
                                </div>
                                <div class="content">
                                    <h6 class="speaker-name">Emerson</h6>
                                    <div class="speaker-description">/ Developer</div>
                                </div>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="single-speaker">
                                <div class="image">
                                    <img src="/images/speaker/speaker-2.jpg" alt="speaker">
                                </div>
                                <div class="content">
                                    <h6 class="speaker-name">Bellezza</h6>
                                    <div class="speaker-description">/ Content Writer</div>
                                </div>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="single-speaker">
                                <div class="image">
                                    <img src="/images/speaker/speaker-3.jpg" alt="speaker">
                                </div>
                                <div class="content">
                                    <h6 class="speaker-name">Lilybelle</h6>
                                    <div class="speaker-description">/ Office Manager</div>
                                </div>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="single-speaker">
                                <div class="image">
                                    <img src="/images/speaker/speaker-4.jpg" alt="speaker">
                                </div>
                                <div class="content">
                                    <h6 class="speaker-name">Lucinda</h6>
                                    <div class="speaker-description">/ Manager</div>
                                </div>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="single-speaker">
                                <div class="image">
                                    <img src="/images/speaker/speaker-5.jpg" alt="speaker">
                                </div>
                                <div class="content">
                                    <h6 class="speaker-name">Orabelle</h6>
                                    <div class="speaker-description">/ Art Director</div>
                                </div>
                            </div>
                        </div>
                    </swiper>
                </div>
                <div class="event-speakers-description">
                    Register online, get your ticket, meet up with our inspirational speakers and specialists in the field to share your ideas.
                </div>
            </div>
        </div>
        <!-- Speaker Section End -->

        <!-- Event Comment Section Start -->
        <div class="event-comment-section section-padding-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <!-- Section Title Start -->
                        <div class="section-title text-center mb-50" data-aos="fade-up">
                            <h2 class="title fz-48 heading-color">Leave your thought here</h2>
                        </div>
                        <!-- Section Title End -->
                    </div>
                </div>
                <div class="row">
                    <div class="offset-lg-2 col-lg-8">
                        <div class="event-form">
                            <form>
                                <div class="row">
                                    <div class="col-md-6 col-12 max-mb-30">
                                        <input type="text" placeholder="Your Name *" name="name">
                                    </div>
                                    <div class="col-md-6 col-12 max-mb-30">
                                        <input type="email" placeholder="Email *" name="email">
                                    </div>
                                    <div class="col-12 max-mb-30">
                                        <textarea name="message" placeholder="Your Comment"></textarea>
                                    </div>
                                    <div class="col-12">
                                        <p class="comment-form-cookies-consent">
                                            <input id="comment-cookies-consent" name="comment-cookies-consent" type="checkbox" value="yes">
                                            <label for="comment-cookies-consent">
                                                Save my name, email, and website in this browser for the next time I comment.
                                            </label>
                                        </p>
                                    </div>
                                    <div class="col-12 text-center">
                                        <button class="btn btn-primary btn-hover-secondary btn-width-180 btn-height-60">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Event Comment Section End -->

        <FooterStyleOne />

    </div>
</template>

<script>
    
    export default {
        components: {
            HeaderStyleTwo: () => import('@/components/HeaderStyleTwo'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            FooterStyleOne: () => import('@/components/FooterStyleOne'),
        },

        data () {
            return {
                swiperOptions: {
                    watchSlidesVisibility: true,
                    speed: 1000,
                    spaceBetween: 30,
                    slidesPerView: 5,
                    breakpoints: {
                        1200: {
                            slidesPerView: 5
                        },
                        992: {
                            slidesPerView: 4
                        },
                        768: {
                            slidesPerView: 3
                        },
                        480: {
                            slidesPerView: 2
                        },
                        320: {
                            slidesPerView: 1
                        }
                    }
                }
            }
        },

        mounted () {
            const sec = 1000,
                min = sec * 60,
                hour = min * 60,
                day = hour * 24;

            const end = new Date("Dec 25, 2021 00:00:00").getTime();

            const int = setInterval(() => {
                const current = new Date().getTime();
                const remaining = end - current;

                const day2 = Math.floor(remaining / day);
                const hour2 = Math.floor( (remaining % day) / hour );
                const minute = Math.floor( (remaining % hour) / min );
                const second = Math.floor( (remaining % min) / sec );

                document.getElementById("days").innerText = day2 > 9 ? day2 : `0${day2}`;
                document.getElementById("hours").innerText = hour2 > 9 ? hour2 : `0${hour2}`;
                document.getElementById("minutes").innerText = minute > 9 ? minute : `0${minute}`;
                document.getElementById("seconds").innerText = second > 9 ? second : `0${second}`;
            }, 1000);
        },

        head() {
            return {
                title: 'Event Details'
            }
        },
    };
</script>


