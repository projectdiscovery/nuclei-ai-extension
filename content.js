let iframeInserted = false;      
let isIframeVisible = false;       
      
function showOrInsertIframe(preloading = false) {      
    if (!iframeInserted) {      
        insertIframe();      
    }      
    const iframe = document.getElementById("nuclei_iframe");      
    if (!preloading) {      
        iframe.style.right = "0";      
        isIframeVisible = true;      
    }      
}      
      
function toggleIframeVisibility() {  
  const iframe = document.getElementById("nuclei_iframe");  

  if (!iframe) {  
      insertIframe();
      isIframeVisible = true;  
  } else {  
      if (isIframeVisible) {  
          const closeButton = document.getElementById("nuclei_close_button");  
          if (closeButton) {  
            closeButton.onclick();
                    } else {  
              showOrInsertIframe();  
          }  
          isIframeVisible = false;   
      } else {  
          showOrInsertIframe();  
          isIframeVisible = true;  
      }  
  }  
}  
  
    
    
document.addEventListener('keydown', function (e) {    
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.code === 'KeyO') {     
        toggleIframeVisibility();    
           e.preventDefault();    
           e.stopPropagation();    
    }    
}, true);    
      
function generateButtonExploitDB() {      
  const existingButtonContainer = document.getElementById('ai-nuclei-button-container');      
  if (existingButtonContainer) {      
      existingButtonContainer.remove();      
  }      
      
  const urlRegexExploitDB = /^https:\/\/www\.exploit-db\.com\/exploits\/(\d+)/;      
  let exploitId = null;      
  if (urlRegexExploitDB.test(window.location.href)) {      
      exploitId = window.location.href.match(urlRegexExploitDB)[1];      
  }      
      
  if (exploitId) {      
    const intervalId = setInterval(() => {      
      const targetDiv = document.querySelector(".col-sm-12.col-md-6.col-lg-3.d-flex.align-items-stretch:nth-child(3)");      
      if (targetDiv) {      
          clearInterval(intervalId);      
          if (!document.getElementById('ai-nuclei-button')) {      
              fetch("https://www.exploit-db.com/raw/" + exploitId)      
                  .then(response => response.text())      
                  .then(data => {      
                      if (data) {      
                          const button = document.createElement("button");      
                          button.id = 'ai-nuclei-button';      
                          button.innerHTML = '<span class="icon-text"> <svg width="28" height="29" viewBox="0 0 29 31" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M14.6678 12.9213C16.0921 12.9213 17.3194 13.9422 17.5975 15.3594C17.8756 16.7776 17.1278 18.1967 15.8114 18.7504C14.4949 19.304 12.9761 18.8367 12.1846 17.6349C11.3932 16.4331 11.5483 14.8313 12.5554 13.8085C13.1152 13.2394 13.8754 12.9204 14.6678 12.9213ZM3.8554 13.3476C4.07021 13.6031 4.12903 13.9576 4.00871 14.2704C3.88838 14.5831 3.60851 14.8022 3.27962 14.8422C2.95073 14.8813 2.62808 14.734 2.43912 14.4585C1.84908 13.7258 1.40075 12.8876 1.11643 11.9867C0.864186 11.2031 0.905186 10.3522 1.2323 9.59672C1.72875 8.63399 2.62095 7.94399 3.66823 7.71218C4.95616 7.38854 6.29134 7.30672 7.60869 7.47036C8.07662 7.54309 8.40819 7.97309 8.3654 8.45127C8.32262 8.92945 7.92064 9.29127 7.44736 9.27763C6.35195 9.13581 5.24049 9.19581 4.16647 9.45581C3.62277 9.55581 3.14682 9.88672 2.85893 10.3649C2.72077 10.7249 2.71453 11.124 2.8411 11.4885C3.06303 12.1667 3.40708 12.7967 3.8554 13.3476ZM25.4802 18.554C25.2636 18.2994 25.2039 17.944 25.3243 17.6313C25.4446 17.3176 25.7262 17.0976 26.0551 17.0585C26.3849 17.0194 26.7084 17.1676 26.8965 17.444C27.4857 18.1767 27.9349 19.0158 28.2192 19.9158C28.4697 20.7004 28.4278 21.5504 28.1007 22.304H28.1033C27.606 23.2667 26.7138 23.9567 25.6674 24.1876C24.3786 24.5122 23.0434 24.594 21.7261 24.4304C21.3927 24.4213 21.0923 24.224 20.9462 23.9204C20.8 23.6167 20.8321 23.2549 21.0299 22.9831C21.2278 22.7104 21.5576 22.5713 21.8874 22.6231C22.9828 22.7649 24.0951 22.704 25.1692 22.4449C25.7129 22.3449 26.1879 22.014 26.4758 21.5358H26.4785C26.6158 21.1758 26.6211 20.7767 26.4928 20.4131C26.2708 19.7349 25.9277 19.104 25.4793 18.5531L25.4802 18.554ZM8.60784 14.3767C6.92238 15.4422 5.39914 16.7513 4.08625 18.2613C2.98906 19.5985 2.50597 20.7704 2.85893 21.5376C3.28943 22.474 4.92675 22.8276 7.22453 22.6413C7.86449 22.5885 8.50088 22.5013 9.13103 22.3804C8.7549 20.2585 8.56862 18.1067 8.57575 15.9513C8.57575 15.4194 8.58645 14.8949 8.60784 14.3767ZM10.8798 21.9813C12.805 21.4585 14.6803 20.7622 16.4843 19.9004C17.2927 19.5185 18.0869 19.1058 18.8659 18.6649C18.8953 18.2822 18.9176 17.914 18.9318 17.5594C18.9523 17.0749 18.963 16.5385 18.963 15.9513C18.971 13.9294 18.8008 11.9113 18.4559 9.91945C16.5725 10.4304 14.7373 11.1076 12.9708 11.944C12.6784 12.0885 12.3326 12.0613 12.0661 11.8731C11.7996 11.6849 11.6543 11.3649 11.6864 11.0376C11.7185 10.7104 11.9217 10.4249 12.2194 10.2931C14.1045 9.40218 16.0627 8.68309 18.0726 8.14309C17.9148 7.51218 17.7232 6.89036 17.5013 6.27945C16.6946 4.08945 15.6875 2.73399 14.6669 2.73399C13.6464 2.73399 12.6374 4.08763 11.8326 6.27945C10.9297 8.73399 10.3717 12.154 10.3717 15.9522C10.3637 17.974 10.5339 19.9922 10.8789 21.9822L10.8798 21.9813ZM20.7251 17.5276C22.0888 16.6467 23.3563 15.6222 24.5069 14.4694C26.1229 12.804 26.9072 11.304 26.4785 10.3658C26.0516 9.43672 24.4338 9.08127 22.1601 9.25672C21.505 9.31036 20.8526 9.39854 20.2064 9.52218C20.5825 11.644 20.7679 13.7958 20.7608 15.9522C20.7608 16.4467 20.7492 16.9731 20.7269 17.5276H20.7251ZM19.8204 7.7449C20.5495 7.60309 21.2858 7.50218 22.0255 7.44218C25.0622 7.20763 27.3261 7.90581 28.1033 9.59672C28.8841 11.2949 27.9402 13.5204 25.7833 15.7431C24.1156 17.3949 22.2421 18.8194 20.2117 19.9804C20.185 19.9985 20.1583 20.014 20.1297 20.0285C19.1894 20.5785 18.2259 21.0867 17.2419 21.5513C15.3185 22.4694 13.3166 23.2085 11.2621 23.7604C11.4208 24.3913 11.6115 25.0131 11.8335 25.624C12.6401 27.814 13.6473 29.1694 14.6678 29.1694C15.3015 29.1694 15.9522 28.6049 16.5601 27.6213C17.4433 26.0394 18.0503 24.314 18.3551 22.5231C18.479 22.0622 18.9336 21.7767 19.3953 21.8704C19.857 21.964 20.1689 22.404 20.1083 22.8785C19.7616 24.8867 19.0735 26.8185 18.0753 28.5894C17.1323 30.1149 15.97 30.9913 14.6678 30.9913C12.821 30.9913 11.2318 29.1831 10.1578 26.2594C9.90736 25.5713 9.69256 24.8704 9.51608 24.1594C8.80482 24.2976 8.08643 24.3967 7.36536 24.4576C4.30106 24.7049 2.01397 24.0076 1.2323 22.3076C0.560252 20.8413 1.15832 18.9985 2.71097 17.1031C4.44812 15.124 6.49277 13.4467 8.76471 12.1394C8.9599 9.9249 9.42784 7.74399 10.1569 5.64672C11.2318 2.72127 12.8201 0.913086 14.6678 0.913086C16.5146 0.913086 18.1038 2.72127 19.1778 5.6449C19.4283 6.33309 19.6431 7.03399 19.8204 7.7449ZM15.5101 15.0949C15.1081 14.6867 14.478 14.6231 14.0047 14.944C13.5314 15.264 13.3478 15.8785 13.5653 16.4113C13.7828 16.9449 14.3407 17.2476 14.8987 17.1349C15.4566 17.0231 15.8586 16.5267 15.8586 15.9494C15.8586 15.6285 15.7338 15.3213 15.5101 15.0949Z" fill="url(#paint0_linear_982_3016)"/> <defs> <linearGradient id="paint0_linear_982_3016" x1="14.6669" y1="0.913086" x2="14.6669" y2="30.9913" gradientUnits="userSpaceOnUse"> <stop stop-color="#FAFAFA"/> <stop offset="1" stop-color="#52525B"/> </linearGradient> </defs> </svg> Generate Nuclei Template</span>';    
                          button.classList.add("glow-button");      
                          const css = `    
                          .icon-text {    
                              display: flex;    
                              align-items: center;     
                              justify-content: center;     
                           }    
                          .icon-text svg {    
                               margin-right: 8px;     
                           }    
                              
                          .glow-button {    
                            --button-background: #09041e;    
                            --button-color: #fff;    
                            --button-shadow: rgba(33, 4, 104, 0.2);    
                            --button-shine-left: rgba(120, 0, 245, 0.5);    
                            --button-shine-right: rgba(200, 148, 255, 0.65);    
                            --button-glow-start: #B000E8;    
                            --button-glow-end: #009FFD;    
                              
                            appearance: none;    
                            outline: none;    
                            border: none;    
                            font-family: inherit;    
                            font-size: 16px;    
                            font-weight: 500;    
                            border-radius: 11px;    
                            position: relative;    
                            line-height: 26px;    
                            cursor: pointer;    
                            color: var(--button-color);    
                            padding: 0;    
                            margin: 0;    
                            background: none;    
                            z-index: 1;    
                            box-shadow: 0 8px 20px var(--button-shadow);    
                            width: 80%;    
                            height: 45px;    
                          }    
                              
                            .glow-button .gradient {    
                              position: absolute;    
                              inset: 0;    
                              border-radius: inherit;    
                              overflow: hidden;    
                              -webkit-mask-image: -webkit-radial-gradient(white, black);    
                              transform: scaleY(1.05) scaleX(1.005) rotate(-.35deg);    
                            }    
                              
                            .glow-button .gradient:before {    
                              content: '';    
                              position: absolute;    
                              top: 0;    
                              left: 0;    
                              right: 0;    
                              transform: scale(5.10) translateY(-35px) rotate(0deg) translateZ(0);    
                              padding-bottom: 100%;    
                              border-radius: 50%;    
                              background: linear-gradient(90deg, var(--button-shine-left), var(--button-shine-right));    
                            }    
                              
                            .glow-button span {    
                              z-index: 1;    
                              position: relative;    
                              display: flex;     
                              align-items: center;     
                              padding: 0 5px;    
                              left: 0;    
                              border-radius: inherit;    
                              height: 45px;    
                              background-color: var(--button-background);    
                              overflow: hidden;    
                              -webkit-mask-image: -webkit-radial-gradient(white, black);    
                            }    
                              
                            .glow-button:hover span:before {    
                              content: '';    
                              position: absolute;    
                              left: -16px;    
                              top: -16px;    
                              transform: translate(var(--pointer-x, 0px), var(--pointer-y, 0px)) translateZ(0);    
                              width: 32px;    
                              height: 32px;    
                              border-radius: 50%;    
                              background-color: var(--button-glow, transparent);    
                              opacity: var(--button-glow-opacity, 0);    
                              transition: opacity var(--button-glow-duration, .5s);    
                              filter: blur(20px);    
                            }    
                              
                            .glow-button:hover {    
                              --button-glow-opacity: 1;    
                              --button-glow-duration: .25s;    
                            }    
                              
                            @keyframes rotate {    
                              to {    
                                transform: scale(1.05) translateY(-44px) rotate(360deg) translateZ(0);    
                              }    
                            }    
                              
                            `;    
    
                          const style = document.createElement('style');      
                          style.innerHTML = css;      
                          document.head.appendChild(style);      
                          const gradientElem = document.createElement("div");      
                          gradientElem.classList.add("gradient");      
                          button.appendChild(gradientElem);      
      
                          button.addEventListener("pointermove", (e) => {      
                              const rect = button.getBoundingClientRect();      
                              const x = e.clientX - rect.left;      
                              const y = e.clientY - rect.top;      
                              gsap.to(button, {      
                                  "--pointer-x": `${x}px`,      
                                  "--pointer-y": `${y}px`,      
                                  duration: 0.6,      
                              });      
                              gsap.to(button, {      
                                  "--button-glow": chroma      
                                      .mix(      
                                          getComputedStyle(button)      
                                              .getPropertyValue("--button-glow-start")      
                                              .trim(),      
                                          getComputedStyle(button).getPropertyValue("--button-glow-end").trim(),      
                                          x / rect.width      
                                      )      
                                      .hex(),      
                                  duration: 0.2,      
                              });      
                          });      
      
                          let buttonclicked = false;      
                          button.onclick = () => {      
                              let reportContentText = data + '\n' + 'Also add the following reference to the nuclei template: ' + window.location.href;      
                              showOrInsertIframe();      
                              if (buttonclicked === false) {      
                                  sendSelectedTextToNuclei(reportContentText);      
                                  buttonclicked = true;      
                                  button.querySelector("span").innerHTML = '<span class="icon-text"> <svg width="30" height="30" viewBox="0 0 29 31" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M14.6678 12.9213C16.0921 12.9213 17.3194 13.9422 17.5975 15.3594C17.8756 16.7776 17.1278 18.1967 15.8114 18.7504C14.4949 19.304 12.9761 18.8367 12.1846 17.6349C11.3932 16.4331 11.5483 14.8313 12.5554 13.8085C13.1152 13.2394 13.8754 12.9204 14.6678 12.9213ZM3.8554 13.3476C4.07021 13.6031 4.12903 13.9576 4.00871 14.2704C3.88838 14.5831 3.60851 14.8022 3.27962 14.8422C2.95073 14.8813 2.62808 14.734 2.43912 14.4585C1.84908 13.7258 1.40075 12.8876 1.11643 11.9867C0.864186 11.2031 0.905186 10.3522 1.2323 9.59672C1.72875 8.63399 2.62095 7.94399 3.66823 7.71218C4.95616 7.38854 6.29134 7.30672 7.60869 7.47036C8.07662 7.54309 8.40819 7.97309 8.3654 8.45127C8.32262 8.92945 7.92064 9.29127 7.44736 9.27763C6.35195 9.13581 5.24049 9.19581 4.16647 9.45581C3.62277 9.55581 3.14682 9.88672 2.85893 10.3649C2.72077 10.7249 2.71453 11.124 2.8411 11.4885C3.06303 12.1667 3.40708 12.7967 3.8554 13.3476ZM25.4802 18.554C25.2636 18.2994 25.2039 17.944 25.3243 17.6313C25.4446 17.3176 25.7262 17.0976 26.0551 17.0585C26.3849 17.0194 26.7084 17.1676 26.8965 17.444C27.4857 18.1767 27.9349 19.0158 28.2192 19.9158C28.4697 20.7004 28.4278 21.5504 28.1007 22.304H28.1033C27.606 23.2667 26.7138 23.9567 25.6674 24.1876C24.3786 24.5122 23.0434 24.594 21.7261 24.4304C21.3927 24.4213 21.0923 24.224 20.9462 23.9204C20.8 23.6167 20.8321 23.2549 21.0299 22.9831C21.2278 22.7104 21.5576 22.5713 21.8874 22.6231C22.9828 22.7649 24.0951 22.704 25.1692 22.4449C25.7129 22.3449 26.1879 22.014 26.4758 21.5358H26.4785C26.6158 21.1758 26.6211 20.7767 26.4928 20.4131C26.2708 19.7349 25.9277 19.104 25.4793 18.5531L25.4802 18.554ZM8.60784 14.3767C6.92238 15.4422 5.39914 16.7513 4.08625 18.2613C2.98906 19.5985 2.50597 20.7704 2.85893 21.5376C3.28943 22.474 4.92675 22.8276 7.22453 22.6413C7.86449 22.5885 8.50088 22.5013 9.13103 22.3804C8.7549 20.2585 8.56862 18.1067 8.57575 15.9513C8.57575 15.4194 8.58645 14.8949 8.60784 14.3767ZM10.8798 21.9813C12.805 21.4585 14.6803 20.7622 16.4843 19.9004C17.2927 19.5185 18.0869 19.1058 18.8659 18.6649C18.8953 18.2822 18.9176 17.914 18.9318 17.5594C18.9523 17.0749 18.963 16.5385 18.963 15.9513C18.971 13.9294 18.8008 11.9113 18.4559 9.91945C16.5725 10.4304 14.7373 11.1076 12.9708 11.944C12.6784 12.0885 12.3326 12.0613 12.0661 11.8731C11.7996 11.6849 11.6543 11.3649 11.6864 11.0376C11.7185 10.7104 11.9217 10.4249 12.2194 10.2931C14.1045 9.40218 16.0627 8.68309 18.0726 8.14309C17.9148 7.51218 17.7232 6.89036 17.5013 6.27945C16.6946 4.08945 15.6875 2.73399 14.6669 2.73399C13.6464 2.73399 12.6374 4.08763 11.8326 6.27945C10.9297 8.73399 10.3717 12.154 10.3717 15.9522C10.3637 17.974 10.5339 19.9922 10.8789 21.9822L10.8798 21.9813ZM20.7251 17.5276C22.0888 16.6467 23.3563 15.6222 24.5069 14.4694C26.1229 12.804 26.9072 11.304 26.4785 10.3658C26.0516 9.43672 24.4338 9.08127 22.1601 9.25672C21.505 9.31036 20.8526 9.39854 20.2064 9.52218C20.5825 11.644 20.7679 13.7958 20.7608 15.9522C20.7608 16.4467 20.7492 16.9731 20.7269 17.5276H20.7251ZM19.8204 7.7449C20.5495 7.60309 21.2858 7.50218 22.0255 7.44218C25.0622 7.20763 27.3261 7.90581 28.1033 9.59672C28.8841 11.2949 27.9402 13.5204 25.7833 15.7431C24.1156 17.3949 22.2421 18.8194 20.2117 19.9804C20.185 19.9985 20.1583 20.014 20.1297 20.0285C19.1894 20.5785 18.2259 21.0867 17.2419 21.5513C15.3185 22.4694 13.3166 23.2085 11.2621 23.7604C11.4208 24.3913 11.6115 25.0131 11.8335 25.624C12.6401 27.814 13.6473 29.1694 14.6678 29.1694C15.3015 29.1694 15.9522 28.6049 16.5601 27.6213C17.4433 26.0394 18.0503 24.314 18.3551 22.5231C18.479 22.0622 18.9336 21.7767 19.3953 21.8704C19.857 21.964 20.1689 22.404 20.1083 22.8785C19.7616 24.8867 19.0735 26.8185 18.0753 28.5894C17.1323 30.1149 15.97 30.9913 14.6678 30.9913C12.821 30.9913 11.2318 29.1831 10.1578 26.2594C9.90736 25.5713 9.69256 24.8704 9.51608 24.1594C8.80482 24.2976 8.08643 24.3967 7.36536 24.4576C4.30106 24.7049 2.01397 24.0076 1.2323 22.3076C0.560252 20.8413 1.15832 18.9985 2.71097 17.1031C4.44812 15.124 6.49277 13.4467 8.76471 12.1394C8.9599 9.9249 9.42784 7.74399 10.1569 5.64672C11.2318 2.72127 12.8201 0.913086 14.6678 0.913086C16.5146 0.913086 18.1038 2.72127 19.1778 5.6449C19.4283 6.33309 19.6431 7.03399 19.8204 7.7449ZM15.5101 15.0949C15.1081 14.6867 14.478 14.6231 14.0047 14.944C13.5314 15.264 13.3478 15.8785 13.5653 16.4113C13.7828 16.9449 14.3407 17.2476 14.8987 17.1349C15.4566 17.0231 15.8586 16.5267 15.8586 15.9494C15.8586 15.6285 15.7338 15.3213 15.5101 15.0949Z" fill="url(#paint0_linear_982_3016)"/> <defs> <linearGradient id="paint0_linear_982_3016" x1="14.6669" y1="0.913086" x2="14.6669" y2="30.9913" gradientUnits="userSpaceOnUse"> <stop stop-color="#FAFAFA"/> <stop offset="1" stop-color="#52525B"/> </linearGradient> </defs> </svg> Show Nuclei Template</span>';    
                              }      
                          };      
      
                          const buttonContainer = document.createElement('div');      
                          buttonContainer.id = 'ai-nuclei-button-container';      
                          buttonContainer.style.display = 'flex';      
                          buttonContainer.style.justifyContent = 'center';      
                          buttonContainer.style.alignItems = 'center';      
                          buttonContainer.style.height = '100%';      
                          buttonContainer.style.position = 'absolute';      
                          buttonContainer.style.left = '0';      
                          buttonContainer.style.transform = 'translateX(140%)';      
                          buttonContainer.style.width = '80%';    
                          const fontSize = 16;      
                          const text = 'Generate Nuclei Template';      
                          const iconWidth = 28;      
                          const padding = 10;      
                          const characterWidth = fontSize * 0.6;      
                          const minWidth = (text.length * characterWidth) + iconWidth + padding;      
                          button.style.minWidth = `${minWidth}px`;      
                      
                        
                          buttonContainer.appendChild(button);      
                        
                          targetDiv.parentElement.style.position = 'relative';      
                          targetDiv.appendChild(buttonContainer);      
         }      
                  });      
          }      
      }      
    }, 500);      
  }      
}      
    
    
function insertIframe(preload = false) {    
    iframeInserted = true;    
    
    const iframe = document.createElement('iframe');    
    iframe.id = "nuclei_iframe";    
    iframe.src = "https://cloud.projectdiscovery.io/templates";    
    iframe.style.width = "40%";    
    iframe.style.height = "100%";    
    iframe.style.position = "fixed";    
    iframe.style.border = "none";    
    iframe.style.top = "0";    
    iframe.style.right = "-40%";     
    iframe.style.zIndex = "999998";     
    iframe.style.transition = "right 0.5s";     
    iframe.style.borderLeft = '5px solid rgba(0, 0, 0, 0.02)';    
    iframe.style.cursor = 'default';    
    
    iframe.addEventListener('mousemove', function(e) {    
      if (e.offsetX < 5) {     
          iframe.style.cursor = 'ew-resize';    
      } else {    
          iframe.style.cursor = 'default';    
      }    
  });    
    
  const closeButton = document.createElementNS("http://www.w3.org/2000/svg", "svg");      
  closeButton.id = "nuclei_close_button";      
  closeButton.setAttribute("width", "50");      
  closeButton.setAttribute("height", "50");      
  closeButton.setAttribute("viewBox", "0 0 50 50");      
  closeButton.style.position = "fixed";      
        
  const closeButtonDefs = document.createElementNS("http://www.w3.org/2000/svg", "defs");      
  const closeButtonGradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");      
  closeButtonGradient.id = "dark-blue-gradient";      
  closeButtonGradient.setAttribute("x1", "0%");      
  closeButtonGradient.setAttribute("y1", "0%");      
  closeButtonGradient.setAttribute("x2", "100%");      
  closeButtonGradient.setAttribute("y2", "0%");      
        
  const closeButtonStop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");      
  closeButtonStop1.setAttribute("offset", "15%");      
  closeButtonStop1.setAttribute("stop-color", "#565656");      
        
  const closeButtonStop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");      
  closeButtonStop2.setAttribute("offset", "85%");      
  closeButtonStop2.setAttribute("stop-color", "#181818");      
        
  closeButtonGradient.appendChild(closeButtonStop1);      
  closeButtonGradient.appendChild(closeButtonStop2);      
  closeButtonDefs.appendChild(closeButtonGradient);      
  closeButton.appendChild(closeButtonDefs);      
        
  const closeButtonRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");      
  closeButtonRect.setAttribute("x", "0");      
  closeButtonRect.setAttribute("y", "0");      
  closeButtonRect.setAttribute("width", "50");      
  closeButtonRect.setAttribute("height", "50");      
  closeButtonRect.setAttribute("rx", "10");      
  closeButtonRect.setAttribute("ry", "10");      
  closeButtonRect.setAttribute("fill", "url(#dark-blue-gradient)");      
  closeButton.appendChild(closeButtonRect);      
        
  const closeButtonPath = document.createElementNS("http://www.w3.org/2000/svg", "path");      
  closeButtonPath.setAttribute("d", "M20,15 L30,25 M20,35 L30,25");      
  closeButtonPath.setAttribute("stroke", "white");      
  closeButtonPath.setAttribute("stroke-width", "4");      
  closeButtonPath.setAttribute("stroke-linecap", "round");      
  closeButton.appendChild(closeButtonPath);      
    closeButton.style.top = "10px";    
    closeButton.style.right = "calc(" + iframe.style.width + " - 20px)";    
    closeButton.style.cursor = "pointer";    
    closeButton.style.zIndex = "9999999";     
    closeButton.style.width = '40px';    
    closeButton.style.height = '40px';    
    closeButton.style.display = 'none';     
    
    closeButton.onclick = function() {      
      closeButton.style.display = 'none';      
      iframe.style.right = "-"+iframe.style.width;      
      isIframeVisible = false; 
  };      
      
    iframe.onload = function() {    
        if (preload === false) {    
            showOrInsertIframe(false);    
        } else {    
            showOrInsertIframe(true);    
        }    
    };    
    
    iframe.addEventListener('transitionend', function() {    
        const closeButton = document.getElementById("nuclei_close_button");    
        if (iframe.style.right === '0px') {    
            closeButton.style.display = 'block';    
        } else {    
            closeButton.style.display = 'none';    
        }    
    });    
    
    
    const dragOverlay = document.createElement('div');    
    dragOverlay.style.position = 'fixed';    
    dragOverlay.style.top = '0';    
    dragOverlay.style.left = '0';    
    dragOverlay.style.width = '100%';    
    dragOverlay.style.height = '100%';    
    dragOverlay.style.zIndex = '999999';    
    dragOverlay.style.display = 'none';    
    document.body.appendChild(dragOverlay);    
    
    
    let isDragging = false;    
    let startMouseX;    
    let startWidth;    
    let startRight;    
    
    iframe.addEventListener('mousedown', function(e) {    
      if (e.offsetX < 5) {     
          isDragging = true;    
          startMouseX = e.clientX;    
          startWidth = parseFloat(getComputedStyle(iframe).width);    
          dragOverlay.style.display = 'block';     
          document.addEventListener('mousemove', doDrag);    
          document.addEventListener('mouseup', stopDrag);    
      }    
  });    
    
    
    function doDrag(e) {    
      const dx = e.clientX - startMouseX;    
      let newWidth = startWidth - dx;    
    
     
      newWidth = (newWidth / window.innerWidth) * 100;    
    
     
      if (newWidth < 20) {    
          newWidth = 20;    
      }    
      if (newWidth > 80) {    
          newWidth = 80;    
      }    
    
      iframe.style.width = `${newWidth}%`;    
      closeButton.style.right = "calc(" + `${newWidth}%` + " - 20px)";    
    
  }    
    
    
  function stopDrag() {    
    dragOverlay.style.display = 'none';     
    document.removeEventListener('mousemove', doDrag);    
    document.removeEventListener('mouseup', stopDrag);    
    isDragging = false;    
}    
    document.body.appendChild(iframe);    
    document.body.appendChild(closeButton);     
}    
    
    
let currentReportId = null;    
    
