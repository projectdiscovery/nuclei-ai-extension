// content.js
window.addEventListener("load", () => {
    const urlRegex = /https:\/\/hackerone.com\/reports\/\d{1,14}/;
    if (urlRegex.test(window.location.href)) {
      const intervalId = setInterval(() => {
        const separator = document.querySelector(".daisy-separator.daisy-separator--extra-small");
        if (separator) {
          clearInterval(intervalId);
          fetch(window.location.href + ".json")
            .then(response => response.json())
            .then(data => {
              if (data.vulnerability_information) {
                const button = document.createElement("button");
                button.innerHTML = "Generate Nuclei Template using AI";
                button.style.border = "2px solid #ff6ec7";
                button.style.borderRadius = "10px";
                button.style.color = "#ff6ec7";
                button.style.background = "transparent";
                button.style.fontFamily = "Arial";
                button.style.fontSize = "16px";
                button.style.fontWeight = "bold";
                button.style.padding = "10px 20px";
                button.style.position = "relative";
                button.style.animation = "border 2s infinite"
                button.onclick = () => {
                  const reportId = window.location.href.match(/\d+/)[0];
                  window.open(`https://ai.nuclei.sh/?hackerone_report_id=${reportId}`);
                };
                separator.insertAdjacentHTML("afterend", "&nbsp;&nbsp;");
                separator.insertAdjacentElement("afterend", button);
                separator.insertAdjacentHTML("afterend", "&nbsp;&nbsp;");
              }
            });
        }
      }, 2000);
    }
  });