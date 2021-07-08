<template>
    <div class="contact-form pl-90 pl-md-0 pl-sm-0 pl-xs-0">
        <form>
            <div class="row max-mb-n30">
                <div class="col-md-6 max-mb-30">
                    <input type="text" placeholder="Your Name *" name="name">
                </div>
                <div class="col-md-6 max-mb-30">
                    <input type="email" placeholder="Email *" name="email">
                </div>
                <div class="col-md-12 max-mb-30">
                    <input type="text" placeholder="Subject *" name="subject">
                </div>
                <div class="col-12 max-mb-30">
                    <textarea name="message" placeholder="Message"></textarea>
                </div>
                <div class="col-12 max-mb-30">
                    <button class="btn btn-primary btn-hover-secondary btn-width-180 btn-height-60">Submit</button>
                </div>
            </div>
        </form>
        <p class="form-messege"></p>
    </div>
</template>