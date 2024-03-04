<template>
    <div class="max-w-screen-xl mx-auto my-10 md:my-20">
        <div class="max-w-6xl mx-auto">
            <div
                class="grid lg:grid-cols-3 gap-2 rounded-lg place-content-center lg:relative lg:h-[500px] xl:h-[450px] bg-extra-light-teal">
                <div class=" lg:col-span-2 p-10 lg:p-16 lg:absolute lg:top-0 lg:left-0 lg:right-0 lg:w-1/2">
                    <div class="border p-2 w-32 rounded border-gray">
                        <h6>Contact Us</h6>
                    </div>
                    <h2 class="pt-4 leading-none tracking-tight"><b>Become The Next</b>
                        Happy Member of our Family</h2>
                    <p class="py-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        Aenean commodo ligula eget dolor. Aenean massa.</p>
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