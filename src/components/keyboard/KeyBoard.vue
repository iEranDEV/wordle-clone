<template>
    <div class="mx-4 bg-stone-100 py-4 rounded-lg shadow">
        <div class="flex">
            <key-letter letter="Q"></key-letter>
            <key-letter letter="W"></key-letter>
            <key-letter letter="E"></key-letter>
            <key-letter letter="R"></key-letter>
            <key-letter letter="T"></key-letter>
            <key-letter letter="Y"></key-letter>
            <key-letter letter="U"></key-letter>
            <key-letter letter="I"></key-letter>
            <key-letter letter="O"></key-letter>
            <key-letter letter="P"></key-letter>
        </div>
        <div class="flex px-4">
            <key-letter letter="A"></key-letter>
            <key-letter letter="S"></key-letter>
            <key-letter letter="D"></key-letter>
            <key-letter letter="F"></key-letter>
            <key-letter letter="G"></key-letter>
            <key-letter letter="H"></key-letter>
            <key-letter letter="J"></key-letter>
            <key-letter letter="K"></key-letter>
            <key-letter letter="L"></key-letter>
        </div>
        <div class="flex px-4">
            <key-letter letter="Backspace"></key-letter>
            <key-letter letter="Z"></key-letter>
            <key-letter letter="X"></key-letter>
            <key-letter letter="C"></key-letter>
            <key-letter letter="V"></key-letter>
            <key-letter letter="B"></key-letter>
            <key-letter letter="N"></key-letter>
            <key-letter letter="M"></key-letter>
            <key-letter letter="Enter"></key-letter>
        </div>
        
    </div>
</template>

<script>
import KeyLetter from './KeyLetter.vue'
import { useStore } from '@/store'

export default {
    setup() {
        const store = useStore();


        return {
            store,
        }
    },
    components: {
        KeyLetter,
    },
    mounted() {
        document.addEventListener('keyup', (event) => {
			if(this.store.status === 'game') {
				if(event.code === 'Enter') {
					this.store.confirmUserWord();
				} else if(event.code === 'Backspace') {
					this.store.deleteLetter();	
				} else {
					this.store.addLetter(event.key);
				}
			}
		})
    }
}
</script>

<style>

</style>