<template>
<h3>La temperatura es: {{ weatherStore.temperatura }}</h3>

</template>

<script setup>
import { useWeather } from '@/composables/useWeather';
import { useWeatherStore } from '@/stores/weatherStore';
import { onMounted } from 'vue';

const weatherStore = useWeatherStore();

onMounted(() => {
    useWeather();
});

</script>

<style scoped></style>