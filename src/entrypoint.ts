import type { Alpine } from 'alpinejs';
// @ts-ignore
import persist from '@alpinejs/persist'; 

export default (Alpine: Alpine) => {
    Alpine.plugin(persist)
}