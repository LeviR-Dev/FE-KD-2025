<template>
    <div class="my-20">
        <div class="text-md md:text-2xl font-bold">Heb je vraagen? of wil je meer informatie?</div>
        <div class="text-sm md:text-md max-w-[420px] mt-2">Neem gerust contact met ons op via onze contactpagina.</div>
        <div class="mt-5 flex gap-3">
            <div class="mt-1">Contact:</div>
            <UButton
                to="/contactPage" 
                icon="i-lucide-phone" 
                size="lg" 
                color="neutral" 
                variant="solid" 
                class="font-semibold rounded-full transition-transform hover:scale-105"
            >
                Contact pagina
            </UButton>
        </div>
        
    </div>
</template>