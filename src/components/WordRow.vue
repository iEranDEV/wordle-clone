<template>
    <div class="w-full flex justify-center items-center">
        <letter-element v-for="letter in 5" :key="letter" :letter="store.userWords[index][letter - 1]" :rowIndex="index">
        </letter-element>
    </div>
</template>

<script>
import LetterElement from './LetterElement.vue'
import { useStore } from '@/store.js'

export default {
    setup() {
        const store = useStore();

        return {
            store
        }
    },
    components: {
        LetterElement
    },
    props: {
        index: {
            type: Number,
            required: true,
            default: -1
        },
        word: Array
    }
}
</script>

<style>

</style>