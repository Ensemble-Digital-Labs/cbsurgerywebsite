<template>
    <footer class="bg-extra-dark-teal ">
        <div class="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:pt-6">
            <div class="md:flex justify-around sm:gap-4 md:gap-10 lg:gap-20">
                <div class="mb-6 md:mb-0">
                    <a href="/" class="flex items-center">
                        <img src="/src/assets/footer-logo.svg" class=" h-auto w-1/2 md:w-60" alt="Logo" />
                    </a>
                </div>
                <div class="grid grid-cols gap-8 sm:gap-2 md:gap-4 sm:grid-cols-12 w-full">
                    <div class="sm:col-span-3 md:col-span-5 lg:col-span-3">
                        <h2 class="mb-6 font-manrope text-white font-bold text-[22px]">Helpful Link</h2>
                        <hr class="text-white w-20 h-2 my-4">
                        <ul class="text-gray-500 dark:text-gray-400 font-medium space-y-1">
                            <li>
                                <router-link to="/" class="text-white text-[15px] font-archivo">Request an
                                    Appointment</router-link>
                            </li>
                            <li>
                                <router-link to="/am-i-candidate" class="text-white text-[15px] font-archivo">Am
                                    I A Candidate</router-link>
                            </li>
                            <li>
                                <router-link to="/services"
                                    class="text-white text-[15px] font-archivo">Services</router-link>
                            </li>
                            <li>
                                <router-link to="/contact-us"
                                    class="text-white text-[15px] font-archivo">Contact</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="sm:col-span-4 md:col-span-5 lg:col-span-4">
                        <h2 class="mb-6 font-manrope text-white font-bold text-[22px]">Contact Us</h2>
                        <hr class="text-white w-20 h-2 my-4">
                        <div class="flex flex-col gap-2">
                            <div class="flex items-start gap-2">
                                <img src="/src/assets/icons/phone.svg" class="h-5 w-4">
                                <a href="tel:314 412 4430" class=" font-archivo text-white  text-[15px]">314 412 4430</a>
                            </div>
                            <div class="flex items-start gap-2">
                                <img src="/src/assets/icons/location.svg" class="h-5 w-4">
                                <span class=" font-archivo text-white text-[15px] ">10004 Kennerly Road,<br /> Suite 295B
                                    Saint Louis,<br />
                                    MO 63128</span>
                            </div>
                            <div class="flex gap-2 items-start">
                                <img src="/src/assets/icons/email.svg" class="h-5 w-4">
                                <a href="mailto:info@chesterfieldbariatricsurgery.com"
                                    class=" font-archivo text-white  text-[15px]">info@chesterfieldbariatric.com</a>
                            </div>
                        </div>
                    </div>
                    <div class="sm:col-span-5 md:col-span-7 lg:col-span-5">
                        <h2 class="mb-6 font-manrope text-white font-bold text-[22px]">Follow Us</h2>
                        <hr class="text-white w-20 h-2 my-4">
                        <div class=" max-w-xs mb-6">
                            <form
                                class="flex rounded-md bg-extra-light-teal p-1 pl-4 focus-within:ring-2 focus-within:ring-cyan-600 hover:ring-2 hover:ring-cyan-600">
                                <input
                                    class="w-full appearance-none bg-extra-light-teal text-black text-sm focus:outline-none"
                                    placeholder="Email">
                                <button
                                    class="ml-2 shrink-0 rounded-md text-white bg-dark-teal text-[16px] px-6 py-3 text-sm font-medium font-archivo hover:from-sky-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/50"
                                    type="submit">Sign Up</button>
                            </form>
                        </div>
                        <div class="flex gap-4 items-center">
                            <a href="http://" target="_blank"><img src="/src/assets/social-media/instagram.svg"
                                    class=" h-8 w-8" alt="Logo" /></a>
                            <a href="http://" target="_blank"><img src="/src/assets/social-media/facebook.svg"
                                    class=" h-8 w-8" alt="Logo" /></a>
                            <a href="http://" target="_blank"><img src="/src/assets/social-media/twitter.svg"
                                    class=" h-8 w-8" alt="Logo" /></a>
                            <a href="http://" target="_blank"><img src="/src/assets/social-media/linkedin.svg"
                                    class=" h-8 w-8" alt="Logo" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="my-6 border-[#ffffff17] max-w-7xl sm:mx-auto lg:my-8" />
            <div class="w-full mx-auto">
                <span class="text-sm text-white block mx-auto text-center">Copyright © 2024. All rights reserved</span>
            </div>
            <!-- Sticky button -->
            <div class="fixed bottom-10 right-0 left-0 flex justify-center">
                <router-link to="/appointments">
                    <button class="btn-fill-dark">Book an Appointment</button>
                </router-link>
            </div>

        </div>
    </footer>
</template> 
<script>
</script>