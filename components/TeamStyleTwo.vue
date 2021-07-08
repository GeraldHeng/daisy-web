<template>
    <div class="team-section section-padding-top">
        <div class="container">
            <!-- Section Title Start -->
            <div class="section-title text-center" data-aos="fade-up">
                <span class="sub-title">The guys behind the curtains</span>
                <h2 class="title fz-48">Whose <span> Inspirations</span> You Love</h2>
            </div>
            <!-- Section Title End -->
            <div class="row ht-team-member-style-two">
                <div class="col-lg-4 col-sm-6 max-mb-50" v-for="teamMember in teamMemberData.slice(0, 3)" :key="teamMember.i">
                    <TeamMemberItem :teamMember="teamMember" />
                </div>
            </div>
            <div class="row ht-team-member-style-three max-mb-n50">
                <div class="col-lg-3 col-sm-6 max-mb-50" v-for="teamMember in teamMemberData.slice(3, 8)" :key="teamMember.i">
                    <TeamMemberItem :teamMember="teamMember" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import teamMemberData from '../data/team';

    /* var admin = teamMemberData.filter(item => item.role === "admin")
    var employee = teamMemberData.filter(item => item.role === "employee") */

    export default {
        data () {
            return {
                teamMemberData
            }
        },
    };
</script>