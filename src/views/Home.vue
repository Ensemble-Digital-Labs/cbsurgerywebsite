<template>
    <div class="max-w-screen-2xl mx-auto px-6 sm:px-0">
        <div class="flex flex-col sm:flex-row md:flex-col lg:flex-row md:pl-10">
            <div class="py-10 sm:pl-6 md:pl-0 sm:py-20  md:py-10 lg:py-40 grid content-center lg:w-6/12">
                <h1 class=" leading-[40px] md:leading-[60px] mb-8">
                    Reclaim Your<br /> <span class="text-dark-teal"> Vibrant Health</span><br />
                    With Dr. Sudhakaran
                </h1>
                <p class="text-[#636571] md:w-1/2 lg:w-3/4">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient.
                </p>
            </div>
            <img src="@/assets/img/hero.png" alt="" srcset=""
                class="xl:w-6/12 object-cover  hidden xl:block object-left">
            <img src="@/assets/img/deepu-3.png" alt="" srcset=""
                class="lg:w-6/12 object-cover object-left hidden sm:block md:hidden sm:w-5/12 lg:block xl:hidden">
        </div>
    </div>


    <div class="max-w-screen-2xl mx-auto px-6 md:px-0">
        <div class="flex flex-col  lg:flex-row xl:gap-10 mb-20 xl:my-32">
            <div class="w-full lg:w-4/12 xl:w-5/12 md:h-[600px] md:-mt-36 lg:-mt-0 lg:h-auto">
                <!-- <img src="@/assets/img/deepu-2.png" alt="" srcset=""
                    class="w-full h-full object-cover md:object-contain lg:object-cover object-right  xl:object-contain xl:object-bottom"> -->

                <img src="@/assets/img/deepu-6.png" alt="" srcset=""
                    class="w-full h-full sm:w-1/2 md:w-full object-cover md:object-contain lg:object-cover object-right block sm:hidden md:block lg:hidden xl:block xl:object-right-bottom">

                <img src="@/assets/img/home-2.png" alt="" srcset=""
                    class="w-full h-full object-cover md:object-contain lg:object-cover object-right hidden lg:block xl:hidden  xl:object-contain xl:object-bottom">
            </div>

            <div class="grid content-center w-full lg:w-8/12 xl:w-7/12 mt-[40px] md:mt-0 md:p-10 lg:py-20 xl:p-0">
                <h6>More About Us</h6>
                <h3 class="font-manrope text-[28px] md:text-[40px] text-extra-dark-teal font-extrabold tracking-tight">
                    Chesterfield</h3>
                <h3
                    class="font-manrope text-[32px] md:text-[52px] text-extra-dark-teal font-extrabold  tracking-tight leading-[40px] mb-4">
                    Bariatric Surgery:</h3>
                <h2
                    class=" leading-[36px] md:leading-[55px] tracking-tight -mt-2 mb-4 font-medium text-[28px] md:text-[40px]">
                    Where Dr. Sudhakaran's<br />
                    Safe Hands Treat Patients<br />
                    Like Family.
                </h2>
                <p class="text-[#636571] sm:w-3/4 md:w-full xl:w-3/4 mb-2">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient.
                </p>
                <p class="text-[#636571] sm:w-3/4  md:w-full xl:w-3/4 mb-6">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient.
                </p>
                <div class="grid md:grid-cols-2 gap-4 w-3/4 mb-6">
                    <div class="flex items-center gap-x-2">
                        <img src="@/assets/icons/tick.png" alt="" srcset="">
                        <p class="text-extra-dark-teal font-bold font-manrope">Modern Equipments</p>
                    </div>
                    <div class="flex items-center gap-x-2">
                        <img src="@/assets/icons/tick.png" alt="" srcset="">
                        <p class="text-extra-dark-teal font-bold font-manrope">Expert Doctors</p>
                    </div>
                    <div class="flex items-center gap-x-2">
                        <img src="@/assets/icons/tick.png" alt="" srcset="">
                        <p class="text-extra-dark-teal font-bold font-manrope">Comfortable Clinic</p>
                    </div>
                    <div class="flex  items-center gap-x-2">
                        <img src="@/assets/icons/tick.png" alt="" srcset="">
                        <p class="text-extra-dark-teal font-bold font-manrope">Family like Enviorment</p>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <router-link to="/about-us">
                        <button class="btn-fill-dark">
                            Learn More
                        </button>
                    </router-link>
                    <router-link to="/appointments">
                        <button class="btn-fill-light">
                            Request an Appointment
                        </button>
                    </router-link>


                </div>

            </div>

        </div>
    </div>

    <div class="py-10 bg-[#F1F8FF] w-full">
        <div class="max-w-screen-2xl mx-auto px-4 grid place-content-center">
            <div class="flex flex-col lg:flex-row items-center lg:gap-10 w-full">
                <div class="">
                    <h3
                        class=" font-manrope text-[24px] md:text-[40px] text-extra-dark-teal text-center sm:text-right ">
                        Pricing on Gastric Sleeve
                    </h3>
                </div>
                <div class="">
                    <h3
                        class=" font-manrope text-[70px] md:text-[82px] text-extra-dark-teal font-medium text-left mb-6 md:mb-0">
                        <span class="text-dark-teal">$</span> 11,111
                    </h3>
                </div>
                <div>
                    <button class="btn-fill-dark">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div class="max-w-screen-xl mx-auto my-20 px-8">
        <h6 class="text-center mb-4">
            Why Choose Us
        </h6>
        <h2 class="tracking-tight mb-6 text-[30px] leading-[40px] md:leading-[52px] md:text-[44px] text-center">
            Guiding Your Bariatric Journey with <span class=" text-dark-teal">Family</span> Care
        </h2>
        <p class="text-[#636571] md:w-3/4 mb-6 mx-auto text-center">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
            natoque penatibus et magnis dis parturient. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
            natoque penatibus et magnis dis parturient.
        </p>

    </div>

    <div class="py-10 bg-[#F1F8FF] w-full">
        <div class="max-w-screen-xl mx-auto px-4" ref="target">
            <div class="grid grid-cols-3 gap-4 " v-element-visibility="[onElementVisibility, { scrollTarget: target }]">
                <div>
                    <h1 class="text-[35px] md:text-[72px] text-center">
                        {{ isVisible ? happyClients.toFixed(0) : '0' }}<span class=" text-dark-teal">+</span>
                    </h1>
                    <p class=" text-[14px] md:text-[20px] text-[#636571] text-center">
                        Happy Clients
                    </p>
                </div>
                <div>
                    <h1 class="text-[35px] md:text-[72px] text-center">
                        {{ isVisible ? yearsOfExperience.toFixed(0) : '0' }} <span class=" text-dark-teal">+</span>
                    </h1>
                    <p class="text-[14px] md:text-[20px] text-[#636571] text-center">
                        Year Experience
                    </p>
                </div>
                <div>
                    <h1 class="text-[35px] md:text-[72px] text-center">
                        {{ isVisible ? staffs.toFixed(0) : '0' }}  <span class=" text-dark-teal">+</span>
                    </h1>
                    <p class="text-[14px] md:text-[20px] text-[#636571] text-center">
                        Doctor & Staff
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- with options -->
    <!-- <div v-element-visibility="onElementVisibility">
        {{ isVisible ? 'inside' : 'outside' }}
    </div> -->

    <div class="grid xl:grid-cols-2 md:h-[740px]">
        <div>
            <div class="grid md:grid-cols-2 md:h-1/2 ">
                <div class="bg-cover bg-no-repeat bg-center p-32"
                    style="background-image: url('/assets/img/grid-img-1.png')">

                </div>
                <div class=" bg-dark-teal grid place-content-center p-16">
                    <div>
                        <h3 class=" font-manrope text-[20px] text-white font-bold text-center mb-2">
                            The Best Services
                        </h3>
                        <p class="text-white text-center text-[16px] font-medium">
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et magna.
                        </p>
                    </div>
                </div>
            </div>
            <div class="grid md:grid-cols-2 h-1/2">
                <div class="bg-cover bg-no-repeat bg-center p-32 md:hidden"
                    style="background-image: url('/assets/img/grid-img-2.png')">

                </div>

                <div class=" bg-extra-dark-teal grid place-content-center p-16 bg-cover">
                    <div>
                        <h3 class=" font-manrope text-[20px] text-white font-bold text-center mb-2">
                            Expert Doctor
                        </h3>
                        <p class="text-white text-center text-[16px] font-medium">
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et magna.
                        </p>
                    </div>
                </div>
                <div class="bg-cover bg-no-repeat bg-center p-32 hidden md:block"
                    style="background-image: url('/assets/img/grid-img-2.png')">

                </div>
            </div>
        </div>

        <div class="bg-cover hidden xl:block bg-no-repeat bg-center p-32"
            style="background-image: url('/assets/img/grid-img-3.png')">
        </div>

    </div>

    <div class=" max-w-screen-xl mx-auto px-4 md:px-6 my-10 md:my-20">
        <h2 class="mb-4 tracking-tight">
            Services
        </h2>
        <div class="grid md:grid-cols-12 gap-10">
            <div class="md:col-span-8 grid content-end">
                <p class="text-[#636571]">
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et magna.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et magna.
                </p>
            </div>
            <div class="md:col-span-4 flex md:justify-end">
                <router-link to="/services">
                    <button class="btn-fill-light">
                        View All Services
                    </button>
                </router-link>
            </div>

        </div>
        <div class="grid md:grid-cols-3 gap-4 my-10">
            <ServiceCard v-for="i in 3" :key="i" :link="'/about'" :title="'Bariatrics Surgery'"
                :description="' This is description, This is description v'" :imageUrl="'/assets/img/grid-img-1.png'">
            </ServiceCard>
        </div>
    </div>

    <OurTeam></OurTeam>
    <TheTestimonial></TheTestimonial>
    <div class="w-full  h-[500px] relative my-10">
        <div class="w-full grid grid-cols-12 h-[500px] bg-cover bg-center bg-white/90 bg-blend-overlay md:bg-blend-normal "
            style="background-image: url('/assets/img/dedicated.jpg');">
            <div class=" bg-cover hidden md:block col-span-10 lg:col-span-8"
                style="background-image: url('/assets/img/design.png');">
            </div>
            <div>

            </div>
        </div>
        <div class="w-full absolute top-0 left-0 h-[500px] grid place-content-center">
            <div class="max-w-screen-xl mx-auto px-6 xl:px-0">
                <div class="">
                    <div>
                        <h2 class="leading-[40px] md:leading-[60px] tracking-tight mb-6">
                            Dedicated to Give You<br />
                            The Best Services
                        </h2>
                        <p class="text-[#636571] md:w-1/2 mb-6">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                            natoque penatibus et magnis dis parturient.
                        </p>
                        <div>
                            <router-link to="/services">
                                <button class="btn-fill-dark">
                                    Learn More
                                </button>
                            </router-link>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>

    <div class=" max-w-screen-xl mx-auto px-4 md:px-6 my-10 md:my-20">
        <h2 class="mb-4 tracking-tight">
            Success Stories
        </h2>
        <div class="grid md:grid-cols-12 gap-10">
            <div class="md:col-span-8 grid content-end">
                <p class="text-[#636571]">
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et magna.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et magna.
                </p>
            </div>
            <div class="md:col-span-4 flex md:justify-end">
                <router-link to="/success-stories">
                    <button class="btn-fill-light">
                        View All
                    </button>
                </router-link>
            </div>

        </div>
        <div class="grid grid-cols-3 gap-2 md:gap-4 my-10">
            <img src="@/assets/img/success-story-1.png" alt="" srcset="">
            <img src="@/assets/img/success-story-2.png" alt="" srcset="">
            <img src="@/assets/img/success-story-3.png" alt="" srcset="">
        </div>
    </div>
    <FAQ></FAQ>
    <ContactSectionVue></ContactSectionVue>


