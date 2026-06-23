<template>
    <div class="max-w-screen-xl mx-auto my-20 px-4 md:flex gap-2 bg-extra-light-teal">
        <div class="md:shrink-0 ml-0 lg:-ml-4">
            <img :src="imageUrl" class="object-center h-56 w-full object-cover md:h-full md:w-96 p-5 md:p-0" alt="">
        </div>

        <div class=" grid gap-6 p-5 md:p-10">
            <h3 class=" font-manrope text-[16px] md:text-xl font-bold text-extra-dark-teal ">{{ title }}</h3>
            <p> {{ description }}</p>
            <div class="flex items-start gap-3">
                <router-link to="/appointments">
                    <button class="btn-fill-dark w-44 md:w-52">Get Appointment</button>
                </router-link>
                <div class="flex gap-2" v-if="videoUrl">

                    <button class="btn-fill-dark w-44 md:w-52 flex gap-1 md:gap-3 items-center justify-center"
                        @click="videoPopup(videoUrl)">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-3 md:h-5 w-3 md:w-5">
                            <path fill="#fff"
                                d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
                        </svg>
                        Watch Proccess</button>

                </div>


            </div>
        </div>
    </div>


    <!-- <div class="fixed h-screen w-screen top-0 grid place-content-center backdrop-blur-lg z-50" v-if="showPopup"
        @click="showPopup = false">
        <div class="w-80 h-44 rounded-xl">
            <div class="">
                <div style="padding-top: 56.25%; width:100%;position:relative;"><iframe :src="videoUrl" frameborder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;"
                        class="rounded-xl shadow-xl shadow-dark-teal" title="IMG_0530"></iframe>
                </div>
            </div>
        </div>
    </div> -->
    <div class="fixed h-screen w-screen top-0 grid place-content-center backdrop-blur-lg z-50" v-if="showPopup"
    @click="showPopup = false">
    <div class="w-[500px] h-44 rounded-xl">
        <div class="">
            <div style="padding-top: 75%; width:100%;position:relative;">
                <iframe :src="videoUrl" frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    style="position:absolute;top:0;left:0;width:100%;height:100%;transform-origin: center center;"
                    class="rounded-xl shadow-xl shadow-dark-teal" title="IMG_0530"></iframe>
            </div>
        </div>
    </div>
</div>


</template>
<script>
export default {
    props: ["imageUrl", "title", "description", "videoUrl"],
    data() {
        return {
            showPopup: null
        }
    },
    methods: {
        videoPopup(video) {
            this.showPopup = true
        }
    }
}
</script>
<!-- <template>
    <div class="max-w-screen-xl mx-auto my-20 px-4 md:flex gap-2 bg-extra-light-teal">
        <div class="md:shrink-0 ml-0 lg:-ml-4">
            <img src="@/assets/img/grid-img-2.png"
                class="object-center h-56 w-full object-cover md:h-full md:w-96 p-5 md:p-0" alt="">
        </div>

        <div class=" grid gap-6 p-5 md:p-10">
            <h3 class=" font-manrope text-[16px] md:text-xl font-bold text-extra-dark-teal ">{{ title }}</h3>
            <p> {{ description }}</p>
            <div class="flex items-start gap-3">
                <router-link to="/appointments">
                    <button class="btn-fill-dark w-52">Get Appointment</button>
                </router-link>
                <div class="flex gap-2">

                    <button class="btn-fill-dark w-52 flex gap-3 items-center justify-center"
                        @click="videoPopup(videoUrl)">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-5 w-5">
                            <path fill="#fff"
                                d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
                        </svg>
                        Watch Proccess</button>

                </div>


            </div>

        </div>
    </div>

    <div class="fixed h-screen w-screen top-0 grid place-content-center backdrop-blur-lg z-50" v-if="showPopup"
        @click="showPopup = false">
        <div class="w-96 h-96 rounded-xl">
            <div class="">
                <div style="padding:177.78% 0 0 0;position:relative;"><iframe
                        :src="videoUrl"
                        frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                        style="position:absolute;top:0;left:0;width:100%;height:100%;"
                        class="rounded-xl shadow-xl shadow-dark-teal" title="IMG_0530"></iframe>
                </div>
            </div>
        </div>
    </div>



</template>
<script>
export default {
    props: ["imageUrl", "title", "description", "videoUrl"],
    data() {
        return {
            showPopup: null
        }
    },
    methods: {
        videoPopup(video) {
            this.showPopup = true
        }
    }
}
</script> -->