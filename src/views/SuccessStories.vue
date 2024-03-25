<template>
    <PublicPageLayout>

        <HeroSection :title="'Success Stories'"></HeroSection>
        <div class=" max-w-screen-xl mx-auto px-4 md:px-6 my-10 md:my-20">
            <div class="grid grid-cols-3 gap-2 md:gap-32 md:gap-y-20 my-10 md:py-10 mx-auto">
                <img src="@/assets/img/success-story-1.png" alt="" srcset="">
                <img src="@/assets/img/success-story-2.png" alt="" srcset="">
                <img src="@/assets/img/success-story-3.png" alt="" srcset="">
                <!-- <img src="@/assets/img/success-story-3.png" alt="" srcset=""> -->
            </div>
            <div class="grid grid-cols-2 gap-2">
                <iframe class="w-full h-[400px]"
                    src="https://player.vimeo.com/video/924526978?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    title="Video title"></iframe>
                <iframe class="w-full h-[400px]"
                    src="https://player.vimeo.com/video/924526978?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    title="Video title"></iframe>
                <iframe class="w-full h-[400px]"
                    src="https://player.vimeo.com/video/924526978?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    title="Video title"></iframe>
                <iframe class="w-full h-[400px]"
                    src="https://player.vimeo.com/video/924526978?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    title="Video title"></iframe>
            </div>
        </div>

        <div class=" max-w-screen-xl mx-auto px-4 md:px-6 my-10 md:my-20">
            <div class="grid md:grid-cols-3 gap">
                <img :src="img" class="h-96 w-96 object-cover" v-for="img in testimonialArray" :key="img"
                    @click="testimonialSelected(img)">
                </img>
            </div>
        </div>
        
        <Transition>
            <div class="fixed w-screen h-screen top-0 grid place-content-center  backdrop-blur-md z-50"
                v-if="showSelectedTestimonial" @click="showSelectedTestimonial = false">
                <img :src="selectedTestimonial" class="h-[800px] w-[800px] object-cover rounded-xl">
            </div>
        </Transition>


        <TheTestimonial></TheTestimonial>
        <ContactSection></ContactSection>

    </PublicPageLayout>

</template>
<script setup>
import PublicPageLayout from '../layout/PublicPageLayout.vue';
import HeroSection from '@/components/HeroSection.vue';
import TheTestimonial from '@/components/TheTestimonial.vue';
import ContactSection from '@/components/ContactSection.vue';
</script>
<script>
export default {
    data() {
        return {
            testimonialArray: ['/assets/img/tummy-tuck.png', '/assets/img/testimonial-3.png'],
            selectedTestimonial: '',
            showSelectedTestimonial: false
        }
    },
    methods: {
        testimonialSelected(img) {
            this.selectedTestimonial = img
            this.showSelectedTestimonial = true

        }
    }
}
</script>
<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>