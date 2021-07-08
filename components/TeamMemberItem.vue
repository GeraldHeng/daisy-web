<template>
    <div class="grid-item">
        <div class="ht-team-member">
            <div class="team-image">
                <img class="img-fluid" :src="teamMember.imgSrc" :alt="(teamMember.name) + ' Thumbnail'">
                <div class="social-networks">
                    <div class="inner">
                        <a target="_blank" :href="social.url" class=" hint--bounce hint--top hint--theme-two" :aria-label="social.name" v-for="social in teamMember.socialList" :key="social.index">
                            <i :class="social.iconName"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="team-info text-center">
                <h5 class="name">{{ teamMember.name }}</h5>
                <div class="position">{{ teamMember.position }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['teamMember']
    };
</script>