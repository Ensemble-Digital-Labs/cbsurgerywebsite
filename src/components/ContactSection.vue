<template>
    <div class="max-w-screen-xl mx-auto mt-10 md:mt-20 xl:mb-20">
        <div class="max-w-7xl mx-auto">
            <div
                class="grid lg:grid-cols-3 gap-2 rounded-lg place-content-center lg:relative lg:h-[600px] xl:h-[450px] bg-extra-light-teal">
                <div class=" lg:col-span-2 p-4 md:p-10 lg:pl-16 lg:absolute lg:top-0 lg:left-0 lg:right-0 lg:w-1/2">
                    <div class="border p-2 w-48 rounded border-gray">
                        <h6>Contact Us</h6>
                    </div>
                    <h2 class="mt-4 leading-[40px] md:leading-[60px] tracking-tight"><b>Become The Next</b>
                        Happy Member of our Family</h2>
                    <p class="my-4">Join our community and experience the warmth and support of being a valued member of
                        our family. Start your journey with us today!</p>
                    <router-link to="/appointments">
                        <button class=" btn-fill-dark">Request an Appointment </button>
                    </router-link>

                </div>

                <img src="@/assets/img/contact-2.png" alt="" srcset=""
                    class="lg:h-[500px] w-auto object-cover lg:absolute lg:bottom-0 lg:right-0 hidden lg:block">
            </div>
        </div>
    </div>
</template>