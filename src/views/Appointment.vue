<template>
    <HeroSection :title="'Make Appointment'"></HeroSection>
    <div class="bg-white p-4 sm:p-16 w-full md:w-full lg:w-8/12 xl:w-5/12 md:shadow-lg shadow-slate-200 md:-mt-20  mx-auto">

        <div class="my-4">
            <label for="firstName" class="block mb-2 text-[16px] font-bold font-manrope text-zinc-800">Your
                Name<span class="text-dark-teal">*</span></label>
            <input type="text" id="firstName" v-model="firstName"
                class="bg-gray-50 border border-gray text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Full name" required />
        </div>
        <div class="my-4">

            <div class="md:flex gap-2">
                <label for="Gender" class="block mb-2 pr-4 text-[16px] font-bold font-manrope text-zinc-800">Gender<span
                        class="text-dark-teal">*</span></label>
                <div class="flex items-center me-4">
                    <input id="inline-radio" type="radio" value="" name="inline-radio-group"
                        class="w-4 h-4 text-dark-teal border-gray bg-extra-light-teal">
                    <label for="inline-radio"
                        class="ms-2 font-semibold font-manrope text-[16px] text-zinc-800 dark:text-gray-300">Male</label>
                </div>
                <div class="flex items-center me-4">
                    <input id="inline-2-radio" type="radio" value="" name="inline-radio-group"
                        class="w-4 h-4 text-dark-teal border-gray bg-extra-light-teal">
                    <label for="inline-2-radio"
                        class="ms-2 font-semibold font-manrope text-[16px] text-zinc-800 dark:text-gray-300">Female</label>
                </div>
                <div class="flex items-center me-4">
                    <input id="inline-2-radio" type="radio" value="" name="inline-radio-group"
                        class="w-4 h-4 text-dark-teal border-gray bg-extra-light-teal">
                    <label for="inline-2-radio"
                        class="ms-2 font-semibold font-manrope text-[16px] text-zinc-800 dark:text-gray-300">Other</label>
                </div>
            </div>

        </div>

        <div class="grid md:grid-cols-2 gap-y-4 md:gap-4 my-4">
            <div>
                <label for="dob" class="block mb-2 text-[16px] font-bold font-manrope text-zinc-800">Date Of Birth<span
                        class="text-dark-teal">*</span></label>
                <input type="date" id="dob" v-model="dob"
                    class="bg-gray-50 border border-gray text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required />
            </div>
            <div>
                <label for="appointmentDate" class="block mb-2 text-[16px] font-bold font-manrope text-zinc-800">Preferred
                    Date of Appointment<span class="text-dark-teal">*</span></label>
                <input type="date" id="appointmentDate" v-model="appointmentDate"
                    class="bg-gray-50 border border-gray text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required />
            </div>
        </div>

        <div class="grid md:grid-cols-2 gap-y-4 md:gap-4 my-4">
            <div>
                <label for="phoneNumber" class="block mb-2 text-[16px] font-bold font-manrope text-zinc-800">Phone
                    Number<span class="text-dark-teal">*</span></label>
                <input type="text" id="phoneNumber" v-model="phoneNumber"
                    class="bg-gray-50 border border-gray text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Add Phone Number " required />
            </div>
            <div>
                <label for="email" class="block mb-2 text-[16px] font-bold font-manrope text-zinc-800">Email<span
                        class="text-dark-teal">*</span></label>
                <input type="email" id="email" v-model="email"
                    class="bg-gray-50 border border-gray text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Add Email" required />
            </div>
        </div>

        <p class="py-4 md:flex items-center gap-4">
            <input id="inline-2-radio" type="radio" value="" name="inline-radio-group"
                class="w-4 h-4 text-dark-teal border-gray bg-extra-light-teal">
            I consent to receiving email correspondence regarding my inquiry.<span class="text-dark-teal">*</span>
        </p>

        <div class="w-full">
            <button class="btn-fill-dark h-11 w-full py-4 grid content-center">
                Submit
            </button>
        </div>

    </div>

    <div class="max-w-screen-xl mx-auto my-10 lg:my-20 px-6 xl:px-0">
        <h3
            class="text-center text-[30px] md:text-[40px] text-extra-dark-teal font-manrope font-extrabold py-10 tracking-tight">
            Why Bariatric Surgery?</h3>
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
            <p class="text-center"> Body Mass Index (BMI) is a measure commonly used to assess whether a person has a
                healthy body weight in relation to their height.
            </p>

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

    <div class="max-w-screen-xl mx-auto mt-10 md:mt-20">
        <div class="max-w-7xl mx-auto ">
            <div
                class="flex flex-col sm:flex-row rounded-lg justify-between lg:relative lg:h-[500px] xl:h-[450px] bg-extra-light-teal md:gap-10 lg:gap-0 p-4 md:p-10">
                <div class="sm:w-1/2 md:pt-10 md:w-1/2 lg:w-1/2 xl:w-1/3 grid place-content-center sm:pl-10 md:pl-0 xl:pl-20">
                    <h3
                        class="font-manrope text-[35px] sm:text-[60px] xl:text-[82px] lg:text-[76px] text-dark-teal text-center sm:text-left font-extrabold tracking-tight leading-[30px] sm:leading-[60px] lg:leading-[82px]">
                        Chesterfield Bariatric Surgery</h3>
                    <router-link to="/services"><button class="btn-fill-dark hidden sm:block md:hidden lg:block xl:hidden mt-10">View Services</button></router-link>
                </div>



                <div class="xl:w-1/3 sm:w-1/2 md:w-auto lg:w-1/2 md:hidden lg:block">
                    <img src="@/assets/img/deepu-5.png" alt="" srcset=""
                        class="lg:absolute lg:bottom-0 h-full md:h-auto md:w-auto lg:h-[510px] w-full object-cover ">

                </div>
                <div class="bg-white sm:hidden md:block lg:hidden xl:block max-w-96 h-fit grid place-content-center p-4 sm:p-8">
                    <h3 class="font-manrope tracking-tight font-semibold max-w-60 text-[#000A2D] text-3xl lg::text-5xl mb-8">
                        Dedicated to Give You the Best Treatment </h3>
                    <router-link to="/services"><button class="btn-fill-dark w-full">View Services</button></router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import HeroSection from '@/components/HeroSection.vue';
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>