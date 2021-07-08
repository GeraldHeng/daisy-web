<template>
    <div class="page-banner-section section-padding-200 bg-cover" :style="bgImg">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="page-banner-title">
                        <h1 class="title">{{ title }}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['bgImg', 'title']
    };
</script>
