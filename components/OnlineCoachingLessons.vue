<template>
    <div class="section">
        <div class="container">
            <div class="section-title text-center" data-aos="fade-up">
                <span class="sub-title">Education for everyone</span>
                <h2 class="title">Online <span>Coaching Lessons</span> For Remote Learning.</h2>
            </div>

            <div class="row row-cols-xl-4 row-cols-sm-2 row-cols-1 no-gutters">
                <div class="col" data-aos="fade-up" v-for="item in items" :key="item.id">
                    <n-link to="" class="icon-box text-center" data-vivus-hover>
                        <div class="icon">
                            <img class="svgInject" :src="item.icon" :alt="item.alt">
                        </div>
                        <div class="content">
                            <h3 class="title">{{ item.title }}</h3>
                            <div class="desc">
                                <p>{{ item.desc }}</p>
                            </div>
                            <span class="link">
                                Start here 
                                <i class="far fa-long-arrow-right"></i>
                            </span>
                        </div>
                    </n-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                items: [
                    {
                        id: 1,
                        icon: "/images/svg/linea-basic-flag2.svg",
                        alt: "icon",
                        title: "Life Mentoring",
                        desc: "Get some soul healing and guidance for your future career and vocational directions."
                    },
                    {
                        id: 2,
                        icon: "/images/svg/linea-basic-gear.svg",
                        alt: "icon",
                        title: "Self Development",
                        desc: "Develop skills for career of various majors including computer science & language competence."
                    },
                    {
                        id: 3,
                        icon: "/images/svg/linea-basic-life-buoy.svg",
                        alt: "icon",
                        title: "Ask Consultancy",
                        desc: "Make a reservation with our special consultant to learn what's best for your dream career."
                    },
                    {
                        id: 4,
                        icon: "/images/svg/linea-basic-display.svg",
                        alt: "icon",
                        title: "Remote Learning",
                        desc: "Learn from anywhere in the world on desktop, tablet or mobile phone with an Internet connection."
                    }
                ]
            }
        }
    };
</script>