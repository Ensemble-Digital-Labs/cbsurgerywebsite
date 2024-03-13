<template>
    <PublicPageLayout>
        <HeroSection :title="'Our Services'"></HeroSection>
    <div class=" max-w-screen-xl mx-auto px-4 md:px-6 my-10 md:my-20">
        <!-- <div class="flex items-center justify-between">
            <a class="w-full text-center font-manrope font-extrabold  tracking-tight text-[16px] p-2 cursor-pointer grid place-content-center min-h-16"
                :class="selectedTab === 'Procedures Performed' ? 'text-white bg-dark-teal' : 'text-dark-teal bg-extra-light-teal'"
                @click="selectedTab = 'Procedures Performed'">Procedures Performed</a>
            <a class="w-full text-center font-manrope font-extrabold tracking-tight text-[16px] p-2 cursor-pointer min-h-16 grid place-content-center"
                :class="selectedTab === 'Conditions Treated' ? 'text-white bg-dark-teal' : 'text-dark-teal bg-extra-light-teal'"
                @click="selectedTab = 'Conditions Treated'">Conditions Treated</a>
        </div>
        <div class="grid md:grid-cols-3 gap-4 my-10" v-if="selectedTab === 'Procedures Performed'">
            <ServiceCard v-for="i in 5" :key="i" :link="'/about'" :title="'Bariatrics Surgery'"
                :description="' This is description, This is description v'" :imageUrl="'/assets/img/grid-img-1.png'">
            </ServiceCard>
        </div>

        <div class="grid md:grid-cols-3 gap-4 my-10" v-if="selectedTab === 'Conditions Treated'">
            <ServiceCard v-for="i in 6" :key="i" :link="'/about'" :title="'Bariatrics Surgery'"
                :description="' This is description, This is description v'" :imageUrl="'/assets/img/grid-img-1.png'">
            </ServiceCard>
        </div> -->
        <div class="grid md:grid-cols-2 gap-10 my-10">
            <ServiceCard :link="'/services/1'" :title="'Bariatrics Surgery'"
                :description="' Bariatric surgery, commonly referred to as weight loss surgery, includes procedures designed to aid individuals facing obesity in attaining long-term weight reduction and enhancing their overall well-being.'" :imageUrl="'/assets/img/grid-img-1.png'">
            </ServiceCard>
            <ServiceCard :link="'/services/2'" :title="'General Surgery'"
                :description="'General surgery covers a wide range of surgical procedures that primarily address abdominal organs like the stomach, liver, intestines, and gallbladder, along with surgeries involving other parts of the body '" :imageUrl="'/assets/img/general-surgery.png'">
            </ServiceCard>
        </div>
    </div>
    <TheTestimonial></TheTestimonial>
    <FAQ></FAQ>
    <ContactSection></ContactSection>

    </PublicPageLayout>
    
</template>
<script>
export default {
    data() {
        return {
            selectedTab: 'Procedures Performed'
        }
    }
}
</script>
<script setup>
import PublicPageLayout from '../layout/PublicPageLayout.vue'
import HeroSection from '@/components/HeroSection.vue';
import ServiceCard from '@/components/ServiceCard.vue';
import TheTestimonial from '@/components/TheTestimonial.vue';
import FAQ from '@/components/FAQ.vue';
import ContactSection from '@/components/ContactSection.vue';
</script>