function generateButton() {    
    const existingButtonContainer = document.getElementById('ai-nuclei-button-container');    
    if (existingButtonContainer) {    
        existingButtonContainer.remove();    
    }    
    console.log('Generating button');    
    const urlRegexReport = /^https:\/\/hackerone\.com\/reports\/(\d{1,14})/;    
    const urlRegexBug = /^https:\/\/hackerone\.com\/bugs\?subject=.*&report_id=(\d{1,14})&view=.*$/;    
    let reportId = null;    
    if (urlRegexReport.test(window.location.href)) {    
        reportId = window.location.href.match(urlRegexReport)[1];    
    } else if (urlRegexBug.test(window.location.href)) {    
        reportId = window.location.href.match(urlRegexBug)[1];    
    }    
    if (reportId && reportId !== currentReportId) {    
        currentReportId = reportId;    
        const intervalId = setInterval(() => {    
            const separator = document.querySelector(".daisy-separator.daisy-separator--extra-small");    
            if (separator) {    
                clearInterval(intervalId);    
                if (!document.getElementById('ai-nuclei-button')) {    
                    fetch("https://hackerone.com/reports/" + reportId + ".json")    
                        .then(response => response.json())    
                        .then(data => {    
                            if (data.vulnerability_information) {    
                                const button = document.createElement("button");    
                                button.id = 'ai-nuclei-button';    
                                button.innerHTML = '<span class="icon-text"> <svg width="28" height="29" viewBox="0 0 29 31" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M14.6678 12.9213C16.0921 12.9213 17.3194 13.9422 17.5975 15.3594C17.8756 16.7776 17.1278 18.1967 15.8114 18.7504C14.4949 19.304 12.9761 18.8367 12.1846 17.6349C11.3932 16.4331 11.5483 14.8313 12.5554 13.8085C13.1152 13.2394 13.8754 12.9204 14.6678 12.9213ZM3.8554 13.3476C4.07021 13.6031 4.12903 13.9576 4.00871 14.2704C3.88838 14.5831 3.60851 14.8022 3.27962 14.8422C2.95073 14.8813 2.62808 14.734 2.43912 14.4585C1.84908 13.7258 1.40075 12.8876 1.11643 11.9867C0.864186 11.2031 0.905186 10.3522 1.2323 9.59672C1.72875 8.63399 2.62095 7.94399 3.66823 7.71218C4.95616 7.38854 6.29134 7.30672 7.60869 7.47036C8.07662 7.54309 8.40819 7.97309 8.3654 8.45127C8.32262 8.92945 7.92064 9.29127 7.44736 9.27763C6.35195 9.13581 5.24049 9.19581 4.16647 9.45581C3.62277 9.55581 3.14682 9.88672 2.85893 10.3649C2.72077 10.7249 2.71453 11.124 2.8411 11.4885C3.06303 12.1667 3.40708 12.7967 3.8554 13.3476ZM25.4802 18.554C25.2636 18.2994 25.2039 17.944 25.3243 17.6313C25.4446 17.3176 25.7262 17.0976 26.0551 17.0585C26.3849 17.0194 26.7084 17.1676 26.8965 17.444C27.4857 18.1767 27.9349 19.0158 28.2192 19.9158C28.4697 20.7004 28.4278 21.5504 28.1007 22.304H28.1033C27.606 23.2667 26.7138 23.9567 25.6674 24.1876C24.3786 24.5122 23.0434 24.594 21.7261 24.4304C21.3927 24.4213 21.0923 24.224 20.9462 23.9204C20.8 23.6167 20.8321 23.2549 21.0299 22.9831C21.2278 22.7104 21.5576 22.5713 21.8874 22.6231C22.9828 22.7649 24.0951 22.704 25.1692 22.4449C25.7129 22.3449 26.1879 22.014 26.4758 21.5358H26.4785C26.6158 21.1758 26.6211 20.7767 26.4928 20.4131C26.2708 19.7349 25.9277 19.104 25.4793 18.5531L25.4802 18.554ZM8.60784 14.3767C6.92238 15.4422 5.39914 16.7513 4.08625 18.2613C2.98906 19.5985 2.50597 20.7704 2.85893 21.5376C3.28943 22.474 4.92675 22.8276 7.22453 22.6413C7.86449 22.5885 8.50088 22.5013 9.13103 22.3804C8.7549 20.2585 8.56862 18.1067 8.57575 15.9513C8.57575 15.4194 8.58645 14.8949 8.60784 14.3767ZM10.8798 21.9813C12.805 21.4585 14.6803 20.7622 16.4843 19.9004C17.2927 19.5185 18.0869 19.1058 18.8659 18.6649C18.8953 18.2822 18.9176 17.914 18.9318 17.5594C18.9523 17.0749 18.963 16.5385 18.963 15.9513C18.971 13.9294 18.8008 11.9113 18.4559 9.91945C16.5725 10.4304 14.7373 11.1076 12.9708 11.944C12.6784 12.0885 12.3326 12.0613 12.0661 11.8731C11.7996 11.6849 11.6543 11.3649 11.6864 11.0376C11.7185 10.7104 11.9217 10.4249 12.2194 10.2931C14.1045 9.40218 16.0627 8.68309 18.0726 8.14309C17.9148 7.51218 17.7232 6.89036 17.5013 6.27945C16.6946 4.08945 15.6875 2.73399 14.6669 2.73399C13.6464 2.73399 12.6374 4.08763 11.8326 6.27945C10.9297 8.73399 10.3717 12.154 10.3717 15.9522C10.3637 17.974 10.5339 19.9922 10.8789 21.9822L10.8798 21.9813ZM20.7251 17.5276C22.0888 16.6467 23.3563 15.6222 24.5069 14.4694C26.1229 12.804 26.9072 11.304 26.4785 10.3658C26.0516 9.43672 24.4338 9.08127 22.1601 9.25672C21.505 9.31036 20.8526 9.39854 20.2064 9.52218C20.5825 11.644 20.7679 13.7958 20.7608 15.9522C20.7608 16.4467 20.7492 16.9731 20.7269 17.5276H20.7251ZM19.8204 7.7449C20.5495 7.60309 21.2858 7.50218 22.0255 7.44218C25.0622 7.20763 27.3261 7.90581 28.1033 9.59672C28.8841 11.2949 27.9402 13.5204 25.7833 15.7431C24.1156 17.3949 22.2421 18.8194 20.2117 19.9804C20.185 19.9985 20.1583 20.014 20.1297 20.0285C19.1894 20.5785 18.2259 21.0867 17.2419 21.5513C15.3185 22.4694 13.3166 23.2085 11.2621 23.7604C11.4208 24.3913 11.6115 25.0131 11.8335 25.624C12.6401 27.814 13.6473 29.1694 14.6678 29.1694C15.3015 29.1694 15.9522 28.6049 16.5601 27.6213C17.4433 26.0394 18.0503 24.314 18.3551 22.5231C18.479 22.0622 18.9336 21.7767 19.3953 21.8704C19.857 21.964 20.1689 22.404 20.1083 22.8785C19.7616 24.8867 19.0735 26.8185 18.0753 28.5894C17.1323 30.1149 15.97 30.9913 14.6678 30.9913C12.821 30.9913 11.2318 29.1831 10.1578 26.2594C9.90736 25.5713 9.69256 24.8704 9.51608 24.1594C8.80482 24.2976 8.08643 24.3967 7.36536 24.4576C4.30106 24.7049 2.01397 24.0076 1.2323 22.3076C0.560252 20.8413 1.15832 18.9985 2.71097 17.1031C4.44812 15.124 6.49277 13.4467 8.76471 12.1394C8.9599 9.9249 9.42784 7.74399 10.1569 5.64672C11.2318 2.72127 12.8201 0.913086 14.6678 0.913086C16.5146 0.913086 18.1038 2.72127 19.1778 5.6449C19.4283 6.33309 19.6431 7.03399 19.8204 7.7449ZM15.5101 15.0949C15.1081 14.6867 14.478 14.6231 14.0047 14.944C13.5314 15.264 13.3478 15.8785 13.5653 16.4113C13.7828 16.9449 14.3407 17.2476 14.8987 17.1349C15.4566 17.0231 15.8586 16.5267 15.8586 15.9494C15.8586 15.6285 15.7338 15.3213 15.5101 15.0949Z" fill="url(#paint0_linear_982_3016)"/> <defs> <linearGradient id="paint0_linear_982_3016" x1="14.6669" y1="0.913086" x2="14.6669" y2="30.9913" gradientUnits="userSpaceOnUse"> <stop stop-color="#FAFAFA"/> <stop offset="1" stop-color="#52525B"/> </linearGradient> </defs> </svg> Generate Nuclei Template</span>';    
                                button.classList.add("glow-button");    
                                const css = `    
.icon-text {    
    display: flex;    
    align-items: center;     
    justify-content: center;     
 }    
.icon-text svg {    
     margin-right: 8px;     
 }    
    
.glow-button {    
  --button-background: #09041e;    
  --button-color: #fff;    
  --button-shadow: rgba(33, 4, 104, 0.2);    
  --button-shine-left: rgba(120, 0, 245, 0.5);    
  --button-shine-right: rgba(200, 148, 255, 0.65);    
  --button-glow-start: #B000E8;    
  --button-glow-end: #009FFD;    
    
  appearance: none;    
  outline: none;    
  border: none;    
  font-family: inherit;    
  font-size: 16px;    
  font-weight: 500;    
  border-radius: 11px;    
  position: relative;    
  line-height: 26px;    
  cursor: pointer;    
  color: var(--button-color);    
  padding: 0;    
  margin: 0;    
  background: none;    
  z-index: 1;    
  box-shadow: 0 8px 20px var(--button-shadow);    
  width: 80%;    
  height: 45px;    
}    
    
  .glow-button .gradient {    
    position: absolute;    
    inset: 0;    
    border-radius: inherit;    
    overflow: hidden;    
    -webkit-mask-image: -webkit-radial-gradient(white, black);    
    transform: scaleY(1.05) scaleX(1.005) rotate(-.35deg);    
  }    
    
  .glow-button .gradient:before {    
    content: '';    
    position: absolute;    
    top: 0;    
    left: 0;    
    right: 0;    
    transform: scale(5.10) translateY(-35px) rotate(0deg) translateZ(0);    
    padding-bottom: 100%;    
    border-radius: 50%;    
    background: linear-gradient(90deg, var(--button-shine-left), var(--button-shine-right));    
  }    
    
  .glow-button span {    
    z-index: 1;    
    position: relative;    
    display: flex;     
    align-items: center;     
    padding: 0 5px;    
    left: 0;    
    border-radius: inherit;    
    height: 45px;    
    background-color: var(--button-background);    
    overflow: hidden;    
    -webkit-mask-image: -webkit-radial-gradient(white, black);    
  }    
    
  .glow-button:hover span:before {    
    content: '';    
    position: absolute;    
    left: -16px;    
    top: -16px;    
    transform: translate(var(--pointer-x, 0px), var(--pointer-y, 0px)) translateZ(0);    
    width: 32px;    
    height: 32px;    
    border-radius: 50%;    
    background-color: var(--button-glow, transparent);    
    opacity: var(--button-glow-opacity, 0);    
    transition: opacity var(--button-glow-duration, .5s);    
    filter: blur(20px);    
  }    
    
  .glow-button:hover {    
    --button-glow-opacity: 1;    
    --button-glow-duration: .25s;    
  }    
    
  @keyframes rotate {    
    to {    
      transform: scale(1.05) translateY(-44px) rotate(360deg) translateZ(0);    
    }    
  }    
    
  `;    
                                const style = document.createElement('style');    
                                style.innerHTML = css;    
                                document.head.appendChild(style);    
                                const gradientElem = document.createElement("div");    
                                gradientElem.classList.add("gradient");    
                                button.appendChild(gradientElem);    
    
                                button.addEventListener("pointermove", (e) => {    
                                    const rect = button.getBoundingClientRect();    
                                    const x = e.clientX - rect.left;    
                                    const y = e.clientY - rect.top;    
                                    gsap.to(button, {    
                                        "--pointer-x": `${x}px`,    
                                        "--pointer-y": `${y}px`,    
                                        duration: 0.6,    
                                    });    
                                    gsap.to(button, {    
                                        "--button-glow": chroma    
                                            .mix(    
                                                getComputedStyle(button)    
                                                    .getPropertyValue("--button-glow-start")    
                                                    .trim(),    
                                                getComputedStyle(button).getPropertyValue("--button-glow-end").trim(),    
                                                x / rect.width    
                                            )    
                                            .hex(),    
                                        duration: 0.2,    
                                    });    
                                });    
    
                                let buttonclicked = false;    
                                button.onclick = () => {    
                                    let reportContentText = 'Title: ' + data.title + '\n' + data.vulnerability_information + '\n' + 'Also add the following reference to the nuclei template: https://hackerone.com/reports/' + reportId + '\nAlso in the author field add the following : ' + data.reporter.username;    
                                    showOrInsertIframe();    
                                    if (buttonclicked === false) {    
                                        sendSelectedTextToNuclei(reportContentText);    
                                        buttonclicked = true;    
                                        button.querySelector("span").innerHTML = '<span class="icon-text"> <svg width="30" height="30" viewBox="0 0 29 31" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M14.6678 12.9213C16.0921 12.9213 17.3194 13.9422 17.5975 15.3594C17.8756 16.7776 17.1278 18.1967 15.8114 18.7504C14.4949 19.304 12.9761 18.8367 12.1846 17.6349C11.3932 16.4331 11.5483 14.8313 12.5554 13.8085C13.1152 13.2394 13.8754 12.9204 14.6678 12.9213ZM3.8554 13.3476C4.07021 13.6031 4.12903 13.9576 4.00871 14.2704C3.88838 14.5831 3.60851 14.8022 3.27962 14.8422C2.95073 14.8813 2.62808 14.734 2.43912 14.4585C1.84908 13.7258 1.40075 12.8876 1.11643 11.9867C0.864186 11.2031 0.905186 10.3522 1.2323 9.59672C1.72875 8.63399 2.62095 7.94399 3.66823 7.71218C4.95616 7.38854 6.29134 7.30672 7.60869 7.47036C8.07662 7.54309 8.40819 7.97309 8.3654 8.45127C8.32262 8.92945 7.92064 9.29127 7.44736 9.27763C6.35195 9.13581 5.24049 9.19581 4.16647 9.45581C3.62277 9.55581 3.14682 9.88672 2.85893 10.3649C2.72077 10.7249 2.71453 11.124 2.8411 11.4885C3.06303 12.1667 3.40708 12.7967 3.8554 13.3476ZM25.4802 18.554C25.2636 18.2994 25.2039 17.944 25.3243 17.6313C25.4446 17.3176 25.7262 17.0976 26.0551 17.0585C26.3849 17.0194 26.7084 17.1676 26.8965 17.444C27.4857 18.1767 27.9349 19.0158 28.2192 19.9158C28.4697 20.7004 28.4278 21.5504 28.1007 22.304H28.1033C27.606 23.2667 26.7138 23.9567 25.6674 24.1876C24.3786 24.5122 23.0434 24.594 21.7261 24.4304C21.3927 24.4213 21.0923 24.224 20.9462 23.9204C20.8 23.6167 20.8321 23.2549 21.0299 22.9831C21.2278 22.7104 21.5576 22.5713 21.8874 22.6231C22.9828 22.7649 24.0951 22.704 25.1692 22.4449C25.7129 22.3449 26.1879 22.014 26.4758 21.5358H26.4785C26.6158 21.1758 26.6211 20.7767 26.4928 20.4131C26.2708 19.7349 25.9277 19.104 25.4793 18.5531L25.4802 18.554ZM8.60784 14.3767C6.92238 15.4422 5.39914 16.7513 4.08625 18.2613C2.98906 19.5985 2.50597 20.7704 2.85893 21.5376C3.28943 22.474 4.92675 22.8276 7.22453 22.6413C7.86449 22.5885 8.50088 22.5013 9.13103 22.3804C8.7549 20.2585 8.56862 18.1067 8.57575 15.9513C8.57575 15.4194 8.58645 14.8949 8.60784 14.3767ZM10.8798 21.9813C12.805 21.4585 14.6803 20.7622 16.4843 19.9004C17.2927 19.5185 18.0869 19.1058 18.8659 18.6649C18.8953 18.2822 18.9176 17.914 18.9318 17.5594C18.9523 17.0749 18.963 16.5385 18.963 15.9513C18.971 13.9294 18.8008 11.9113 18.4559 9.91945C16.5725 10.4304 14.7373 11.1076 12.9708 11.944C12.6784 12.0885 12.3326 12.0613 12.0661 11.8731C11.7996 11.6849 11.6543 11.3649 11.6864 11.0376C11.7185 10.7104 11.9217 10.4249 12.2194 10.2931C14.1045 9.40218 16.0627 8.68309 18.0726 8.14309C17.9148 7.51218 17.7232 6.89036 17.5013 6.27945C16.6946 4.08945 15.6875 2.73399 14.6669 2.73399C13.6464 2.73399 12.6374 4.08763 11.8326 6.27945C10.9297 8.73399 10.3717 12.154 10.3717 15.9522C10.3637 17.974 10.5339 19.9922 10.8789 21.9822L10.8798 21.9813ZM20.7251 17.5276C22.0888 16.6467 23.3563 15.6222 24.5069 14.4694C26.1229 12.804 26.9072 11.304 26.4785 10.3658C26.0516 9.43672 24.4338 9.08127 22.1601 9.25672C21.505 9.31036 20.8526 9.39854 20.2064 9.52218C20.5825 11.644 20.7679 13.7958 20.7608 15.9522C20.7608 16.4467 20.7492 16.9731 20.7269 17.5276H20.7251ZM19.8204 7.7449C20.5495 7.60309 21.2858 7.50218 22.0255 7.44218C25.0622 7.20763 27.3261 7.90581 28.1033 9.59672C28.8841 11.2949 27.9402 13.5204 25.7833 15.7431C24.1156 17.3949 22.2421 18.8194 20.2117 19.9804C20.185 19.9985 20.1583 20.014 20.1297 20.0285C19.1894 20.5785 18.2259 21.0867 17.2419 21.5513C15.3185 22.4694 13.3166 23.2085 11.2621 23.7604C11.4208 24.3913 11.6115 25.0131 11.8335 25.624C12.6401 27.814 13.6473 29.1694 14.6678 29.1694C15.3015 29.1694 15.9522 28.6049 16.5601 27.6213C17.4433 26.0394 18.0503 24.314 18.3551 22.5231C18.479 22.0622 18.9336 21.7767 19.3953 21.8704C19.857 21.964 20.1689 22.404 20.1083 22.8785C19.7616 24.8867 19.0735 26.8185 18.0753 28.5894C17.1323 30.1149 15.97 30.9913 14.6678 30.9913C12.821 30.9913 11.2318 29.1831 10.1578 26.2594C9.90736 25.5713 9.69256 24.8704 9.51608 24.1594C8.80482 24.2976 8.08643 24.3967 7.36536 24.4576C4.30106 24.7049 2.01397 24.0076 1.2323 22.3076C0.560252 20.8413 1.15832 18.9985 2.71097 17.1031C4.44812 15.124 6.49277 13.4467 8.76471 12.1394C8.9599 9.9249 9.42784 7.74399 10.1569 5.64672C11.2318 2.72127 12.8201 0.913086 14.6678 0.913086C16.5146 0.913086 18.1038 2.72127 19.1778 5.6449C19.4283 6.33309 19.6431 7.03399 19.8204 7.7449ZM15.5101 15.0949C15.1081 14.6867 14.478 14.6231 14.0047 14.944C13.5314 15.264 13.3478 15.8785 13.5653 16.4113C13.7828 16.9449 14.3407 17.2476 14.8987 17.1349C15.4566 17.0231 15.8586 16.5267 15.8586 15.9494C15.8586 15.6285 15.7338 15.3213 15.5101 15.0949Z" fill="url(#paint0_linear_982_3016)"/> <defs> <linearGradient id="paint0_linear_982_3016" x1="14.6669" y1="0.913086" x2="14.6669" y2="30.9913" gradientUnits="userSpaceOnUse"> <stop stop-color="#FAFAFA"/> <stop offset="1" stop-color="#52525B"/> </linearGradient> </defs> </svg> Show Nuclei Template</span>';    
                                    }    
                                };    
    
                                const buttonContainer = document.createElement('div');    
                                buttonContainer.id = 'ai-nuclei-button-container';    
                                buttonContainer.style.display = 'flex';    
                                buttonContainer.style.justifyContent = 'center';    
                                buttonContainer.style.alignItems = 'center';    
                                buttonContainer.style.height = '100%';    
    
                                const fontSize = 16;      
                                const text = 'Generate Nuclei Template';      
                                const iconWidth = 28;      
                                const padding = 10;      
                                const characterWidth = fontSize * 0.6;      
                                const minWidth = (text.length * characterWidth) + iconWidth + padding;      
                                button.style.minWidth = `${minWidth}px`;      
    
                                buttonContainer.appendChild(button);    
    
                                separator.insertAdjacentHTML("afterend", "<br>");    
                                separator.insertAdjacentElement("afterend", buttonContainer);    
                                separator.insertAdjacentHTML("afterend", "<br>");    
                            }    
                        });    
                }    
            }    
        }, 500);    
    }    
}    
    
    
  function sendPostMessageToIframe(selectedText) {    
    let messageData = {    
        content: selectedText,    
        autoSubmit: true    
    };    
    iframex = document.getElementById("nuclei_iframe");    
    if (iframex && iframex.contentWindow) {    
        iframex.contentWindow.postMessage(messageData, 'https://cloud.projectdiscovery.io/templates');    
    } else {    
        console.error("Error: iframe or its contentWindow is not available.");    
    }    
};    
    
