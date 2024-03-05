<template>
    <HeroSectionVue :title="'Contact Us'"></HeroSectionVue>
    <div class="max-w-screen-xl mx-auto">
        <div class="grid md:grid-cols-12 lg:grid-cols-2 md:gap-4">
            <div class="md:col-span-7 lg:col-span-1">
                <div class="py-10 space-y-4  px-4 md:px-8 lg:px-10 xl:px-0">
                    <div>
                        <div>
                            <label for="firstName" class="block mb-2 text-[16px] font-bold font-manrope text-zinc-800">Your
                                Name<span class="text-dark-teal">*</span></label>
                            <input type="text" id="firstName" v-model="firstName"
                                class="bg-gray-50 border border-gray text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Full Name" required />
                        </div>
                    </div>
                    <div class="grid md:grid-cols-2 gap-y-4 md:gap-4">
                        <div>
                            <label for="phoneNumber"
                                class="block mb-2 text-[16px] font-bold font-manrope text-zinc-800">Phone<span
                                    class="text-dark-teal">*</span></label>
                            <input type="text" id="phoneNumber" v-model="phoneNumber"
                                class="bg-gray-50 border border-gray text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Add Phone number " required />
                        </div>
                        <div>
                            <label for="email"
                                class="block mb-2 text-[16px] font-bold font-manrope text-zinc-800">Email<span
                                    class="text-dark-teal">*</span></label>
                            <input type="email" id="email" v-model="email"
                                class="bg-gray-50 border border-gray text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Add Email" required />
                        </div>
                        
                    </div>
                    <div>

                        <label for="message"
                            class="block mb-2 text-[16px] font-bold font-manrope text-zinc-800">Comments / Questions<span
                                class="text-dark-teal">*</span></label>
                        <textarea id="M+message" v-model="message" rows="6"
                            class="bg-gray-50 border border-gray text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Type here..." required></textarea>

                    </div>
                    <div>
                        <button class="btn-fill-dark h-11 w-full md:w-auto" @click="calculateBMI()">
                            Send Message
                        </button>
                    </div>
                </div>

            </div>

            <div class=" bg-dark-teal xl:bg-extra-dark-teal xl:m-10 p-2 py-4 md:p-6 xl:p-10 md:col-span-5 lg:col-span-1">
                <h3 class=" font-manrope font-medium text-xl xl:text-3xl text-white mb-8">
                    Contact Us
                </h3>
                <div class="flex flex-col mb-10 gap-2">
                    <div class="flex gap-2">
                        <img src="/src/assets/icons/phone.svg" class="h-5 w-4">
                        <a href="tel:314 412 4430" class=" font-archivo text-white ">314 412 4430</a>
                    </div>
                    <div class="flex gap-2">
                        <img src="/src/assets/icons/location.svg" class="h-5 w-4">
                        <a href="#" class=" font-archivo text-white ">10004 Kennerly Road,<br /> Suite 295B Saint
                            Louis,<br />
                            MO 63128</a>
                    </div>
                    <div class="flex gap-2">
                        <img src="/src/assets/icons/email.svg" class="h-5 w-4">
                        <a href="mailto:Info@Chesterfieldbariatricsurgery.com"
                            class="font-archivo text-white">Info@chesterfieldbariatric.com</a>
                    </div>
                </div>
                <div>
                    <iframe frameborder="0" scrolling="no" class=" w-full grayscale" marginheight="0" marginwidth="0"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a
                            href="https://www.gps.ie/">gps vehicle tracker</a>
                        </iframe>
                </div>
            </div>

        </div>

    </div>
</template>
<script setup>
import HeroSectionVue from '@/components/HeroSection.vue';
</script>
