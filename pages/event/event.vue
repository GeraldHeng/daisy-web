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
                        <li class="current">Events</li>
                    </ul>
                </div>
            </div>

            <div class="page-title">
                <div class="container">
                    <h1 class="title">Events</h1>
                </div>
            </div>
        </div>

        <div class="section-padding-bottom">
            <div class="container">
                <!-- Course Top Bar Start -->
                <div class="row justify-content-between align-items-center max-mb-20">
                    <div class="col-sm-auto col-12 max-mb-10">
                        <p class="result-count">We found <span>09</span> events available for you</p>
                    </div>
                    <div class="col-sm-auto col-12 max-mb-10">
                        <v-select :options="options" :placeholder="getSelectorPlaceholder"></v-select>
                    </div>
                </div>
                <!-- Course Top Bar End -->

                <div class="row row-cols-lg-3 row-cols-md-2 row-cols-1 max-mb-n30">
                    <div class="col max-mb-30" data-aos="fade-up" v-for="event in eventData.events" :key="event.id">
                        <EventItemGridStyle :event="event" />
                    </div>
                </div>

                <!-- Pagination Start -->
                <div class="row max-mt-50">
                    <div class="col">
                        <paginate
                            :page-count="4"
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

        <FooterStyleOne />

    </div>
</template>

<script>
    import eventData from '~/data/event'
    
    export default {
        components: {
            HeaderStyleTwo: () => import('@/components/HeaderStyleTwo'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            EventItemGridStyle: () => import('@/components/EventItemGridStyle'),
            FooterStyleOne: () => import('@/components/FooterStyleOne'),
        },

        data () {
            return {
                eventData,
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
                title: 'Event'
            }
        },
    };
</script>

