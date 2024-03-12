<template>
    <div class=" max-w-screen-xl mx-auto px-4 md:px-6 my-20 md:my-40">
        <div class="grid lg:grid-cols-2 gap-4">
            <div>
                <h6 class=" mb-4 md:mb-8">
                    Our Testimonial
                </h6>
                <h2 class="leading-[40px] md:leading-[60px] tracking-tighter mb-6">
                    The Honest Review<br />
                    From Our <span class="text-dark-teal"> Family</span>
                </h2>
                <!-- <p class="text-[#636571]">
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et magna.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et magna.
                </p> -->
            </div>
            <div class="p-4">
                <Carousel :autoplay="2000" :wrap-around="true">
                    <Slide v-for="testimonial in testimonials" :key="testimonial">
                        <div class="rounded-lg border border-zinc-300 p-4">
                            <div class="grid md:grid-cols-5 md:gap-8">
                                <div class="md:col-span-3">
                                    <p class="text-[#636571] text-[15px] italic mb-4 text-left">
                                        "{{ testimonial.testimonial }}"
                                    </p>
                                    <h3
                                        class=" font-manrope font-bold text-[18px] text-extra-dark-teal text-left mb-4 md:mb-0">
                                        {{ testimonial.name }}
                                    </h3>
                                </div>
                                <img :src="`${testimonial.imageUrl}`" alt=""
                                    class="md:col-span-2 md:w-full md:h-full w-20 h-20 rounded-full object-cover md:rounded-lg">

                            </div>
                        </div>
                    </Slide>

                    <!-- <template #addons>
                        <Pagination />
                    </template> -->
                </Carousel>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
    name: 'Autoplay',
    data() {
        return {
            testimonials: [{
                name: 'Kimberly Fear', imageUrl: "/assets/img/grid-img-1.png", testimonial: `Since I started my weight loss journey I have lost nearly 50lbs so far thanks to the wonderful staff and Dr Sudakaran.
                                        I would recommend Dr Sudakaran to anyone  wanting Bariatrics surgery . My surgery went so smooth . It has been a challenge but worth it .`
            }, {
                name: 'Janell Floyd', imageUrl: "/assets/img/grid-img-1.png", testimonial: `Dr Sudhakaran is very thorough. Very easy to talk to.
                                         I don’t feel like I’m being judged. The staff is exceptional   Easy to make appointments. 
                                         Brittany is very good at making sure you have everything done for your insurance. 
                                         I don’t think I could have made a better choice.`}, {
                name: 'Senett B', imageUrl: "/assets/img/testimonial-3.png", testimonial: `This is the best decision of my life and would do 
                                        it all over again if I had too! Thanks Dr. Sudhakaran for all the support and guidance and for 
                                        helping me to get close to my goal to live a healthier life for me, my daughter and two foster sons!`}]
        }
    },
    components: {
        Carousel,
        Slide,
        Pagination,
    },
})
</script>