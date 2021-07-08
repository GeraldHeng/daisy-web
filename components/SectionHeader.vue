<template>
    <div>
        <div class="section-title" :class="alignment" data-aos="fade-up">
            <span class="sub-title" v-html="subTitle">{{ subTitle }}</span>
            <h2 class="title fz-48" v-html="title">{{ title }}</h2>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            subTitle: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            alignment: {
                type: String,
                required: true
            }
        },
    };
</script>