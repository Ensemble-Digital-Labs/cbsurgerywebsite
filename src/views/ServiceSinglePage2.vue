<template>
    <HeroSectionVue :title="'General Surgery'">
        <h6 class="mx-auto">Our Services > General Surgery</h6>
    </HeroSectionVue>
    <SingleServiceCard :title="'Inguinal Hernia'"
                :description="' Lorem ipsum dolor sit amet consectetur. Diam nunc massa in nullam sit purus porta. Ridiculus blandit pulvinar rhoncus dolor diam iaculis semper sit. Malesuada nunc id quis lacus est ut. Velit in dapibus nisl nulla eleifend vel tortor sed. Faucibus sagittis ac tempus pulvinar odio nam amet est. In consequat arcu sit amet et aliquet sit consequat Tempus quam proin amet morbi convallis sapien. Eu ligula etiam convallis felis ultrices nascetur in nunc. Urna quis volutpat hendrerit nullam fusce viverra dolor. Fermentum parturient non vulputate faucibus convallis pretium lacus. In sit tortor nulla etiam pellentesque fermentum lacus magna enim. Quam mattis sed vitae velit justo sed venenatis. Integer quis tellus vehicula volutpat. Sem lorem vel at pellentesque nunc'"></SingleServiceCard>
    <SingleServiceCard :title="'Skin Surgery'"
                :description="' Lorem ipsum dolor sit amet consectetur. Diam nunc massa in nullam sit purus porta. Ridiculus blandit pulvinar rhoncus dolor diam iaculis semper sit. Malesuada nunc id quis lacus est ut. Velit in dapibus nisl nulla eleifend vel tortor sed. Faucibus sagittis ac tempus pulvinar odio nam amet est. In consequat arcu sit amet et aliquet sit consequat Tempus quam proin amet morbi convallis sapien. Eu ligula etiam convallis felis ultrices nascetur in nunc. Urna quis volutpat hendrerit nullam fusce viverra dolor. Fermentum parturient non vulputate faucibus convallis pretium lacus. In sit tortor nulla etiam pellentesque fermentum lacus magna enim. Quam mattis sed vitae velit justo sed venenatis. Integer quis tellus vehicula volutpat. Sem lorem vel at pellentesque nunc'"></SingleServiceCard>
    <SingleServiceCard :title="'Appendectomy'"
                :description="' Lorem ipsum dolor sit amet consectetur. Diam nunc massa in nullam sit purus porta. Ridiculus blandit pulvinar rhoncus dolor diam iaculis semper sit. Malesuada nunc id quis lacus est ut. Velit in dapibus nisl nulla eleifend vel tortor sed. Faucibus sagittis ac tempus pulvinar odio nam amet est. In consequat arcu sit amet et aliquet sit consequat Tempus quam proin amet morbi convallis sapien. Eu ligula etiam convallis felis ultrices nascetur in nunc. Urna quis volutpat hendrerit nullam fusce viverra dolor. Fermentum parturient non vulputate faucibus convallis pretium lacus. In sit tortor nulla etiam pellentesque fermentum lacus magna enim. Quam mattis sed vitae velit justo sed venenatis. Integer quis tellus vehicula volutpat. Sem lorem vel at pellentesque nunc'"></SingleServiceCard>
    <ContactSection></ContactSection>

</template>

<script setup>
import HeroSectionVue from '@/components/HeroSection.vue';
import SingleServiceCard from '@/components/SingleServiceCard.vue';
import ContactSection from '@/components/ContactSection.vue';
</script>