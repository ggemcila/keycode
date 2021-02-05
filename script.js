 const eventKey = document.getElementById('key');
 const eventCode = document.getElementById('code');
 const eventWhich = document.getElementById('which');
 const titleWhich = document.querySelector('h1');
 
 window.addEventListener("keydown", (event) => {
     console.log("event");
     eventKey.textContent = 'event.key: ' + event.key;
     eventWhich.textContent = 'event.which: ' + event.which;
     eventCode.textContent = 'event.code: ' + event.code;
     titleWhich.textContent = event.which;
 });