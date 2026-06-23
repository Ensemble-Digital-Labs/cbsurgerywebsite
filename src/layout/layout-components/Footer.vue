<template>
    <footer class="bg-extra-dark-teal ">
        <div class="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:pt-10">
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
                                <router-link to="/appointments" class="text-white text-[15px] font-archivo">Request an
                                    Appointment</router-link>
                            </li>
                            <li>
                                <router-link to="/bariatricSurgeryStLouis/BMI-calculator" class="text-white text-[15px] font-archivo">Am
                                    I A Candidate ?</router-link>
                            </li>
                            <li>
                                <router-link to="/weight-loss-surgery/treatments"
                                    class="text-white text-[15px] font-archivo">Services</router-link>
                            </li>
                            <li>
                                <router-link to="/contact-us"
                                    class="text-white text-[15px] font-archivo">Contact</router-link>
                            </li>
                            <li>
                                <router-link to="/BariatricSurgeryStLouis/HIPPA" class="text-white text-[15px] font-archivo">HIPAA
                                    Policy</router-link>
                            </li>
                            <li>
                                <router-link to="/BariatricSurgeryStLouis/Weight-Loss-Surgery-Cost" class="text-white text-[15px] font-archivo">Insurance and
                                    Self Pay Options</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="sm:col-span-4 md:col-span-5 lg:col-span-4">
                        <h2 class="mb-6 font-manrope text-white font-bold text-[22px]">Contact Us</h2>
                        <hr class="text-white w-20 h-2 my-4">
                        <div class="flex flex-col gap-2">
                            <div class="flex items-start gap-2">
                                <img src="/src/assets/icons/phone.svg" class="h-5 w-4">
                                <a href="tel:+1 314 500 2424 " class=" font-archivo text-white  text-[15px]">+1 (314)
                                    500 2424</a>
                            </div>
                            <div class="flex items-start gap-2">
                                <img src="/src/assets/icons/location.svg" class="h-5 w-4">
                                <span class=" font-archivo text-white text-[15px] ">10004 Kennerly Road,<br /> Suite
                                    370A
                                    Saint Louis,<br />
                                    MO 63128</span>
                            </div>
                            <div class="flex items-start gap-2">
                                <img src="/src/assets/icons/location.svg" class="h-5 w-4">
                                <span class=" font-archivo text-white text-[15px] ">Clarkson Executive Building,<br />16216 Baxter Road, Suite 110
                                    Chesterfield,<br />
                                    MO 63017</span>
                            </div>
                            <div class="flex gap-2 items-start">
                                <img src="/src/assets/icons/email.svg" class="h-5 w-4">
                                <a href="mailto:info@cbsurgery.com"
                                    class=" font-archivo text-white  text-[15px]">info@cbsurgery.com</a>
                            </div>
                            <div class="flex gap-4 items-center">
                                <a href="https://www.instagram.com/chesterfield_bariatric_surgery/" target="_blank"><img
                                        src="/src/assets/social-media/instagram.svg" class=" h-8 w-8" alt="Logo" /></a>
                                <a href="https://www.facebook.com/drsudhakaran1" target="_blank"><img
                                        src="/src/assets/social-media/facebook.svg" class=" h-8 w-8" alt="Logo" /></a>
                                <a href="https://twitter.com/chesterfield_bs" target="_blank"><img
                                        src="/src/assets/social-media/twitter.svg" class=" h-8 w-8" alt="Logo" /></a>
                                <a href="https://www.linkedin.com/company/100912652/admin/feed/posts/"
                                    target="_blank"><img src="/src/assets/social-media/linkedin.svg" class=" h-8 w-8"
                                        alt="Logo" /></a>
                            </div>
                        </div>
                    </div>
                    <div class="sm:col-span-5 md:col-span-7 lg:col-span-5">
                        <h2 class="mb-6 font-manrope text-white font-bold text-[22px]">Follow Us</h2>
                        <hr class="text-white w-20 h-2 my-4">
                        <div class=" max-w-xs mb-6">
                            <form @submit.prevent="SubscriptionFormSubmit()"
                                class="flex rounded-md bg-extra-light-teal p-1 pl-4 focus-within:ring-2 focus-within:ring-cyan-600 hover:ring-2 hover:ring-cyan-600">
                                <input v-model="mailInfo.email" id="email" type="email"
                                    class="w-full appearance-none border-none bg-extra-light-teal text-black text-sm focus:outline-none border-transparent focus:border-transparent focus:ring-0"
                                    placeholder="Email" required>
                                <button
                                    class="ml-2 shrink-0 rounded-md text-white bg-dark-teal text-[16px] px-6 py-3 text-sm font-medium font-archivo hover:from-sky-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/50 disabled:opacity-60 disabled:cursor-not-allowed"
                                    type="submit"
                                    :disabled="isSubmitting"
                                >{{ isSubmitting ? 'Signing Up...' : 'Sign Up' }}</button>
                            </form>
                            <p class="text-dark-teal mt-4 font-bold font-manrope" v-if="message">
                                {{ message }}
                            </p>
                        </div>
                        <div class=" max-w-xs mb-6">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3122.166194166706!2d-90.38285442403543!3d38.506877771809975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8cf366daaaaab%3A0x5c16237ba133ad82!2s10004%20Kennerly%20Rd%20Suite%20370A%2C%20St.%20Louis%2C%20MO%2063128!5e0!3m2!1sen!2sus!4v1728573690364!5m2!1sen!2sus"
                                height="150" frameborder="0" scrolling="no" class=" w-full" marginheight="0"
                                marginwidth="0" allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                    </div>
                </div>
            </div>
            <hr class="my-6 border-[#ffffff17] max-w-7xl sm:mx-auto lg:my-6" />
            <div class="w-full mx-auto pb-10">
                <span class="text-sm text-white block mx-auto text-center">Copyright © 2024. All rights reserved.
                    Ensemble Digital Labs</span>
            </div>
            <!-- Sticky button -->


        </div>
    </footer>
    <!-- <div class="fixed hidden md:block bottom-1/2 right-0 -rotate-90 translate-x-[80px] -translate-y-[110px] w-56">
        <router-link to="/am-i-candidate">
            <button class="btn-fill-light w-52">Am I a Candidate</button>
        </router-link>
    </div>
    <div
        class="fixed  hidden md:block bottom-1/2 right-0 shadow -rotate-90 translate-x-[80px] translate-y-[110px] w-56">
        <router-link to="/appointments">
            <button class="btn-fill-dark w-52 ">Book an Appointment</button>
        </router-link>
    </div> -->
    <div class="fixed bottom-0 flex gap-2 justify-center w-full">

        <div class=" hidden md:block shadow w-52">
            <router-link to="/appointments">
                <button class="w-52" :class="getRoute === '/appointments' ? 'float-btn-light' : 'float-btn-dark'">Book
                    an Appointment</button>
            </router-link>
        </div>
        <div class="hidden md:block  w-52">
            <router-link to="/bariatricSurgeryStLouis/BMI-calculator">
                <button class="w-52" :class="getRoute === '/bariatricSurgeryStLouis/BMI-calculator' ? 'float-btn-light' : 'float-btn-dark'">Am I
                    a Candidate ?</button>
            </router-link>
        </div>
        <div class=" hidden md:block shadow w-52">
            <a href="https://mycw220.ecwcloud.com/portal26606/jsp/100mp/login_otp.jsp" target="_blank">
                <button class="w-52"
                    :class="getRoute === ' https://mycw220.ecwcloud.com/portal26606/jsp/100mp/login_otp.jsp' ? 'float-btn-light' : 'float-btn-dark'">Patient
                    Portal</button>
            </a>
        </div>
    </div>


    <div class="fixed bottom-0 flex w-full divide-x-2 divide-light-teal">
        <div class="block md:hidden w-1/3">
            <router-link to="/appointments">
                <button class="rounded-none  w-full"
                    :class="getRoute === '/appointments' ? 'btn-fill-light' : 'btn-fill-dark'">Book an
                    Appointment</button>
            </router-link>
        </div>
        <div class="block md:hidden w-1/3">
            <router-link to="/bariatricSurgeryStLouis/BMI-calculator">
                <button class="w-full rounded-none"
                    :class="getRoute === '/bariatricSurgeryStLouis/BMI-calculator' ? 'btn-fill-light' : 'btn-fill-dark'">Am I a
                    Candidate ?</button>
            </router-link>
        </div>
        <div class="block md:hidden w-1/3">
            <a href="https://mycw220.ecwcloud.com/portal26606/jsp/100mp/login_otp.jsp" target="_blank">
                <button class="w-full rounded-none"
                    :class="getRoute === 'https://mycw220.ecwcloud.com/portal26606/jsp/100mp/login_otp.jsp' ? 'btn-fill-light' : 'btn-fill-dark'">Patient
                    Portal</button>
            </a>
        </div>
    </div>


</template>
<script>
import axios from 'axios';
import { getRecaptchaToken, warmRecaptcha } from '@/utils/recaptcha';

const WEBHOOK_URL = 'https://n8n-automation.techsoit.com/webhook/cbsWebsite';

export default {
    data() {
        return {
            mailInfo: {
                email: '',
            },
            message: '',
            isSubmitting: false,
        }
    },
    mounted() {
        warmRecaptcha();
    },
    methods: {
        async SubscriptionFormSubmit() {
            if (this.isSubmitting) return;

            this.isSubmitting = true;
            this.message = '';

            try {
                const token = await getRecaptchaToken();
                const payload = {
                    ...this.mailInfo,
                    formType: 'subscription',
                    grecaptcha: token,
                };

                await axios.post(WEBHOOK_URL, payload);

                this.message = 'Thank you for subscribing!';
                this.mailInfo = { email: '' };
            } catch (error) {
                console.error(error);
                this.message = 'Oops!, Something wrong happend!';
            } finally {
                this.isSubmitting = false;
            }
        },
    },
    computed: {
        getRoute() {
            return this.$route.path;
        },
    },
}
</script>
