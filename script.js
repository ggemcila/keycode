 const eventKey = document.getElementById('key');
 const eventCode = document.getElementById('code');
 const eventWhich = document.getElementById('which');
 const titleWhich = document.querySelector('h1');
 
 window.addEventListener("keydown", (event) => {
     console.log("event");
     eventKey.textContent = event.key;
     eventWhich.textContent = event.which;
     eventCode.textContent = event.code;
     titleWhich.textContent = event.which;
 });