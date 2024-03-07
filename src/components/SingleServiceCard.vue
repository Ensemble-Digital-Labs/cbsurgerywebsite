<template>
    <div class="max-w-screen-xl mx-auto my-20 px-4 md:flex gap-2 bg-extra-light-teal">
        <div class="md:shrink-0 ml-0 lg:-ml-4">
            <img src="@/assets/img/grid-img-2.png" class="object-center h-56 w-full object-cover md:h-full md:w-96 p-5 md:p-0" alt="">
        </div>

            <div class=" grid gap-6 p-5 md:p-10">
                <h3 class=" font-manrope text-[16px] md:text-xl font-bold text-extra-dark-teal ">{{ title}}</h3>
                <p> {{ description }}</p>
                    <router-link to="/appointments">
                        <button class="btn-fill-dark w-52">Get Appointment</button>
                    </router-link>
            </div>
        </div>

</template>
<script>
export default {
    props: ["imageUrl", "title", "description"]
}
</script>