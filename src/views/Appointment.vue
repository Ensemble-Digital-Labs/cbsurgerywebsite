<template>
    <HeroSection :title="'Make Appointment'"></HeroSection>
    <div class="max-w-screen-xl mx-auto my-10 lg:my-20 px-6 xl:px-0">
        <h3 class="text-center text-[40px] text-extra-dark-teal font-manrope font-extrabold py-10 tracking-tight">Why Bariatric Surgery?</h3>
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
        <div class="mb-10 d:mb-20">
            <h2 class="text-center tracking-tight md:text-[40px] mb-6 md:mb-8">
                What is <span class="text-dark-teal">BMI</span>
            </h2>
            <p class="text-center"> A prevailing misconception surrounding weight loss surgery is its exclusive application
                to those
                severely obese.</p>

        </div>
        <div class="mb-10 md:mb-20">
            <h3 class="text-center tracking-tight mb-4 md:mb-10 font-manrope font-semibold text-[24px] text-extra-dark-teal">
                Know Your BMI
            </h3>
            <div class="shadow-md rounded-xl shadow-zinc-500/20 p-4 max-w-4xl mx-auto">
                <div class="grid md:grid-cols-4 gap-4 content-end mb-6">
                    <div>
                        <label for="weight"
                            class="block mb-2 text-[16px] font-bold font-manrope text-zinc-800">Weight(lbs)</label>
                        <input type="text" id="weight" v-model="weight"
                            class="bg-gray-50 border border-zinc-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Your Weight in lbs." required />
                    </div>

                    <div>
                        <label for="height-ft"
                            class="block mb-2 text-[16px] font-bold font-manrope text-zinc-800">Height(Feet)</label>
                        <input type="text" id="height-ft" v-model="feet"
                            class="bg-gray-50 border border-zinc-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Ft." required />
                    </div>
                    <div class="flex flex-col justify-end">
                        <label for="height-ft"
                            class="block mb-2 text-[16px] font-bold font-manrope text-zinc-800">Height(Inch)</label>
                        <input type="text" id="height-inc" v-model="inch"
                            class="bg-gray-50 border border-zinc-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="In." required />
                    </div>
                    <div class="flex flex-col justify-end">
                        <!-- <label for="first_name" class="block mb-2 text-[16px] font-bold font-manrope text-zinc-800">Height</label> -->
                        <button class="btn-fill-dark h-11" @click="calculateBMI()">
                            Calculate
                        </button>
                    </div>

                </div>
                <div >
                    <h3 class="block text-[16px] font-bold font-manrope text-zinc-800 text-center" v-if="BMI">
                        Your BMI is : {{ BMI }}
                    </h3>
                    <h3 class="block text-[16px] font-bold font-manrope text-red-500 text-center mt-6" v-if="error">
                        {{ error }}
                    </h3>

                </div>


            </div>

        </div>
        <div>
            <h3 class="text-dark-teal font-archivo text-[16px] font-bold text-center mb-6 md:mb-10">

                BMI is widely used as a screening tool to categorize individuals into different weight categories:
            </h3>
            <img src="@/assets/img/bmi.svg" class="mx-auto mb-10 md:mb-20" alt="" srcset="">
            <p class="text-center w-full md:w-3/4 mx-auto px-6 md:px-0">

                While BMI provides a useful general guideline for assessing weight status, it doesn't directly measure body
                fat or account for factors such as muscle mass, bone density, or distribution of fat, which can vary among
                individuals. Therefore, BMI should be interpreted cautiously and may need to be complemented with other
                assessments for a more comprehensive evaluation of an individual's health status.
            </p>
        </div>

    </div>
   
    <div class="max-w-screen-xl mx-auto my-10 md:my-20">
        <div class="max-w-7xl mx-auto ">
            <div class="flex flex-col md:flex-row rounded-lg justify-between lg:relative lg:h-[500px] xl:h-[450px] bg-extra-light-teal p-10">
                <h3 class="font-manrope text-[45px] md:text-[60px] xl:text-[92px] lg:text-[76px] text-dark-teal text-center md:text-left font-extrabold tracking-tight leading-[50px] md:leading-[60px] lg:leading-[82px] pt-10 md:w-1/3">Chesterfield Bariatric Surgery</h3>
                <div class="lg:w-1/3">
                <img src="@/assets/img/deepu-5.png" alt="" srcset="" class="lg:absolute lg:bottom-0 lg:w-1/3 md:hidden lg:block">

                </div>
                    <div class="bg-white max-w-96 h-fit grid place-content-center p-8 md:p-12">
                        <h3 class="font-manrope tracking-tight font-semibold max-w-60 text-[#000A2D] text-3xl md:text-5xl mb-8">Dedicated to Give You the Best Treatment </h3>
                        <button class="btn-fill-dark w-full">View Services</button>
                    </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import HeroSection from '@/components/HeroSection.vue';
</script>