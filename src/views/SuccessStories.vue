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
                <iframe class="w-full md:h-[400px]"
                    src="https://player.vimeo.com/video/924526978?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    title="Video title"></iframe>
                <iframe class="w-full md:h-[400px]"
                    src="https://player.vimeo.com/video/924526978?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    title="Video title"></iframe>
                <iframe class="w-full md:h-[400px]"
                    src="https://player.vimeo.com/video/924526978?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    title="Video title"></iframe>
                <iframe class="w-full md:h-[400px]"
                    src="https://player.vimeo.com/video/924526978?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    title="Video title"></iframe>
            </div>
        </div>

        <div class=" max-w-screen-xl mx-auto px-4 md:px-6 my-10 md:my-20">
            <div class="grid grid-cols-3 md:grid-cols-8 gap-2 bg-extra-dark-teal p-4 rounded-xl ">
                <img :src="`/assets/img/reviews/Untitled-${i}.jpg`"
                    class="h-48 w-full cursor-pointer object-cover shadow-xl shadow-black/30" :class="`rotate-${i % 4}`"
                    v-for="i in 28" :key="i" @click="testimonialSelected(i)">
                </img>
            </div>
        </div>

        <Transition>
            <div class="fixed w-screen h-screen top-0 grid place-content-center  backdrop-blur-md z-50 bg-black/50"
                v-if="showSelectedTestimonial" @click="showSelectedTestimonial = false">
                <img :src="`/assets/img/reviews/Untitled-${selectedTestimonial}.jpg`"
                    class=" h-[600px] md:h-[800px] w-auto object-contain rounded-xl shadow-xl shadow-dark-teal">
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
            selectedTestimonial: '',
            showSelectedTestimonial: false
        }
    },
    methods: {
        testimonialSelected(i) {
            this.selectedTestimonial = i
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