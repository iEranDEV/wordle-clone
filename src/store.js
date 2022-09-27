import { defineStore } from 'pinia';
import axios from 'axios';

export const useStore = defineStore('store', {
    state: () => ({
        wordToGuess: null,
        status: 'game',
        userWords: [[], [], [], [], []],
        currentUserWord: 0,
        error: -1,
    }),

    actions: {
        async generateWord() {
            let response = await axios.get('https://thatwordleapi.azurewebsites.net/get/');
            this.wordToGuess = response.data.Response;
            console.log('Generated word = ' + this.wordToGuess);
        },

        async confirmUserWord() {
            if(this.userWords[this.currentUserWord].length == 5) {
                let word = '';
                this.userWords[this.currentUserWord].forEach(letter => word += letter.letter)

                // Check if word is correct
                if(word.toUpperCase() === this.wordToGuess.toUpperCase()) {
                    this.status = 'win';
                    return;
                }

                // Check if word exists
                let response = await axios.get('https://thatwordleapi.azurewebsites.net/ask?word=' + word);
                if(response.data.Response) {
                    this.currentUserWord++;
                    if(this.currentUserWord == 5) {
                        this.status = 'lose';
                    }
                    return
                } else {
                    console.log('word doesnt exist')
                }
            } 
            // Word is too short
            this.error = this.currentUserWord;
            setTimeout(() => {
                this.error = -1;
            }, 1500)
        },

        addLetter(letter) {
            let nextIndex = this.userWords[this.currentUserWord].length;
            if(nextIndex < 5) this.userWords[this.currentUserWord][nextIndex] = {
                letter: letter,
                status: this.findLetter(letter, nextIndex)
            };
        },

        deleteLetter() {
            this.userWords[this.currentUserWord].pop();
        },

        findLetter(letter, index) {
            if(this.wordToGuess.toUpperCase().indexOf(letter.toUpperCase()) != -1) {
                if(this.wordToGuess.toUpperCase().indexOf(letter.toUpperCase()) === index) {
                    return 'index'
                }
                return 'contains'
            } 
            return 'no'
        }
    },


})