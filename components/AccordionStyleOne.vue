<template>
  <div class="mx-accordion max-mb-n30">
    <b-card no-body>
      <b-card-header header-tag="header" class="card-header">
        <b-button
          block
          v-b-toggle.accordion-1
          class="acc-btn border-0 text-left"
        >
          FAQ1 How can my kids benefit the most from this?
        </b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion">
        <b-card-body>
          <b-card-text>
            FAQ answer 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            convallis est quam, vel rhoncus nunc eleifend sit amet. Proin
            lacinia felis et nibh condimentum scelerisque. Phasellus eu egestas
            urna. Proin eleifend ultrices pulvinar. Vestibulum eu porttitor
            justo, ac efficitur felis. Aliquam bibendum, diam consectetur
            dapibus tempus, mauris enim fermentum tortor, ut vestibulum urna sem
            id metus. Mauris non felis ex. Mauris hendrerit, orci vehicula
            auctor tempus,
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body>
      <b-card-header header-tag="header" class="card-header">
        <b-button
          block
          v-b-toggle.accordion-2
          class="acc-btn border-0 text-left"
        >
          FAQ 2 Where is it?
        </b-button>
      </b-card-header>
      <b-collapse id="accordion-2" visible accordion="my-accordion">
        <b-card-body>
          <b-card-text>
            FAQ answer 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            convallis est quam, vel rhoncus nunc eleifend sit amet. Proin
            lacinia felis et nibh condimentum scelerisque. Phasellus eu egestas
            urna. Proin eleifend ultrices pulvinar. Vestibulum eu porttitor
            justo, ac efficitur felis. Aliquam bibendum, diam consectetur
            dapibus tempus, mauris enim fermentum tortor, ut vestibulum urna sem
            id metus. Mauris non felis ex. Mauris hendrerit, orci vehicula
            auctor tempus,
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body>
      <b-card-header header-tag="header" class="card-header">
        <b-button
          block
          v-b-toggle.accordion-3
          class="acc-btn border-0 text-left"
        >
          FAQ 3 Who are the teachers?
        </b-button>
      </b-card-header>
      <b-collapse id="accordion-3" visible accordion="my-accordion">
        <b-card-body>
          <b-card-text>
            FAQ answer 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            convallis est quam, vel rhoncus nunc eleifend sit amet. Proin
            lacinia felis et nibh condimentum scelerisque. Phasellus eu egestas
            urna. Proin eleifend ultrices pulvinar. Vestibulum eu porttitor
            justo, ac efficitur felis. Aliquam bibendum, diam consectetur
            dapibus tempus, mauris enim fermentum tortor, ut vestibulum urna sem
            id metus. Mauris non felis ex. Mauris hendrerit, orci vehicula
            auctor tempus,
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>