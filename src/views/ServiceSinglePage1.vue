<template>
    <PublicPageLayout>

        <HeroSectionVue :title="'Bariatric Surgery'">
            <h6 class="mx-auto text-sm md:text-[20px]">Our Services > Bariatric Surgery</h6>
        </HeroSectionVue>
        <!-- <SingleServiceCard :title="'Robotic Bariatric Surgery'" :imageUrl="'/assets/img/grid-img-2.png'"
            :description="' Bariatric surgery aims to facilitate weight loss and improve health in morbidly obese individuals. Over the past two decades, laparoscopic techniques have reduced complications and promoted early mobility. The advent of robotic surgery has further enhanced outcomes, minimizing complications, facilitating early mobility, and reducing postoperative pain. Additionally, robotic surgery allows procedures to be performed on individuals with higher BMIs than previously feasible with laparoscopy.' ">
        </SingleServiceCard> -->
        <SingleServiceCard :title="'Gastric Bypass Surgery'" :imageUrl="'/assets/img/gastric-bypass.png'" :videoUrl="'https://player.vimeo.com/video/946064301?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'"
            :description="' Gastric bypass surgery, a common type of bariatric procedure, involves creating a smaller stomach pouch and rerouting the small intestine to bypass a portion of the digestive tract. This reduces food intake and nutrient absorption, resulting in significant weight loss. Beyond weight reduction, gastric bypass offers numerous advantages. It often leads to substantial improvement or resolution of obesity-related conditions like type 2 diabetes, hypertension, and sleep apnea. Additionally, patients experience enhanced quality of life, increased mobility, and reduced reliance on medications. Gastric bypass surgery not only aids in weight loss but also promotes overall health and well-being.'">
        </SingleServiceCard>
        <SingleServiceCard :title="'Gastric Sleeve Surgery'" :imageUrl="'/assets/img/gastric-sleeve.png'" :videoUrl="'https://player.vimeo.com/video/946043535?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'"
            :description="' Gastric sleeve surgery, the most popular bariatric procedure, involves removing 80% of the stomach to create a smaller, sleeve-shaped stomach pouch. This reduces the stomach`s capacity, leading to decreased food intake and feelings of fullness with smaller meals. The gastric sleeve offers several advantages, including significant and sustained weight loss, and improvement or resolution of obesity-related conditions such as type 2 diabetes, hypertension, and sleep apnea. The gastric sleeve also promotes healthier eating habits and enhances the overall quality of life for individuals struggling with obesity.'">
        </SingleServiceCard>
        <!-- <SingleServiceCard id="Endoscopy" :title="'Endoscopy'" :imageUrl="'/assets/img/grid-img-2.png'"
            :description="' Upper endoscopy (EGD) to evaluate the esophagus, stomach, and duodenum with a camera passed through the mouth. This is usually done to evaluate severe reflux disease, the tendency for stomach ulcers.Lower endoscopy (Colonoscopy) evaluates the large bowel (Colon) for changes or growth in the colon. This is usually done to screen for Colon cancer or investigate blood in stool or any colon diseases, like inflammatory bowel disease.'">
        </SingleServiceCard>
        <SingleServiceCard id="TummyTuck" :title="'Tummy Tuck(Abdominoplasty)'" :imageUrl="'/assets/img/grid-img-2.png'"
            :description="' A tummy tuck (abdominoplasty) is usually done for patients to remove excess skin in the lower belly area after weight loss or other reasons. These procedures are usually approved by insurance about 1 year after weight loss surgery and if there is documented persistent skin irritation and infection under the pannus (loose skin)'">
        </SingleServiceCard> -->
        <SingleServiceCard :title="'Revision Bariatric Surgery'" :imageUrl="'/assets/img/service-3.png'" 
            :description="'Revisional bariatric surgery entails modifying or correcting a prior weight loss procedure. Its sought for various reasons, including insufficient weight loss, weight regain, reflux or complications from the initial surgery like leaks or strictures. The most common revisional surgery is gastrojejunostomy (conversion of Sleeve to Bypass).' ">
        </SingleServiceCard>
        

        <ContactSection></ContactSection>


    </PublicPageLayout>

</template>

<script setup>
import PublicPageLayout from '../layout/PublicPageLayout.vue';
import HeroSectionVue from '@/components/HeroSection.vue';
import SingleServiceCard from '@/components/SingleServiceCard.vue';
import ContactSection from '@/components/ContactSection.vue';
</script>