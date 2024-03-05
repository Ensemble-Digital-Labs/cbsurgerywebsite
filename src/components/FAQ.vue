<template>
    <div class="w-full content-center mx-auto my-20">
        <div class="max-w-4xl mx-auto px-4 md:px-10">
            <h6 class="text-center">FAQ</h6>
            <h3 class="text-center my-7 text-[#1f1f1f] leading-tight text-2xl md:text-[52px] font-extrabold font-manrope">Frequently Asked Questions</h3>
            <p class="text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing.</p>
            <p class="text-center">Aenean commodo ligula aenean massa.</p>
            <div id="accordion-collapse" data-accordion="collapse" class="my-10">
                <h3 id="accordion-collapse-heading-1" class="p-1">
                    <button type="button"
                        class="flex items-left font-manrope justify-between w-full p-4 font-bold rtl:text-right text-gray-500 border rounded border-[#EEEEEE] focus:text-dark-teal hover:bg-gray-100  gap-3"
                        data-accordion-target="#accordion-collapse-body-1" aria-expanded="false"
                        aria-controls="accordion-collapse-body-1">
                        <span class="text-left">Are your Doctors Certified ?</span>
                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h3>
                <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
                    <div class="p-5  border-[#EEEEEE]">
                        <p class="mb-2 text-gray-500">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                            commodo
                            ligula eget dolor. Aenean massa. Cum sociis
                            natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                            ultricies
                            nec, pellentesque
                            eu, pretium quis, sem.</p>
                    </div>
                </div>
                <h3 id="accordion-collapse-heading-2" class="p-1">
                    <button type="button"
                        class="flex items-left font-manrope justify-between w-full p-4 font-bold rtl:text-right text-gray-500 border rounded border-[#EEEEEE]   focus:text-dark-teal  hover:bg-gray-100  gap-3"
                        data-accordion-target="#accordion-collapse-body-2" aria-expanded="false"
                        aria-controls="accordion-collapse-body-2">
                        <span class="text-left">Do your surgeons perform the majority of cases open or laparoscopically?</span>
                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h3>
                <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
                    <div class="p-5  border-[#EEEEEE] ">
                        <p class="mb-2 text-gray-500">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                            commodo
                            ligula eget dolor. Aenean massa. Cum sociis
                            natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                            ultricies
                            nec, pellentesque
                            eu, pretium quis, sem.
                        </p>
                    </div>
                </div>
                <h3 id="accordion-collapse-heading-3" class="p-1">
                    <button type="button"
                        class="flex items-left font-manrope justify-between w-full p-4 font-bold rtl:text-right text-gray-500 border rounded border-[#EEEEEE]   focus:text-dark-teal hover:bg-gray-100 gap-3"
                        data-accordion-target="#accordion-collapse-body-3" aria-expanded="false"
                        aria-controls="accordion-collapse-body-3">
                        <span class="text-left">What types of bariatric procedures have your surgeons performed?</span>
                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h3>
                <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
                    <div class="p-5 border-[#EEEEEE] ">
                        <p class="mb-2 text-gray-500">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                            commodo
                            ligula eget dolor. Aenean massa. Cum sociis
                            natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                            ultricies
                            nec, pellentesque
                            eu, pretium quis, sem.
                        </p>
                    </div>
                </div>
                <h3 id="accordion-collapse-heading-4" class="p-1">
                    <button type="button"
                        class="flex items-left font-manrope justify-between w-full p-4 font-bold rtl:text-right text-gray-500 border rounded border-[#EEEEEE]   focus:text-dark-teal hover:bg-gray-100 gap-3"
                        data-accordion-target="#accordion-collapse-body-4" aria-expanded="false"
                        aria-controls="accordion-collapse-body-4">
                        <span class="text-left">What is the mortality rate?</span>
                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h3>
                <div id="accordion-collapse-body-4" class="hidden" aria-labelledby="accordion-collapse-heading-4">
                    <div class="p-5 border-[#EEEEEE] ">
                        <p class="mb-2 text-gray-500">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                            commodo
                            ligula eget dolor. Aenean massa. Cum sociis
                            natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                            ultricies
                            nec, pellentesque
                            eu, pretium quis, sem.
                        </p>
                    </div>
                </div>
                <h3 id="accordion-collapse-heading-5" class="p-1">
                    <button type="button"
                        class="flex items-left font-manrope justify-between w-full p-4 font-bold rtl:text-right text-gray-500 border rounded border-[#EEEEEE]   focus:text-dark-teal hover:bg-gray-100 gap-3"
                        data-accordion-target="#accordion-collapse-body-5" aria-expanded="false"
                        aria-controls="accordion-collapse-body-5">
                        <span class="text-left">Which bariatric procedure is best for me? Why? What are the risks involved?</span>
                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h3>
                <div id="accordion-collapse-body-5" class="hidden" aria-labelledby="accordion-collapse-heading-5">
                    <div class="p-5 border-[#EEEEEE] ">
                        <p class="mb-2 text-gray-500">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                            commodo
                            ligula eget dolor. Aenean massa. Cum sociis
                            natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies
                        nec, pellentesque
                        eu, pretium quis, sem.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div></template>
<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>