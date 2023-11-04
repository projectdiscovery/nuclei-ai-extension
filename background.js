  function sendMessageWithRetry(tabId, message, retries = 5, interval = 200) {  
  if (retries <= 0) {  
    console.warn("Content script is not ready. Message not sent:", message);  
    return;  
  }  
  
  chrome.tabs.sendMessage(tabId, message, (response) => {  
    if (chrome.runtime.lastError) {  
      setTimeout(() => {  
        sendMessageWithRetry(tabId, message, retries - 1, interval);  
      }, interval);  
    }  
  });  
}  



chrome.runtime.onInstalled.addListener(() => {    
    chrome.contextMenus.create({    
      id: 'sendSelectedText',    
      title: 'Generate Nuclei Template',    
      contexts: ['selection'],    
    });    
  });    
      
  chrome.contextMenus.onClicked.addListener((info, tab) => {    
    if (info.menuItemId === 'sendSelectedText') {    
      const selectedText = info.selectionText;    
      sendMessageWithRetry(tab.id, { message: 'GenerateNucleiTemplate', selectedText: selectedText });    
    }    
  });    
      
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {    
    if (changeInfo.status === 'complete') {    
      sendMessageWithRetry(tabId, { message: 'TabUpdated' });    
    }    
  });    
  
  chrome.action.onClicked.addListener((tab) => {
    sendMessageWithRetry(tab.id, { message: 'ToggleIframeVisibility' });  
  });  
  
