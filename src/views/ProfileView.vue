<template>
    <div class="profile">
      <h1>Профиль игрока {{ username }}</h1>
      <!-- Другие детали профиля, которые вы хотите отобразить -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProfileView',
    props: ['username'], // Определение props для получения параметра из маршрута
  };
  </script>