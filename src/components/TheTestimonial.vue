<template>
    <div class=" max-w-screen-xl mx-auto px-4 md:px-6 my-10 md:my-20  xl:my-32">
        <div class="grid lg:grid-cols-2 gap-4">
            <div>
                <h6 class=" mb-4 md:mb-8">
                    Our Testimonial
                </h6>
                <h2 class="leading-[40px] md:leading-[60px] tracking-tighter md:mb-6">
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
                <Carousel :autoplay="4000" :wrap-around="true">
                    <Slide v-for="testimonial in testimonials" :key="testimonial">
                        <div class="rounded-lg border border-zinc-300 p-4">
                            <div>
                                <div>
                                    <p class="text-[#636571] text-[15px] italic mb-4 text-left">
                                        "{{ testimonial.text }}"
                                    </p>
                                    <div class="mb-2">
                                        <StarRating :rating="Number(testimonial.rating)" v-bind:star-size="20"
                                            :text-class="'hidden'"></StarRating>

                                    </div>
                                    <h3
                                        class=" font-manrope font-bold text-[18px] text-extra-dark-teal text-left mb-4 md:mb-0">
                                        {{ testimonial.author_name }}
                                    </h3>
                                </div>
                                <!-- <img :src="`${testimonial.imageUrl}`" alt=""
                                    class="md:col-span-2 md:w-full md:h-full w-20 h-20 rounded-full object-cover md:rounded-lg"> -->

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
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import axios from 'axios';
import 'vue3-carousel/dist/carousel.css'


export default {
    async mounted() {
        fetch("/last-review-fetch-date.txt")
            .then((res) => res.text())
            .then((text) => {
                const data = JSON.parse(text)

                    console.log(JSON.parse(data.reviews));
                    this.testimonials = JSON.parse(data.reviews)
            })
            .catch((e) => console.error(e));

        // axios.get('/getGoogleMapReviews.php').then(function (result) {
        //     this.testimonials = result.data
        //     console.log(this.testimonials.data);
        // }.bind(this))
    },
    data() {
        return {
            testimonials: []
        }
    },
    components: {
        Carousel,
        Slide,
        Pagination,
    },
}
</script>
<script setup>
import StarRating from 'vue-star-rating'
</script>