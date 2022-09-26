<template>
    <div class="w-full h-full fixed bg-stone-700 bg-opacity-75 flex justify-center items-center">
        <div class="bg-white rounded-2xl px-4 py-8 shadow-2xl flex flex-col items-center">
            <wordle-logo></wordle-logo>
            <p v-if="store.status === 'win'" class="font-bold text-2xl mt-8">
                Congratulations! You won!
            </p>
            <p v-else class="font-bold text-2xl mt-8">
                Unlucky... You lost!
            </p>

            <p class="font-bold text-stone-500 text-2xl mt-4">The word was: 
                <span class="text-green-500">{{ store.wordToGuess }}</span>
            </p>

            <button class="mt-12 bg-green-500 text-stone-100 rounded py-2 px-4 text-2xl uppercase font-bold w-full">Play again</button>
        </div>
    </div>
</template>

<script>
import WordleLogo from '@/components/WordleLogo.vue'
import { useStore } from '@/store.js'

export default {
    setup() {
        const store = useStore();

        return {
            store,
        }
    },
    components: {
        WordleLogo
    }
}
</script>

<style>

</style>