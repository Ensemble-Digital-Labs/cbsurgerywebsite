<template>
    <div class=" bg-cover bg-center bg-no-repeat md:h-72 bg-[url('@/assets/section.png')] mx-auto py-10 grid content-center ">
        <!-- :style="`background-image: url('@/assets/section.svg')` -->
        <h2 class="text-[20px] md:text-[40px] text-center">{{title}}</h2>
    </div>
</template>
<script>
export default {
    props: ["title"]
}
</script>
