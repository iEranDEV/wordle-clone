<template>
    <div class="w-full flex justify-center items-center" :class="{ shake: store.error === index }">
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

.shake {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}

</style>