<template>
  <div class="flex pt-32 gap-y-32 items-center h-full flex-col">
    <router-link class="bg-green-300 hover:bg-green-200 px-12 py-6 hover:rounded-none rounded-3xl duration-300" to="/">home</router-link>

    <div class="p-8 flex flex-col gap-8 border-2 hover:rounded-3xl hover:bg-zinc-100 duration-200 cursor-pointer">
      <h1>Профиль игрока</h1>
      <h1 class="font-bold">{{ username }}</h1>
      <!-- Другие детали профиля, которые вы хотите отобразить -->
    </div>
  </div>

</template>

<script>
export default {
  name: 'ProfileView',
  props: ['username'], // Определение props для получения параметра из маршрута
};
</script>