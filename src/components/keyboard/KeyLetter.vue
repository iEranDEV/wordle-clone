<template>
    <div class="h-10 w-10 p-1 m-1 text-lg font-semibold rounded-lg shadow flex justify-center items-center" @click="emitClick()" :class="{'bg-stone-300': clicked}">
        <p v-if="letter === 'Backspace'">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
            </svg>
        </p>
        <p v-else-if="letter === 'Enter'">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
        </p>
        <p v-else>
            {{ letter }}
        </p>
    </div>
</template>

<script>
export default {
    props: {
        letter: String
    },
    data() {
        return {
            clicked: false
        }
    },
    mounted() {
        document.addEventListener('keyup', (event) => {
            if(event.key.toUpperCase() === this.letter) {
                this.clicked = true;
                setTimeout(() => {
                    this.clicked = false;
                }, 500)
            }
		})
    },
    methods: {
        emitClick() {
            document.dispatchEvent(new KeyboardEvent('keyup', {'key': this.letter.toLowerCase(), 'code': this.letter}))
        }
    }
}
</script>

<style>

</style>