function preloadIframe() {    
    if (!document.getElementById("nuclei_iframe")) {    
        insertIframe(true);    
    }    
}    
    
if (window.location.hostname === "hackerone.com") {    
    console.log('preloading on hackerone.com');    
    preloadIframe();    
}    
    
if (window.location.hostname === "www.exploit-db.com") {    
  console.log('preloading on exploit-db.com');    
  preloadIframe();    
}    
    
    
function sendSelectedTextToNuclei(selectedText) {    
    let iframex = document.getElementById("nuclei_iframe");    
    
    if (!iframex) {    
        console.log('iframe inserted');    
        insertIframe(true);    
    
        iframex = document.getElementById("nuclei_iframe");    
        if (iframex) {    
            iframex.addEventListener('load', () => {    
                console.log('iframe loaded');    
                showOrInsertIframe();    
                sendPostMessageToIframe(selectedText);    
            });    
        } else {    
            console.error("Error: iframe was not inserted correctly.");    
        }    
    } else {    
        sendPostMessageToIframe(selectedText);    
        showOrInsertIframe();    
    }    
}    
    
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {  
    if (request.message === 'TabUpdated') {  
      if (window.location.hostname === "hackerone.com") {  
        generateButton();  
      } else if (window.location.hostname === "www.exploit-db.com") {  
        generateButtonExploitDB();  
      }  
    } else if (request.message === 'GenerateNucleiTemplate') {  
      sendSelectedTextToNuclei(request.selectedText + '\n' + 'Also add the following reference to the nuclei template: ' + window.location.href);  
    } else if (request.message === 'ToggleIframeVisibility') {  
      toggleIframeVisibility();  
    }  
  });  
  
          
      window.addEventListener('popstate', () => {    
      if (window.location.hostname === "hackerone.com") {    
      generateButton();    
      } else if (window.location.hostname === "www.exploit-db.com") {    
      generateButtonExploitDB();    
      }    
      });  
