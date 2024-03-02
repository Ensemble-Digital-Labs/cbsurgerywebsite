<template>
    <div class=" bg-cover h-96 flex items-end justify-start rounded-lg border border-zinc-200 shadow-xl shadow-dark-teal/10 md:shadow-none"
        :style="`background-image: url('${imageUrl}')`">
        <div class=" p-4 xl:p-8 bg-white w-full xl:w-3/4 xl:rounded-tr-lg rounded-b-lg xl:rounded-b-none">
            <div class="">
                <h3 class="text-extra-dark-teal text-[20px] font-manrope font-bold mb-2">
                    {{ title }}
                </h3>
                <p class="text-[#636571] mb-4">
                    {{ description }}
                </p>
                <router-link :to="link">
                    <div class="flex items-center gap-2">

                        <h3 class="text-dark-teal text-[15px] font-manrope font-bold">
                            Learn More
                        </h3>
                        <img src="@/assets/icons/arrow-right-2.svg" alt="" srcset="">
                    </div>
                </router-link>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["imageUrl", "title", "description", "link"]
}
</script>