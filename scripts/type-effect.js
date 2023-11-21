// Wait for dom to load
document.addEventListener('DOMContentLoaded', function() {
 
    // get the element of id 'type-effect'
    let typeEffect = document.getElementById('type-effect');

    // get the text inside the element
    let text = typeEffect.innerHTML;

    // clear the text inside the element
    typeEffect.innerHTML = '';

    // create a new span element
    let span = document.createElement('span');

    // Give the span the margin and padding the H1 had so it doesn't break the layout
    span.style.margin = '20px 0px';
    span.style.padding = '0px 20px';

    // append the span element to the element of id 'type-effect'
    typeEffect.appendChild(span);

    // create a new text node
    let textNode = document.createTextNode('');

    // append the text node to the span element
    span.appendChild(textNode);

    // set the initial value of the counter
    let counter = 0;

    // set the initial value of the speed
    let speed = 100;

    // set the initial value of the interval
    let interval = setInterval(function() {
        // get the current character
        let currentChar = text.charAt(counter);

        // append the current character to the text node
        textNode.appendData(currentChar);

        // increment the counter
        counter++;

        // if the counter is equal to the length of the text
        if(counter == text.length) {
            // clear the interval
            clearInterval(interval);
        }
    }, speed);

});