</template>

<script>
import { ref } from 'vue'
import { vElementVisibility } from '@vueuse/components'

const target = ref(null)
// const isVisible = ref(false)

// function onElementVisibility(state) {
//     isVisible.value = state
//     console.log(state)
//     if (state) {
//         gsap.to(this, { duration: 1, happyClients: 90 || 0 })
//         gsap.to(this, { duration: 1, yearsOfExperience: 12 || 0 })
//         gsap.to(this, { duration: 1, staffs: 20 || 0 })
//     }
// }

import gsap from 'gsap'

export default {
    data() {
        return {
            number: 0,
            happyClients: 0,
            yearsOfExperience: 0,
            staffs: 0,
            isVisible: false
        }
    },
    watch: {
        // whenever question changes, this function will run
        isVisible(newValue, oldValue) {
            if (newValue) {
                gsap.to(this, { duration: 1, happyClients: 90 || 0 })
                gsap.to(this, { duration: 1, yearsOfExperience: 12 || 0 })
                gsap.to(this, { duration: 1, staffs: 20 || 0 })
            }
        }
    },
    methods: {
        onElementVisibility(state) {
            this.isVisible = state
        }

    }
    //   mounted(){
    //     this.number = 90
    //     gsap.to(this, { duration: 1, happyClients: 90 || 0 })
    //     gsap.to(this, { duration: 1, yearsOfExperience: 12 || 0 })
    //     gsap.to(this, { duration: 1, staffs: 20 || 0 })
    //   }
}

</script>

<script setup>
import ServiceCard from '@/components/ServiceCard.vue';
import OurTeam from '@/components/OurTeam.vue';
import TheTestimonial from '@/components/TheTestimonial.vue';
import FAQ from '@/components/FAQ.vue';
import ContactSectionVue from '@/components/ContactSection.vue';

</script>