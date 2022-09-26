<template>
	<div class="h-screen w-screen overflow-hidden flex flex-col justify-around">
		<wordle-logo></wordle-logo>
		<div class="m-4 flex flex-col">
			<word-row v-for="index in 5" :key="index" :index="index - 1" :word="store.userWords[index - 1]" :id="'wordRow_' + (index - 1)"></word-row>
		</div>
		<key-board></key-board>

		<!-- Game End modal -->
		<game-end v-if="store.status === 'win' || store.status === 'lose'"></game-end>
	</div>
</template>

<script>
import { useStore } from './store.js';
import WordleLogo from './components/WordleLogo.vue'
import WordRow from './components/WordRow.vue'
import KeyBoard from './components/KeyBoard.vue'
import GameEnd from './components/modals/GameEnd.vue'

export default {
	setup() {
		const store = useStore();
		store.generateWord();

		return {
			store,
		}
	},
	components: {
		WordleLogo,
		GameEnd,
		WordRow,
		KeyBoard
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
