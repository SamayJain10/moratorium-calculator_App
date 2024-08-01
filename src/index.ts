import './style.css';
import { UI } from './UI';

// Initialize the UI when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const ui = new UI();
    ui.init();
});
