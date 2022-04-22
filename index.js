(function(){
  'use strict';

  const editor = document.getElementById('js-editor');

  function onBeforeInput(event) {
    if (event.inputType === 'insertText') {
      event.preventDefault();

      const text = event.data;

      const selection = window.getSelection();

      console.log(selection);

      // CAUTION! -----

      const textNode = document.createTextNode(text);

      selection.focusNode.parentElement.appendChild(textNode);
      selection.focusNode.parentElement.normalize();
    }
  }

  editor.addEventListener('beforeinput', onBeforeInput, false);

}());
