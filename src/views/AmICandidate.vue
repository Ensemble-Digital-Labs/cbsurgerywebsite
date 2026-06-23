<template>
    <PublicPageLayout>
        <HeroSectionVue :title="'Am I a Candidate?'"></HeroSectionVue>
        <div class="max-w-screen-xl mx-auto my-10 lg:my-20 px-6 xl:px-0">
            <div class="grid md:grid-cols-2 gap-8 md:gap-10">
                <div class="grid gap-2">
                    <p>
                        In the United States, approximately 68% of adults are categorized as overweight or obese,
                        presenting substantial health risks beyond cosmetic concerns, including diabetes, hypertension,
                        elevated cholesterol, sleep disorders, and osteoarthritis.

                    </p>
                    <p> A prevalent misconception about weight loss surgery is its exclusive
                        suitability for severely obese individuals. Surprisingly, even those just 50 pounds overweight
                        may quality. It's crucial to consider surgery before significant health complications arise.

                    </p>
                    <p class="hidden lg:block"> Despite diligent efforts to lose weight through lifestyle changes, many
                        face challenges beyond personal control, influenced by genetics or underlying medical
                        conditions. In such cases, weight loss surgery could offer a viable solution.
                    </p>
                    <p class="hidden lg:block">Typically, individuals with a BMI over 35 and one comorbid condition such
                        as diabetes,
                        hypertension, sleep apnea, or hyperlipidemia, or those with a BMI over 40 and failed weight loss
                        attempts, qualify for bariatric surgery.
                    </p>
                </div>
                <div>
                    <!-- <img src="@/assets/img/am-i-candidate.png" class="rounded-xl h-full w-full object-cover" alt=""> -->
                    <iframe class="w-full md:h-[400px]" src="https://player.vimeo.com/video/938490114" frameborder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                        title="Robotic Surgery"></iframe>
                    <!-- <iframe title="vimeo-player" src="?h=8ddc6b2e58" width="640" height="360" frameborder="0"    allowfullscreen></iframe> -->
                </div>

            </div>
            <div class="grid gap-6 lg:hidden my-8">

                <p> Despite diligent efforts to lose weight through lifestyle changes, many
                    face challenges beyond personal control, influenced by genetics or underlying medical
                    conditions. In such cases, weight loss surgery could offer a viable solution.
                </p>
                <p>Typically, individuals with a BMI over 35 and one comorbid condition such as diabetes,
                    hypertension, sleep apnea, or hyperlipidemia, or those with a BMI over 40 and failed weight loss
                    attempts, qualify for bariatric surgery.
                </p>
            </div>
        </div>

        <div class="max-w-screen-xl mx-auto my-10 lg:my-20 px-4 md:px-6 xl:px-0" id="calculate-bmi">
            <div class="mb-10 d:mb-20">
                <h2 class="text-center tracking-tight md:text-[40px] mb-6 md:mb-8">
                    What is <span class="text-dark-teal">BMI</span>
                </h2>
                <p class="text-center"> Body Mass Index (BMI) is a measure commonly used to assess whether a person has
                    a healthy body weight in relation to their height.</p>

            </div>
            <div class="mb-10 md:mb-20">
                <h3
                    class="text-center tracking-tight mb-4 md:mb-10 font-manrope font-semibold text-[24px] text-extra-dark-teal">
                    Am I a Candidate?
                </h3>
                <div class="shadow-[0_0_35px_0] rounded-xl shadow-zinc-500/20 p-4 max-w-4xl mx-auto">
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
                        <h3 class="block text-[16px] font-bold font-manrope text-zinc-800 text-center" v-if=BMI>
                            Your BMI is : {{ BMI }} <span class="text-red-600" v-if="BMI > 35">, You may qualify for
                                bariatric surgery and change your health. Please contact <a href="tel:314-403-1016 " class="underline">314-403-1016 </a>to check your
                                insurance coverage. Or call <a href="tel:314-500-2424" class="underline">314-500-2424</a> to make an appointment. You can also make an
                                <router-link to="/appointments" class="underline">online appointment here.</router-link>!</span>
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
                <img src="@/assets/img/bmi2.svg" class="mx-auto mb-10 md:mb-20" alt="" srcset="">
                <p class="text-center w-full md:w-3/4 mx-auto px-2 sm:px-6 md:px-0">

                    Although BMI serves as a helpful general reference for evaluating weight status, it does not
                    directly quantify body fat or consider factors like muscle mass, bone density, or fat distribution,
                    all of which can differ from person to person. Consequently, interpreting BMI requires caution, and
                    additional assessments may be necessary to provide a more thorough evaluation of an individual's
                    health status.
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