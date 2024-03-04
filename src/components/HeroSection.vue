<template>
    <div class=" bg-cover bg-center bg-no-repeat md:h-72 bg-[url('@/assets/section.png')] mx-auto py-10 grid content-center ">
        <!-- :style="`background-image: url('@/assets/section.svg')` -->
        <h2 class="text-[30px] md:text-[40px] text-center tracking-tight">{{title}}</h2>
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: ["title"]
}
</script>
