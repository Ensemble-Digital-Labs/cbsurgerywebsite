<template>
    <header class="w-full border-b border-light-teal">
        <div class="mx-auto md:flex flex-col items-center py-4 px-2 hidden border-b border-b-zinc-100">
            <div class="flex flex-col md:flex-row md:items-center md:space-x-2 md:divide-x divide-light-teal">
                <div class="flex items-center gap-2">
                    <img src="@/assets/icons/phone.png" class="w-4 h-4">
                    <p class="text-[#636468]">314 412 4430</p>
                </div>
                <div class="flex items-center gap-2 md:pl-2">
                    <img src="@/assets/icons/map.png" class="w-4 h-4">
                    <p class="text-[#636468]">10004 Kennerly Road
                        Suite 295B Saint Louis, MO 63128</p>
                </div>

            </div>
        </div>
        <div class="max-w-screen-xl mx-auto">
            <nav class="bg-white border-gray-200 dark:bg-gray-900">
                <div class="flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="@/assets/cbs-logo.svg" class="h-24 md:h-28 w-auto" alt="Chester logo" />
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button"
                        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-dark-teal rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-light-teal"
                        aria-controls="navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul
                            class="font-medium flex flex-col md:p-0 mt-4 border divide-y divide-zinc-400 md:divide-y-0 border-zinc-400 rounded-lg bg-gray-50 md:flex-row md:space-x-2 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                            <li>
                                <router-link to="/"
                                    class="block py-3 px-3 font-manrope text-[#211C1A] font-extrabold hover:text-white md:hover:text-dark-teal md:hover:bg-transparent hover:bg-dark-teal rounded-t-lg"
                                    aria-current="page">Home</router-link>
                            </li>
                            <li>
                                <router-link to="/about-us"
                                    class="block py-3 px-3 font-manrope text-[#211C1A] font-extrabold  hover:text-white md:hover:text-dark-teal md:hover:bg-transparent  hover:bg-dark-teal "
                                    aria-current="page">About</router-link>
                            </li>
                            <li>
                                <router-link to="/services"
                                    class="block py-3 px-3 font-manrope text-[#211C1A] font-extrabold  hover:text-white md:hover:text-dark-teal md:hover:bg-transparent hover:bg-dark-teal "
                                    aria-current="page">Services</router-link>
                            </li>
                            <li>
                                <router-link to="/am-i-candidate"
                                    class="block py-3 px-3 font-manrope text-[#211C1A] font-extrabold  hover:text-white md:hover:text-dark-teal md:hover:bg-transparent hover:bg-dark-teal "
                                    aria-current="page">Am I Candidate</router-link>
                            </li>
                            <li>
                                <router-link to="/success-stories"
                                    class="block py-3 px-3 font-manrope text-[#211C1A] font-extrabold  hover:text-white md:hover:text-dark-teal md:hover:bg-transparent hover:bg-dark-teal "
                                    aria-current="page">Success stories</router-link>
                            </li>
                            <li>
                                <router-link to="/contact-us"
                                    class="block py-3 px-3 font-manrope text-[#211C1A] font-extrabold  hover:text-white md:hover:text-dark-teal md:hover:bg-transparent hover:bg-dark-teal rounded-b-lg"
                                    aria-current="page">Contact Us</router-link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    </header>
</template> 
<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>