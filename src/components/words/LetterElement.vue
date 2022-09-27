<template>
    <div class="h-16 w-16 border border-stone-400 m-1 rounded-lg flex justify-center items-center text-3xl font-bold uppercase" 
        :class="store.currentUserWord != rowIndex ? (letter.status === 'index' ? 'letterIndex' : (letter.status === 'contains' ? 'letterContains' : '')) : ''">
        {{ letter.letter }}
    </div>
</template>

<script>
import { useStore } from '@/store.js';

export default {
    setup() {
        const store = useStore();

        return {
            store,
        }
    },
    props: {
        letter: {
            type: Object,
            required: false,
            default() {
                return {
                    letter: '',
                    status: 'no'
                }
            }
        },
        rowIndex: Number
    }
}
</script>

<style>

</style>