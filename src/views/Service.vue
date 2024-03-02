<template>
<HeroSection :title="'Our Services'"></HeroSection>
<div class=" max-w-screen-xl mx-auto px-4 md:px-6 my-10 md:my-20">
<div class="grid md:grid-cols-3 gap-4 my-10">
            <ServiceCard v-for="i in 5" :key="i" :link="'/about'" :title="'Bariatrics Surgery'" :description="' This is description, This is description v'" :imageUrl="'/assets/grid-img-1.png'"></ServiceCard>
        </div>
        <TheTestimonial></TheTestimonial>
        <FAQ></FAQ>
    </div>

</template>
<script setup>
import HeroSection from '@/components/HeroSection.vue';
import ServiceCard from '@/components/ServiceCard.vue';
import TheTestimonial from '@/components/TheTestimonial.vue';
import FAQ from '@/components/FAQ.vue';
</script>