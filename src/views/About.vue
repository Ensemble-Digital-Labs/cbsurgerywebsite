<template>
    <PublicPageLayout>
        <div class="bg-extra-light-teal max-w-full mx-auto py-20 md:py-36 md:pb-56 px-4">
            <h6 class="text-center">About us</h6>
            <h2 class="text-center text-[28px] md:text-[40px] mb-2 md:mb-6">Chesterfield</h2>
            <h1 class="text-center text-[36px] md:text-[56px] leading-10 -mt-4">Bariatric Surgery</h1>
        </div>
        <div
            class="bg-white px-1 md:px-6 py-4 md:py-10 w-full md:w-4/5 shadow-lg shadow-slate-200 -mt-14 md:-mt-48  mx-auto">
            <div class="text-center px-4 md:px-5 py-5">
                <p>
                    Chesterfield Bariatric Surgery, under the expert management of Dr. Deepu Sudhakaran, MD, is a
                    distinguished bariatric clinic located in Saint Louis. Bariatric surgery is a specialized procedure
                    aimed at helping individuals who struggle with severe obesity and related health conditions. It
                    involves surgical alterations to the digestive system to promote weight loss and improve overall
                    health. This procedure is typically recommended for individuals who have been unsuccessful in
                    achieving significant weight loss through diet, exercise, and other non-surgical methods. Bariatric
                    surgery can lead to substantial weight loss, improvement in obesity-related health issues such as
                    type 2 diabetes and high blood pressure, and enhanced quality of life.
                </p>
                <p>
                    Dr. Deepu Sudhakaran, a highly skilled general surgery specialist with 26 years of experience, is
                    dedicated to providing exceptional care to patients seeking bariatric solutions. Dr. Sudhakaran
                    obtained their medical degree from the Medical College Thiruvananthapuram, India, in 1997, and
                    completed a rigorous residency at LSU Health Sciences Center New Orleans School Of Medicine.
                    Currently practicing at Practice and affiliated with Mercy Hospital Jefferson and Mercy Hospital
                    South, Dr. Sudhakaran possesses extensive experience in treating various conditions, including
                    obesity, at varying frequencies.
                </p>
                <!-- <p>
                    Patients commend Dr. Sudhakaran, awarding an average rating of 4.5/5 based on 8 reviews. Their
                    office warmly welcomes new patients and offers telehealth appointments for added convenience. Fluent
                    in Hindi and Malayalam, Dr. Sudhakaran is board certified in Critical Care Surgery and accepts
                    multiple insurance plans. Patients seeking compassionate care and expertise in bariatric surgery can
                    rely on Dr. Deepu Sudhakaran and Chesterfield Bariatric Surgery for comprehensive treatment and
                    support.
                </p> -->
            </div>
            <!--
        <div class="flex items-center justify-center">
                    <button class="btn-fill-dark">
                        Book an Appointment
                    </button>
        </div> -->
        </div>

        <div class="max-w-screen-xl mx-auto px-4 sm:px-0 md:px-6 my-20">
            <div class="flex flex-col sm:flex-row items-end sm:gap-4 md:gap-10">
                <div class="sm:w-5/12 md:w-6/12 md:h-[450px] lg:h-[600px] xl:h-auto">
                    <img src="@/assets/img/deepu-7.png"
                        class="h-full object-cover object-right hidden md:block xl:hidden" alt="" srcset="">
                    <img src="@/assets/img/deepu-7.png"
                        class="h-full sm:h-96 md:h-full object-cover object-right md:hidden xl:block" alt="" srcset="">
                </div>
                <!-- <img src="@/assets/img/deepu.png" alt="" srcset="" class="md:w-6/12 object-contain object-right"> -->
                <div class="py-10 grid content-center sm:w-7/12 sm:pr-4 md:w-6/12">
                    <!-- <h6 class="md:px-0">About</h6>
                <h3 class=" text-dark-teal text-[22px] md:text-[47px] font-manrope font-extrabold tracking-tight">Dr. Deepu
                    Sudhakaran, MD </h3>
                <h4 class=" tracking-tight text-[#727272] font-manrope font-bold mb-2">CEO & FOUNDER</h4> -->
                    <h6 class="px-0 mb-4">More About</h6>
                    <h2 class=" text-dark-teal tracking-tight md:text-[40px] leading-[40px] mb-3">Dr. Deepu Sudhakaran,
                        MD</h2>
                    <h3 class=" font-manrope text-[#727272] text-[20px] font-extrabold mb-2">CEO & FOUNDER</h3>
                    <h3 class=" font-manrope text-sm md:text-xl text-dark-teal font-bold mb-2">Care Philosophy</h3>
                    <p class="text-[#636571]">
                        “I'm a very family-oriented person. I want patients to feel like I will treat them like family.
                        I'll
                        take very personal care of you from the time you see me until you have reached your goal.”
                    </p>
                    <div class="grid grid-cols gap-0 mb-2 sm:grid-cols-12">
                        <div class="py-2 sm:col-span-4 md:hidden lg:block">
                            <h3 class=" font-manrope text-sm md:text-xl text-dark-teal font-bold py-2">Specialty</h3>
                            <ul class="max-w-md space-y-1 text-[#636571] list-disc list-inside">
                                <li class=" font-archivo text-base font-normal text-[#636571]">Bariatric Surgery</li>
                                <li class=" font-archivo text-base font-normal text-[#636571]">General Surgery</li>
                            </ul>
                        </div>
                        <div class="py-2 sm:col-span-8 md:hidden lg:block">
                            <h3 class=" font-manrope text-sm md:text-xl text-dark-teal font-bold py-2">Board
                                Certifications</h3>
                            <ul class="max-w-md space-y-1 text-[#636571] list-disc list-inside">
                                <li class=" font-archivo text-base font-normal text-[#636571]">American Board of
                                    Surgery </li>
                                <li class=" font-archivo text-base font-normal text-[#636571]">Amer Bd Surgery (Surgical
                                    Critical Care)</li>
                            </ul>
                        </div>
                        <div class="py-2 sm:col-span-12 md:hidden lg:block">
                            <h3 class=" font-manrope text-sm md:text-xl text-dark-teal font-bold py-2">Education</h3>
                            <h4 class=" font-archivo text-base font-normal text-[#636571]"><b>Medical School</b>:
                                Medical
                                College Of Thiruvananthapuram</h4>
                        </div>
                    </div>

                    <div class="flex items-center gap-4">
                        <router-link to="/dr-deepu-sudhakaran">
                            <button class="btn-fill-dark inline-flex items-center gap-2">
                                Learn More
                                <img src="/src/assets/icons/arrow.png" alt="arrow" />
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>
            <div>
                <div class="grid grid-cols gap-0 mb-6 md:grid-cols-12">
                    <div class="py-2 md:col-span-6 hidden md:block lg:hidden">
                        <h3 class=" font-manrope text-sm md:text-xl text-dark-teal font-bold py-2">Specialty</h3>
                        <ul class="max-w-md space-y-1 text-[#636571] list-disc list-inside">
                            <li class=" font-archivo text-base font-normal text-[#636571]">Bariatric Surgery</li>
                            <li class=" font-archivo text-base font-normal text-[#636571]">General Surgery</li>
                        </ul>
                    </div>
                    <div class="py-2 md:col-span-6 hidden md:block lg:hidden">
                        <h3 class=" font-manrope text-sm md:text-xl text-dark-teal font-bold py-2">Board Certifications
                        </h3>
                        <ul class="max-w-md space-y-1 text-[#636571] list-disc list-inside">
                            <li class=" font-archivo text-base font-normal text-[#636571]">American Board of Surgery 
                            </li>
                            <li class=" font-archivo text-base font-normal text-[#636571]">Amer Bd Surgery (Surgical
                                Critical Care)</li>
                        </ul>
                    </div>
                    <div class="py-2 sm:col-span-12 hidden md:block lg:hidden">
                        <h3 class=" font-manrope text-sm md:text-xl text-dark-teal font-bold py-2">Education</h3>
                        <h4 class=" font-archivo text-base font-normal text-[#636571]"><b>Medical School</b>: Medical
                            College Of Thiruvananthapuram</h4>
                    </div>
                </div>
            </div>
        </div>
        <OurTeam></OurTeam>
        <TheTestimonial></TheTestimonial>
    </PublicPageLayout>

</template>
<script setup>
import PublicPageLayout from '../layout/PublicPageLayout.vue';

import OurTeam from '@/components/OurTeam.vue';
import TheTestimonial from '@/components/TheTestimonial.vue';
</script>