<template>
    <PublicPageLayout>
        <HeroSectionVue :title="'Contact Us'"></HeroSectionVue>
        <div class="max-w-screen-xl mx-auto">
            <div class="grid md:grid-cols-12 lg:grid-cols-2 md:gap-4">
                <div class="md:col-span-7 lg:col-span-1">
                    <div>
                        <form @submit.prevent="contactFormSubmit()"
                            class="py-10 space-y-4  px-4 sm:px-40 md:px-8 lg:px-10 xl:px-0">
                            <!-- <form method="post" action="https://cbsurgery.getupsolutions.net/contactFormSubmitMail.php" class="py-10 space-y-4  px-4 sm:px-40 md:px-8 lg:px-10 xl:px-0"> -->
                            <div>
                                <div>
                                    <label for="firstName"
                                        class="block mb-2 text-[16px] font-bold font-manrope text-zinc-800">Your
                                        Name<span class="text-dark-teal">*</span></label>
                                    <input type="text" id="firstName" v-model="contactInfo.name"
                                        class="bg-gray-50 border border-gray text-gray-900 text-sm rounded focus:ring-dark-teal focus:border-dark-teal block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-teal dark:focus:border-dark-teal"
                                        placeholder="Full Name" required />
                                </div>
                            </div>
                            <div class="grid md:grid-cols-2 gap-y-4 md:gap-4">
                                <div>
                                    <label for="phoneNumber"
                                        class="block mb-2 text-[16px] font-bold font-manrope text-zinc-800">Phone<span
                                            class="text-dark-teal">*</span></label>
                                    <input type="text" id="phoneNumber" v-model="contactInfo.phoneNumber"
                                        class="bg-gray-50 border border-gray text-gray-900 text-sm rounded focus:ring-dark-teal focus:border-dark-teal block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-teal dark:focus:border-dark-teal"
                                        placeholder="Add Phone number " required />
                                </div>
                                <div>
                                    <label for="email"
                                        class="block mb-2 text-[16px] font-bold font-manrope text-zinc-800">Email<span
                                            class="text-dark-teal">*</span></label>
                                    <input type="email" id="email" v-model="contactInfo.email" name="email"
                                        class="bg-gray-50 border border-gray text-gray-900 text-sm rounded focus:ring-dark-teal focus:border-dark-teal block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-teal dark:focus:border-dark-teal"
                                        placeholder="Add Email" required />
                                </div>

                            </div>
                            <div>

                                <label for="message"
                                    class="block mb-2 text-[16px] font-bold font-manrope text-zinc-800">Comments /
                                    Questions<span class="text-dark-teal">*</span></label>
                                <textarea id="M+message" v-model="contactInfo.message" rows="6"
                                    class="bg-gray-50 border border-gray text-gray-900 text-sm rounded focus:ring-dark-teal focus:border-dark-teal block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dark-teal dark:focus:border-dark-teal"
                                    placeholder="Type here..." required></textarea>

                            </div>
                            <div>
                                <button
                                    class="btn-fill-dark h-11 w-full md:w-auto mb-2 disabled:opacity-60 disabled:cursor-not-allowed"
                                    type="submit"
                                    :disabled="isSubmitting"
                                >
                                    {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                                </button>

                                <p class="text-dark-teal font-bold font-manrope" v-if="message">
                                    {{ message }}
                                </p>
                            </div>
                        </form>

                    </div>

                </div>

                <div
                    class=" bg-dark-teal xl:bg-extra-dark-teal xl:m-10 p-4 sm:p-10 py-4 md:p-6 xl:p-10 md:col-span-5 lg:col-span-1">
                    <h3 class=" font-manrope font-medium text-xl xl:text-3xl text-white mb-4 md:mb-8">
                        Contact Us
                    </h3>
                    <h3 class=" font-manrope font-medium text-lg xl:text-2xl text-white mb-4 md:mb-8">
                        ST.Louis Office
                    </h3>
                    <div class="flex flex-col mb-10 gap-2">
                        <div class="flex gap-2">
                            <img src="/src/assets/icons/phone.svg" class="h-5 w-4">
                            <a href="tel:+1 314 500 2424" class=" font-archivo text-white ">+1 (314) 500 2424</a>
                        </div>
                        <div class="flex gap-2">
                            <img src="/src/assets/icons/location.svg" class="h-5 w-4">
                            <a href="#" class=" font-archivo text-white ">10004 Kennerly Road,<br /> Suite 370A Saint
                                Louis,<br />
                                MO 63128</a>
                        </div>
                        <div class="flex gap-2">
                            <img src="/src/assets/icons/email.svg" class="h-5 w-4">
                            <a href="mailto:info@cbsurgery.com" class="font-archivo text-white">info@cbsurgery.com</a>
                        </div>
                    </div>
                    <div>
                        <!-- <iframe frameborder="0" scrolling="no" class=" w-full grayscale" marginheight="0" marginwidth="0"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a
                            href="https://www.gps.ie/">gps vehicle tracker</a>
                    </iframe> -->
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3122.166194166706!2d-90.38285442403543!3d38.506877771809975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8cf366daaaaab%3A0x5c16237ba133ad82!2s10004%20Kennerly%20Rd%20Suite%20370A%2C%20St.%20Louis%2C%20MO%2063128!5e0!3m2!1sen!2sus!4v1728573690364!5m2!1sen!2sus"
                            height="250" frameborder="0" scrolling="no" class=" w-full" marginheight="0" marginwidth="0"
                            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <h3 class=" font-manrope font-medium text-lg xl:text-2xl text-white mt-8 mb-2 md:mb-4">
                        Chesterfield Office
                    </h3>
                    <div class="flex flex-col mb-10 gap-2">
                        <div class="flex gap-2">
                            <img src="/src/assets/icons/phone.svg" class="h-5 w-4">
                            <a href="tel:+1 314 500 2424" class=" font-archivo text-white ">+1 (314) 500 2424</a>
                        </div>
                        <div class="flex gap-2">
                            <img src="/src/assets/icons/location.svg" class="h-5 w-4">
                            <a href="#" class=" font-archivo text-white ">Clarkson Executive Building<br /> 16216 Baxter Road, Suite 110, Chesterfield,<br />
                                MO 63017</a>
                        </div>
                        <div class="flex gap-2">
                            <img src="/src/assets/icons/email.svg" class="h-5 w-4">
                            <a href="mailto:info@cbsurgery.com" class="font-archivo text-white">info@cbsurgery.com</a>
                        </div>
                    </div>
                    <div>
                        <!-- <iframe frameborder="0" scrolling="no" class=" w-full grayscale" marginheight="0" marginwidth="0"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a
                            href="https://www.gps.ie/">gps vehicle tracker</a>
                    </iframe> -->
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d421.2118716800667!2d-90.56975649796897!3d38.640668630203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8d5258d2bbe71%3A0x8d5b2f5cff5687e8!2s16216%20Baxter%20Rd!5e0!3m2!1sen!2sus!4v1726857553539!5m2!1sen!2sus"
                            height="250" frameborder="0" scrolling="no" class=" w-full" marginheight="0" marginwidth="0"
                            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

            </div>
            

        </div>

    </PublicPageLayout>

</template>

<script setup>
import PublicPageLayout from '../layout/PublicPageLayout.vue';
import HeroSectionVue from '@/components/HeroSection.vue';
</script>

<script>
import axios from 'axios';
import { getRecaptchaToken, warmRecaptcha } from '@/utils/recaptcha';

const WEBHOOK_URL = 'https://n8n-automation.techsoit.com/webhook/cbsWebsite';

export default {
    data() {
        return {
            contactInfo: {
                name: '',
                phoneNumber: '',
                email: '',
                message: '',
            },
            message: '',
            isSubmitting: false,
        }
    },
    mounted() {
        warmRecaptcha();
    },
    methods: {
        async contactFormSubmit() {
            if (this.isSubmitting) return;

            this.isSubmitting = true;
            this.message = '';

            try {
                const token = await getRecaptchaToken();
                const payload = {
                    ...this.contactInfo,
                    formType: 'contact',
                    grecaptcha: token,
                };

                await axios.post(WEBHOOK_URL, payload);

                this.message = 'Thank you for contacting us!';
                this.contactInfo = {
                    name: '',
                    phoneNumber: '',
                    email: '',
                    message: '',
                };
            } catch (error) {
                console.error(error);
                this.message = 'Oops!, Something wrong happend!';
            } finally {
                this.isSubmitting = false;
            }
        },
    },
}
</script>
