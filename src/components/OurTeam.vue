<template>
    <div class=" max-w-screen-xl mx-auto px-4 md:px-6 my-10 md:my-20  xl:my-32">
        <h2 class="mb-8 tracking-tight text-center">
            Our Team
        </h2>
       

<!-- our team with slider -->

        <div class="md:flex flex-row md:items-start gap-10 lg:gap-16">
            <div class="grid grid-rows-2 gap-2 lg:gap-10 w-full md:w-1/4">

                <!-- <div class=" w-fit flex flex-col items-center justify-center mb-20 ">
                    <img src="@/assets/img/doctor-1.png">
                    <div class=" bg-white w-4/5 md:w-3/4 py-2 md:py-4 -my-16 md:-my-24 ">
                        <h3 class="text-center font-manrope text-[14px] md:text-[16px] lg:text-xl font-bold text-extra-dark-teal">Dr.
                            Sudhakaran</h3>
                        <h4 class="text-center font-manrope text-dark-teal text-sm md:text-[15px] font-bold">Surgeon
                        </h4>
                    </div>
                </div>


                <div class=" w-fit flex flex-col items-center justify-center mb-20 ">
                    <img src="@/assets/img/doctor-2.png">
                    <div class=" bg-white w- md:w-3/4 py-2 md:py-4 -my-16 md:-my-24 ">
                        <h3 class="text-center font-manrope text-[14px] md:text-[16px] lg:text-xl font-bold text-extra-dark-teal">Emily DesBiens, PA-C
                        </h3>
                        <h4 class="text-center font-manrope text-dark-teal text-sm md:text-[15px] font-bold">Physician Assistant
                        </h4>
                    </div>
                </div> -->

                <div class=" w-fit flex flex-col items-center justify-center mb-20 lg:mb-10 ">
                    <img src="@/assets/img/doctor-1.png">
                    <div class="bg-gradient-to-b from-white to-gray w-full -my-16 md:-my-14 py-3">
                        <h3 class="text-center font-manrope text-[14px] md:text-[16px] lg:text-xl font-bold text-extra-dark-teal">Dr.
                            Sudhakaran</h3>
                        <h4 class="text-center font-manrope text-dark-teal text-sm md:text-[15px] font-bold">Surgeon
                        </h4>
                    </div>
                </div>


                <div class=" w-fit flex flex-col items-center justify-center mb-20  lg:mb-10 ">
                    <img src="@/assets/img/doctor-2.png">
                    <div class="bg-gradient-to-b from-white to-gray  w-full  -my-16 md:-my-14 py-3">
                        <h3 class="text-center font-manrope text-[14px] md:text-[16px] lg:text-xl font-bold text-extra-dark-teal">Emily DesBiens, PA-C
                        </h3>
                        <h4 class="text-center font-manrope text-dark-teal text-sm md:text-[15px] font-bold">Physician Assistant
                        </h4>
                    </div>
                </div>


            </div>
            <div class="w-full md:w-3/4">
                <Carousel :autoplay="2000" :wrap-around="true">
                    <Slide v-for="testimonial in testimonials" :key="testimonial">
                        <div class="w-full"> 
                                <img :src="`${testimonial.imageUrl}`" alt=""
                                    class="object-cover w-full">
                     </div>
          
                    </Slide>

                </Carousel>
            </div>
        </div>



        <!-- <div class="md:flex flex-row md:items-start gap-10 lg:gap-16">
            <div class="grid grid-rows-2 gap-2 lg:gap-10 w-full md:w-1/4">

                <div class=" w-fit flex flex-col items-center justify-center mb-20 ">
                    <img src="@/assets/img/doctor-1.png">
                    <div class=" bg-white w-4/5 md:w-2/3 py-2 md:py-4 -my-16 md:-my-24 ">
                        <h3 class="text-center font-manrope text-[16px] md:text-xl font-bold text-extra-dark-teal">Dr.
                            Sudhakaran</h3>
                        <h4 class="text-center font-manrope text-dark-teal text-sm md:text-[15px] font-bold">Surgeon
                        </h4>
                    </div>
                </div>


                <div class=" w-fit flex flex-col items-center justify-center mb-20 ">
                    <img src="@/assets/img/doctor-2.png">
                    <div class=" bg-white w-4/5 md:w-2/3 py-2 md:py-4 -my-16 md:-my-24 ">
                        <h3 class="text-center font-manrope text-[16px] md:text-xl font-bold text-extra-dark-teal">Emily
                        </h3>
                        <h4 class="text-center font-manrope text-dark-teal text-sm md:text-[15px] font-bold">Dietitian
                        </h4>
                    </div>
                </div>

            </div>
            <div class="w-full md:w-3/4">
                <img src="@/assets/img/team-img.png">
            </div>
        </div>  -->



    </div>
</template>

<script>
 import { defineComponent } from 'vue'
 import { Carousel, Pagination, Slide } from 'vue3-carousel'

 import 'vue3-carousel/dist/carousel.css'

 export default defineComponent({
     name: 'Autoplay',
     data() {
         return {
             testimonials: [{
               imageUrl: "/assets/img/team-1.png"
             }, {
                 imageUrl: "/assets/img/team-2.png"
                             }, {
                imageUrl: "/assets/img/team-4.png"
                                     }, {
                imageUrl: "/assets/img/team-5.png"
                                     }, 
                                    ]
         }
     },
     components: {
         Carousel,
         Slide,
         Pagination,
     },
 })
</script>