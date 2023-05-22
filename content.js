function generateButton() {
  console.log('Generating button');
  const urlRegexReport = /https:\/\/hackerone.com\/reports\/\d{1,14}/;
  const urlRegexBug = /https:\/\/hackerone.com\/bugs\?subject=.*&report_id=\d{1,14}&view=.*$/;
  let reportId = null;
  if (urlRegexReport.test(window.location.href)) {
    reportId = window.location.href.match(/\d+/)[0];
  } else if (urlRegexBug.test(window.location.href)) {
    const urlParams = new URLSearchParams(window.location.search);
    reportId = urlParams.get('report_id');
  }
  if (reportId) {
    const intervalId = setInterval(() => {
      const separator = document.querySelector(".daisy-separator.daisy-separator--extra-small");
      if (separator) {
        clearInterval(intervalId);
        if (!document.getElementById('ai-nuclei-button')) { // Check if button exists
          fetch("https://hackerone.com/reports/" + reportId + ".json")
            .then(response => response.json())
            .then(data => {
              if (data.vulnerability_information) {
                const button = document.createElement("button");
                button.id = 'ai-nuclei-button'; // Give the button an ID
                button.innerHTML = "Generate Nuclei Template";
                button.style.border = "2px solid #ff6ec7";
                button.style.borderRadius = "10px";
                button.style.color = "#ff6ec7";
                button.style.background = "transparent";
                button.style.fontFamily = "Arial";
                button.style.fontSize = "16px";
                button.style.fontWeight = "bold";
                button.style.padding = "10px 20px";
                button.style.position = "relative";
                button.style.animation = "border 2s infinite";
                button.onclick = () => {
                  let reportContentText = 'Title: ' + data.title + '\n' + data.vulnerability_information + '\n' + 'Also add the following reference to the nuclei template: https://hackerone.com/reports/' + reportId;
                  
                  // Store the new window reference in a variable
                  let newWindow = window.open('https://ai.nuclei.sh/');
                
                  // Add event listener to the current window
                  window.addEventListener('message', (event) => {
                    if (event.origin !== 'https://ai.nuclei.sh') {
                        return;
                    }
                    if (event.data === 'Ready') {
                      let messageData = {
                        content: reportContentText,
                        autoSubmit: true  // Or set this to false if you don't want to auto-submit
                      };
                      // Use the stored reference to post the message directly to the new window
                      newWindow.postMessage(messageData, 'https://ai.nuclei.sh/');
                    }
                  });
                };
                // Here we actually append the button to the page.
                separator.insertAdjacentHTML("afterend", "&nbsp;&nbsp;");
                separator.insertAdjacentElement("afterend", button);
                separator.insertAdjacentHTML("afterend", "&nbsp;&nbsp;");
              }
            });
        }
      }
    }, 2000);
  }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'TabUpdated') {
    generateButton();
  }
});

