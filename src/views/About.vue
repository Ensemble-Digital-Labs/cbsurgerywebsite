<template>
    <div class="bg-extra-light-teal max-w-screen-2xl mx-auto py-20 md:py-36 md:pb-56 px-4">
        <h6 class="text-center">About us</h6>
        <h2 class="text-center text-[34px] md:text-[40px]">Chesterfield</h2>
        <h1 class="text-center text-[36px] md:text-[56px] -mt-4">Bariatric Surgery</h1>
    </div>
    <div class="bg-white px-1 md:px-6 py-4 md:py-10 w-10/12 md:w-4/5 shadow-lg shadow-slate-200 -mt-14 md:-mt-48  mx-auto">
        <div class="text-center px-2 md:px-5 py-5">
            <p>
                Lorem ipsum dolor sit amet consectetur. In metus viverra morbi mattis ultrices quis. Adipiscing feugiat
                scelerisque euismod non. Ligula non dui tincidunt nibh maecenas. Non leo vitae quis cras sed tincidunt
                egestas. Volutpat turpis in vitae integer tellus pharetra varius. Quis tempor dictum tristique eget
                tristique lorem ut viverra. Aliquet sapien vitae leo egestas porta a fermentum diam lectus. A eu nunc nunc
                pretium nulla consectetur.
            </p>
            <p>
                Eget sed cursus arcu orci a ultrices et velit. Ut est condimentum consequat scelerisque tortor felis tellus
                massa urna. Lacus lacinia vel semper amet et scelerisque tellus. Egestas vulputate augue mi eu commodo
                parturient. Tortor cras tortor vestibulum est pellentesque pulvinar morbi. At tristique eget justo at lectus
                vel sed pharetra massa. Quam nam ac nulla mauris diam consequat. 
            </p>
            <p>
                Facilisis amet volutpat a sed dui. Leo quam duis adipiscing ac viverra lobortis. Facilisis aliquet laoreet
            senectus placerat. Dui viverra netus consectetur sed quisque sed pretium mauris lacus. Nisl eu nunc neque
            sed posuere semper id scelerisque. Ornare viverra quis quam varius. Blandit cum aliquam eget sem erat.
            Tempus lacus neque et volutpat. Venenatis tincidunt lectus at commodo ut leo donec. Sagittis nam aenean
            cursus vivamus gravida nibh feugiat. Amet nunc ut netus sapien. Pretium nisl eget felis tristique
            ullamcorper ut erat consectetur.
            </p> 
    </div>
    <!-- <div class="flex items-center justify-center">
                    <button class="btn-fill-dark">
                        Book an Appointment
                    </button>
    </div> -->
</div>
<div class="max-w-screen-xl mx-auto px-4">
        <div class="flex flex-col-reverse md:flex-row md:gap-10">

            <img src="@/assets/img/deepu.png" alt="" srcset="" class="md:w-6/12 object-contain object-right">
            <div class="py-10 px-4 md:px-0 md:py-40 grid content-center md:w-6/12">
                <h6 class="md:px-0">About</h6>
                <h3 class=" text-dark-teal text-[22px] md:text-[47px] font-manrope font-extrabold tracking-tight">Dr. Deepu Sudhakaran, MD </h3>
                <h4 class=" tracking-tight text-[#727272] font-manrope font-bold mb-2">CEO & FOUNDER</h4>
                <h3 class=" font-manrope text-sm md:text-xl text-dark-teal font-bold pt-6">Care Philosophy</h3>
                <p class="text-[#636571] py-2">
                    “I'm a very family-oriented person. I want patients to feel like I will treat them like family. I'll take very personal care of you from the time you see me until you have reached your goal.”
                </p>
                <div class="grid grid-cols gap-0 mb-6 sm:grid-cols-12">
                    <div class="py-2 sm:col-span-4">
                        <h3 class=" font-manrope text-sm md:text-xl text-dark-teal font-bold py-2">Specialty</h3>
                        <ul class="max-w-md space-y-1 text-[#636571] list-disc list-inside">
                            <li class=" font-archivo text-base font-normal text-[#636571]">Bariatric Surgery</li>
                            <li class=" font-archivo text-base font-normal text-[#636571]">General Surgery</li>
                        </ul>
                    </div>
                    <div class="py-2 sm:col-span-8">
                        <h3 class=" font-manrope text-sm md:text-xl text-dark-teal font-bold py-2">Board Certifications</h3>
                        <ul class="max-w-md space-y-1 text-[#636571] list-disc list-inside">
                            <li class=" font-archivo text-base font-normal text-[#636571]">American Board of Surgery </li>
                            <li class=" font-archivo text-base font-normal text-[#636571]">Amer Bd Surgery (Surgical Critical Care)</li>
                        </ul>
                    </div>
                    <div class="py-2 sm:col-span-12">
                        <h3 class=" font-manrope text-sm md:text-xl text-dark-teal font-bold py-2">Education</h3>
                            <h4 class=" font-archivo text-base font-normal text-[#636571]"><b>Medical School</b>: Medical College Of Thiruvananthapuram</h4>
                    </div>
                </div>
                <div class="flex items-center gap-4">
                    <button class="btn-fill-dark inline-flex items-center gap-2">
                        Learn More
                        <img src="/src/assets/arrow.png" alt="arrow" />
                    </button>
                </div>

            </div>

        </div>
    </div>
    <OurTeam></OurTeam>
    <TheTestimonial></TheTestimonial>
</template>
<script setup>
import OurTeam from '@/components/OurTeam.vue';
import TheTestimonial from '@/components/TheTestimonial.vue';
</script>