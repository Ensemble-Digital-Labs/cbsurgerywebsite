<template>
    <PublicPageLayout>
        <HeroSectionVue :title="'Endoscopy'">
        <h6 class="mx-auto text-sm md:text-[20px]">Our Services > Endoscopy</h6>
        </HeroSectionVue>
        
       <SingleServiceCard id="Upper-Endoscopy" :title="'Upper Endoscopy'" :imageUrl="'/assets/img/endoscopy-1.jpg'"
            :description="' Upper endoscopy (EGD) to evaluate the esophagus, stomach, and duodenum with a camera passed through the mouth. This is usually done to evaluate severe reflux disease, the tendency for stomach ulcers.'">
        </SingleServiceCard>
        <SingleServiceCard id="Lower-Endoscopy" :title="'Lower Endoscopy'" :imageUrl="'/assets/img/endoscopy-2.png'"
            :description="' Lower endoscopy (Colonoscopy) evaluates the large bowel (Colon) for changes or growth in the colon. This is usually done to screen for Colon cancer or investigate blood in stool or any colon diseases, like inflammatory bowel disease.'">
        </SingleServiceCard>

        <!-- <SingleServiceCard id="TummyTuck" :title="'Tummy Tuck(Abdominoplasty)'" :imageUrl="'/assets/img/service-8.png'"
            :description="' A tummy tuck (abdominoplasty) is usually done for patients to remove excess skin in the lower belly area after weight loss or other reasons. These procedures are usually approved by insurance about 1 year after weight loss surgery and if there is documented persistent skin irritation and infection under the pannus (loose skin)'">
        </SingleServiceCard> -->
        <ContactSection></ContactSection>


    </PublicPageLayout>


</template>

<script setup>
import PublicPageLayout from '../layout/PublicPageLayout.vue';
import HeroSectionVue from '@/components/HeroSection.vue';
import SingleServiceCard from '@/components/SingleServiceCard.vue';
import ContactSection from '@/components/ContactSection.vue';
</script>