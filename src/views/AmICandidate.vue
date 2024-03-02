<template>
    <HeroSectionVue :title="'Am I Candidate'"></HeroSectionVue>
    <div class="max-w-screen-xl mx-auto my-10 lg:my-20 px-6 xl:px-0">
        <div class="grid md:grid-cols-2 gap-8 md:gap-10">
            <div class="grid gap-2">
                <p>
                    In the United States, over 30% of adults are categorized as obese. Beyond merely a matter of appearance,
                    obesity can lead to various health complications such as diabetes, hypertension, elevated cholesterol
                    levels, sleep disturbances, and osteoarthritis.</p>
                <p class="hidden lg:block"> A prevailing misconception surrounding weight loss surgery is its exclusive
                    application to those
                    severely obese. It may come as a surprise that even if you are just 50 pounds overweight, you could
                    qualify as a candidate for weight loss surgery. We emphasize the importance of considering weight loss
                    surgery before significant health issues emerge.</p>
                <p class="hidden lg:block"> Despite concerted efforts by many overweight and obese individuals to shed extra
                    weight through dietary
                    changes and physical activity, a significant number of them encounter difficulties. Occasionally, the
                    reasons for these challenges extend beyond one's influence, stemming from genetic factors or underlying
                    medical conditions. If you find yourself in this situation, weight loss surgery could offer a viable
                    solution.</p>
            </div>
            <div>
                <img src="@/assets/img/am-i-candidate.png" class="rounded-xl h-full w-full object-cover" alt="">
            </div>

        </div>
        <div class="grid gap-6 lg:hidden my-8">
            <p> A prevailing misconception surrounding weight loss surgery is its exclusive application to those
                severely obese. It may come as a surprise that even if you are just 50 pounds overweight, you could
                qualify as a candidate for weight loss surgery. We emphasize the importance of considering weight loss
                surgery before significant health issues emerge.</p>
            <p> Despite concerted efforts by many overweight and obese individuals to shed extra weight through dietary
                changes and physical activity, a significant number of them encounter difficulties. Occasionally, the
                reasons for these challenges extend beyond one's influence, stemming from genetic factors or underlying
                medical conditions. If you find yourself in this situation, weight loss surgery could offer a viable
                solution.</p>
        </div>
    </div>

    <div class="max-w-screen-xl mx-auto my-10 lg:my-20 px-6 xl:px-0">
        <div class="mb-6">
            <h2 class="text-center tracking-tight md:text-[40px] mb-6">
                What is <span class="text-dark-teal">BMI</span>
            </h2>
            <p class="text-center"> A prevailing misconception surrounding weight loss surgery is its exclusive application
                to those
                severely obese.</p>

        </div>
        <div>
            <h3 class="text-center tracking-tight mb-6 font-manrope font-semibold text-[24px] text-extra-dark-teal">
                Know Your BMI
            </h3>
            <div class="shadow-md rounded-xl shadow-zinc-500/20 p-4 max-w-4xl mx-auto">
                <div class="grid md:grid-cols-4 ">


                </div>


            </div>

        </div>

    </div>
</template>
<script setup>
import HeroSectionVue from '@/components/HeroSection.vue';
</script>