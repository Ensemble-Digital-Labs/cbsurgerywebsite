<template>
    <PublicPageLayout>
        <HeroSectionVue :title="'Am I Candidate'"></HeroSectionVue>
        <div class="max-w-screen-xl mx-auto my-10 lg:my-20 px-6 xl:px-0">
            <div class="grid md:grid-cols-2 gap-8 md:gap-10">
                <div class="grid gap-2">
                    <p>
                        In the United States, more than 30% of adults are classified as obese. Obesity poses significant
                        health risks beyond mere appearance, including diabetes, hypertension, elevated cholesterol levels,
                        sleep disturbances, and osteoarthritis.
                    </p>
                    <p class="hidden lg:block"> A prevalent misconception regarding weight loss surgery is its exclusive
                        suitability for severely obese individuals. Surprisingly, even if one is just 50 pounds overweight,
                        they may qualify as a candidate for weight loss surgery. It's crucial to consider weight loss
                        surgery before significant health issues arise.
                    </p>
                    <p class="hidden lg:block"> Despite concerted efforts by many overweight and obese individuals to lose
                        weight through dietary changes and physical activity, a considerable number face challenges.
                        Sometimes, these difficulties extend beyond personal control, influenced by genetic factors or
                        underlying medical conditions. If you find yourself in this situation, weight loss surgery could
                        present a viable solution.</p>
                </div>
                <div>
                    <img src="@/assets/img/am-i-candidate.png" class="rounded-xl h-full w-full object-cover" alt="">
                </div>

            </div>
            <div class="grid gap-6 lg:hidden my-8">
                <p> A prevalent misconception regarding weight loss surgery is its exclusive suitability for severely obese
                    individuals. Surprisingly, even if one is just 50 pounds overweight, they may qualify as a candidate for
                    weight loss surgery. It's crucial to consider weight loss surgery before significant health issues
                    arise.
                </p>
                <p>Despite concerted efforts by many overweight and obese individuals to lose weight through dietary changes
                    and physical activity, a considerable number face challenges. Sometimes, these difficulties extend
                    beyond personal control, influenced by genetic factors or underlying medical conditions. If you find
                    yourself in this situation, weight loss surgery could present a viable solution.</p>
            </div>
        </div>

        <div class="max-w-screen-xl mx-auto my-10 lg:my-20 px-4 md:px-6 xl:px-0" id="calculate-bmi">
            <div class="mb-10 d:mb-20">
                <h2 class="text-center tracking-tight md:text-[40px] mb-6 md:mb-8">
                    What is <span class="text-dark-teal">BMI</span>
                </h2>
                <p class="text-center"> A prevailing misconception surrounding weight loss surgery is its exclusive
                    application
                    to those
                    severely obese.</p>

            </div>
            <div class="mb-10 md:mb-20">
                <h3
                    class="text-center tracking-tight mb-4 md:mb-10 font-manrope font-semibold text-[24px] text-extra-dark-teal">
                    Am I a Candidate?
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
                <div>
                    <h3 class="block text-[16px] font-bold font-manrope text-zinc-800 text-center">
                        Your BMI is : {{ BMI }} <span class="text-red-600">Your BMI is very high, would you like to book an appointment !</span>
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
                <p class="text-center w-full md:w-3/4 mx-auto px-2 sm:px-6 md:px-0">

                    While BMI provides a useful general guideline for assessing weight status, it doesn't directly measure
                    body
                    fat or account for factors such as muscle mass, bone density, or distribution of fat, which can vary
                    among
                    individuals. Therefore, BMI should be interpreted cautiously and may need to be complemented with other
                    assessments for a more comprehensive evaluation of an individual's health status.
                </p>
            </div>

        </div>
        <ContactSectionVue>
        </ContactSectionVue>
    </PublicPageLayout>
</template>
<script>
export default {
    data() {
        return {
            weight: 0,
            feet: 0,
            inch: 0,
            BMI: null,
            error: ''
        }
    },
    methods: {
        calculateBMI() {
            if (this.weight > 0 && (this.feet > 0 || this.inch > 0)) {
                this.error = false
                var height = Number(this.feet) * 12 + Number(this.inch)
                console.log(height);
                this.BMI = Number(this.weight) / (height ** 2) * 703
                this.BMI = Math.round(this.BMI * 100) / 100
            } else {
                this.BMI = 0
                this.error = 'Please enter Weight and Height to calculate BMI'
            }
        }
    }


}
</script>
<script setup>
import PublicPageLayout from '../layout/PublicPageLayout.vue';
import HeroSectionVue from '@/components/HeroSection.vue';
import ContactSectionVue from '@/components/ContactSection.vue';
</script>