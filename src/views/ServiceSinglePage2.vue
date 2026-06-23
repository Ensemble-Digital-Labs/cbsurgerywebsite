<template>
    <PublicPageLayout>
        <HeroSectionVue :title="'General Surgery'">
        <h6 class="mx-auto text-sm md:text-[20px]">Our Services > General Surgery</h6>
        </HeroSectionVue>
        <SingleServiceCard :title="'Hernia Surgery'" :imageUrl="'/assets/img/service-4.png'"
            :description="' Umbilical hernia (belly button hernia), Ventral Hernia (belly wall hernia), Incisional Hernia (Hernia at the site of previous surgery), Inguinal hernia (Groin Hernia), Hiatal Hernia (Hernia around the food pipe)- Dr Sudhakaran can elevate and repair. All these surgeries are done minimally invasive with small incisions and normally can be discharged home the same day of surgery.'">
        </SingleServiceCard>
        <SingleServiceCard :title="'Gallbladder Surgery (lap Cholecystectomy) '" :imageUrl="'/assets/img/service-5.png'"
            :description="' Removal of the gallbladder for infection, dysfunction, or president pain in the right side of the abdomen after food intake. This surgery is done minimally invasive with a small incision on the belly and can be discharged home the same day of surgery.'">
        </SingleServiceCard>
        <!-- <SingleServiceCard :title="'Appendectomy'" :imageUrl="'/assets/img/grid-img-2.jpg'"
            :description="' Lorem ipsum dolor sit amet consectetur. Diam nunc massa in nullam sit purus porta. Ridiculus blandit pulvinar rhoncus dolor diam iaculis semper sit. Malesuada nunc id quis lacus est ut. Velit in dapibus nisl nulla eleifend vel tortor sed. Faucibus sagittis ac tempus pulvinar odio nam amet est. In consequat arcu sit amet et aliquet sit consequat Tempus quam proin amet morbi convallis sapien. Eu ligula etiam convallis felis ultrices nascetur in nunc. Urna quis volutpat hendrerit nullam fusce viverra dolor. Fermentum parturient non vulputate faucibus convallis pretium lacus. In sit tortor nulla etiam pellentesque fermentum lacus magna enim. Quam mattis sed vitae velit justo sed venenatis. Integer quis tellus vehicula volutpat. Sem lorem vel at pellentesque nunc'">
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