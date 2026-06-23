<template>
    <div class="w-full content-center mx-auto my-20  xl:my-32">
        <div class="max-w-4xl mx-auto px-4 md:px-10">
            <h6 class="text-center">FAQ</h6>
            <h3
                class="text-center my-7 text-[#1f1f1f] leading-tight text-2xl md:text-[52px] font-extrabold font-manrope">
                Frequently Asked Questions</h3>
            <!-- <p class="text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing.</p>
            <p class="text-center">Aenean commodo ligula aenean massa.</p> -->
            <div id="accordion-collapse" data-accordion="collapse" class="my-10">
                <h3 id="accordion-collapse-heading-1" class="p-1">
                    <button type="button"
                        class="flex items-left font-manrope justify-between w-full p-4 font-bold rtl:text-right text-gray-500 border rounded border-[#EEEEEE] focus:text-dark-teal hover:bg-gray-100  gap-3"
                        data-accordion-target="#accordion-collapse-body-1" aria-expanded="false"
                        aria-controls="accordion-collapse-body-1">
                        <span class="text-left">Do your surgeons hold board certification? </span>
                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h3>
                <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
                    <div class="p-5  border-[#EEEEEE]">
                        <p class="mb-2 text-gray-500">
                            Indeed, our surgeon, Dr. Deepu Sudhakaran, holds certification from the American Board of
                            Surgery, reflecting his dedication to superior standards in the field. His comprehensive
                            credentials underscore his commitment to excellence. He is licensed to practice medicine in
                            Louisiana, South Carolina, Illinois, and Missouri, with additional training in medical
                            licensure in Florida. Moreover, he possesses permanent licensure from the Medical Council of
                            India and holds a medical license in Abu Dhabi, UAE. </p>
                    </div>
                </div>
                <h3 id="accordion-collapse-heading-2" class="p-1">
                    <button type="button"
                        class="flex items-left font-manrope justify-between w-full p-4 font-bold rtl:text-right text-gray-500 border rounded border-[#EEEEEE]   focus:text-dark-teal  hover:bg-gray-100  gap-3"
                        data-accordion-target="#accordion-collapse-body-2" aria-expanded="false"
                        aria-controls="accordion-collapse-body-2">
                        <span class="text-left">Do the surgeons primarily conduct cases through open surgery or
                            laparoscopy?</span>
                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h3>
                <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
                    <div class="p-5  border-[#EEEEEE] ">
                        <p class="mb-2 text-gray-500">Thanks to our surgeons' extensive training and expertise in
                            laparoscopic procedures, including advanced techniques like robotic surgery, most of our
                            operations are conducted using advanced laparoscopy or robotic surgery. This approach offers
                            numerous patient benefits, such as a decreased risk of wound infections, reduced pain,
                            faster recovery times, and shorter hospital stays.
                        </p>
                    </div>
                </div>
                <h3 id="accordion-collapse-heading-3" class="p-1">
                    <button type="button"
                        class="flex items-left font-manrope justify-between w-full p-4 font-bold rtl:text-right text-gray-500 border rounded border-[#EEEEEE]   focus:text-dark-teal hover:bg-gray-100 gap-3"
                        data-accordion-target="#accordion-collapse-body-3" aria-expanded="false"
                        aria-controls="accordion-collapse-body-3">
                        <span class="text-left">What bariatric procedures do your surgeons specialize in? </span>
                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h3>
                <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
                    <div class="p-5 border-[#EEEEEE] ">
                        <p class="mb-2 text-gray-500">Our surgeons possess extensive expertise in bariatric surgery,
                            showcasing proficiency in the three main procedures: gastric bypass surgery, gastric sleeve
                            surgery, and revisional surgery.
                        </p>
                    </div>
                </div>
                <h3 id="accordion-collapse-heading-4" class="p-1">
                    <button type="button"
                        class="flex items-left font-manrope justify-between w-full p-4 font-bold rtl:text-right text-gray-500 border rounded border-[#EEEEEE]   focus:text-dark-teal hover:bg-gray-100 gap-3"
                        data-accordion-target="#accordion-collapse-body-4" aria-expanded="false"
                        aria-controls="accordion-collapse-body-4">
                        <span class="text-left">What is the complication rate associated with the procedure?</span>
                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h3>
                <div id="accordion-collapse-body-4" class="hidden" aria-labelledby="accordion-collapse-heading-4">
                    <div class="p-5 border-[#EEEEEE] ">
                        <p class="mb-2 text-gray-500">While every surgery and anesthesia carry inherent risks, including
                            potential death and other complications, we are pleased to report that our rates are
                            significantly below the national average. Our fast-track program's mortality rate is an
                            exceptional 0.0005%, surpassing the national average. Specifically, the national average for
                            the gastric sleeve procedure is 0.08%. It's worth noting that our mortality and complication
                            rates are lower than those typically associated with gallbladder or hip replacement surgery.
                        </p>
                    </div>
                </div>
                <h3 id="accordion-collapse-heading-5" class="p-1">
                    <button type="button"
                        class="flex items-left font-manrope justify-between w-full p-4 font-bold rtl:text-right text-gray-500 border rounded border-[#EEEEEE]   focus:text-dark-teal hover:bg-gray-100 gap-3"
                        data-accordion-target="#accordion-collapse-body-5" aria-expanded="false"
                        aria-controls="accordion-collapse-body-5">
                        <span class="text-left">Which bariatric procedure would be most suitable for me, and why?
                            Additionally, what are the associated risks?
                        </span>
                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h3>
                <div id="accordion-collapse-body-5" class="hidden" aria-labelledby="accordion-collapse-heading-5">
                    <div class="p-5 border-[#EEEEEE] ">
                        <p class="mb-2 text-gray-500">After gaining insights into weight loss surgery through resources
                            like this website, you and your surgeon will collaborate to determine the most suitable
                            procedure for your needs. While all surgeries involve inherent risks, including the risk of
                            mortality, it's important to note that the health risks and medical complications associated
                            with morbid obesity often outweigh those associated with weight loss surgery itself.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>
