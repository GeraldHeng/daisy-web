<template>
    <div class="header-top-section bg-f5f5f5">
        <div class="container">
            <div class="row">
                <div class="col-xl-8 offset-xl-2">
                    <div class="header-top-content">
                        <p>Starts TOMORROW! Our biggest event of the year...</p>
                        <div class="header-top-countdown">
                            <div class="ht-icon">
                                <i class="far fa-clock"></i>
                            </div>
                            <div class="pro-countdown-2 d-flex">
                                <span id="days" class="countdown-item before-none"></span>
                                <span id="hours" class="countdown-item before-none"></span>
                                <span id="minutes" class="countdown-item before-none"></span>
                                <span id="seconds" class="countdown-item before-none"></span>
                            </div>
                        </div>
                        <button class="btn btn-primary-three btn-hover-secondary-three btn-xs">Get ticket</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
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
    };
</script>