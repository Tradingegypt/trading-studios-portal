function formatCloudDirectUrl(url) {
  if (!url) return '';
  let cleanUrl = url.trim();

  // Google Drive
  const gdMatch = cleanUrl.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (gdMatch && gdMatch[1]) {
    return `https://drive.google.com/uc?export=download&id=${gdMatch[1]}`;
  }

  // Dropbox
  if (cleanUrl.includes('dropbox.com')) {
    return cleanUrl
      .replace('www.dropbox.com', 'dl.dropboxusercontent.com')
      .replace(/([?&])dl=0/, '$1dl=1');
  }

  // OneDrive / SharePoint
  if (
    cleanUrl.includes('1drv.ms') ||
    cleanUrl.includes('onedrive.live.com') ||
    cleanUrl.includes('sharepoint.com')
  ) {
    if (cleanUrl.includes('download=1')) return cleanUrl;
    return cleanUrl + (cleanUrl.includes('?') ? '&download=1' : '?download=1');
  }

  return cleanUrl;
}

function openActiveVideoOnOneDrive() {
  if (!activeDeliverable || !activeDeliverable.downloadUrl) {
    showToast('لا يوجد رابط متاح لهذا المقطع');
    return;
  }
  window.open(activeDeliverable.downloadUrl.trim(), '_blank', 'noopener,noreferrer');
}