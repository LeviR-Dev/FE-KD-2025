<template>
  <div>
    <header class="">
      <nav class="flex justify-around bg-amber-500">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/jungeGardenPage">Eigen Jungletuin</NuxtLink>
        <NuxtLink to="/contactPage">Contact</NuxtLink>
      </nav>
      <h1>Header</h1>
    </header>

    <!-- Page Content -->
    <main class=""> <!--Content zit hier onder duss padding?!?-->
      <slot />
    </main>
  </div>
</template>
