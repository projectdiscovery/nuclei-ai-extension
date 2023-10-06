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
      chrome.tabs.sendMessage(tab.id, { message: 'GenerateNucleiTemplate', selectedText: selectedText });    
    }    
  });    
      
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {    
    if (changeInfo.status === 'complete') {    
      chrome.tabs.sendMessage(tabId, { message: 'TabUpdated' });    
    }    
  });    
  
