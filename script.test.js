const { clearDisplay } = require('./script');

/**
 * @jest-environment jsdom
 */


describe('clearDisplay', () => {
    let display;

    beforeEach(() => {
        document.body.innerHTML = '<input class="display" value="12345">';
        display = document.querySelector('.display');
    });

    test('should clear the display value', () => {
        clearDisplay();
        expect(display.value).toBe('');
    });
});