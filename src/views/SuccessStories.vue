<template>
    <HeroSection :title="'Success Stories'"></HeroSection>
    <div class=" max-w-screen-xl mx-auto px-4 md:px-6 my-10 md:my-20">
        <div class="grid grid-cols-2 gap-2 md:gap-32 md:gap-y-20 my-10 md:py-10 mx-auto">
            <img src="@/assets/img/success-story-1.png" alt="" srcset="">
            <img src="@/assets/img/success-story-2.png" alt="" srcset="">
            <img src="@/assets/img/success-story-3.png" alt="" srcset="">
            <img src="@/assets/img/success-story-3.png" alt="" srcset="">
        </div>
    </div>
    <TheTestimonial></TheTestimonial>
    <ContactSection></ContactSection>
</template>
<script setup>
import HeroSection from '@/components/HeroSection.vue';
import TheTestimonial from '@/components/TheTestimonial.vue';
import ContactSection from '@/components/ContactSection.vue';
</script>