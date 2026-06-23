<template>
    <div class=" bg-cover bg-right md:bg-center bg-no-repeat h-52 md:h-72 bg-[url('@/assets/section.png')] mx-auto py-10 grid content-center ">
        <!-- :style="`background-image: url('@/assets/section.svg')` -->
        <h2 class="text-[26px] md:text-[40px] text-center tracking-tight">{{title}}</h2>
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: ["title"]
}
</script>
