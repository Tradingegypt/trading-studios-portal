function formatCloudDirectUrl(url) {
  if (!url) return '';
  const cleanUrl = url.trim();

  // Google Drive: تحويل رابط العرض إلى رابط تحميل مباشر
  const gdMatch = cleanUrl.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (gdMatch && gdMatch[1]) {
    return `https://drive.google.com/uc?export=download&id=${gdMatch[1]}`;
  }

  // Dropbox: إجبار التحميل المباشر
  if (cleanUrl.includes('dropbox.com')) {
    return cleanUrl
      .replace('www.dropbox.com', 'dl.dropboxusercontent.com')
      .replace(/([?&])dl=0/, '$1dl=1');
  }

  // OneDrive: إضافة download=1 إذا لم تكن موجودة (يعمل غالباً مع روابط onedrive.live.com / 1drv.ms)
  if (cleanUrl.includes('1drv.ms') || cleanUrl.includes('onedrive.live.com')) {
    return cleanUrl.includes('download=1')
      ? cleanUrl
      : cleanUrl + (cleanUrl.includes('?') ? '&download=1' : '?download=1');
  }

  return cleanUrl;
}

function downloadSpecificFormat(fmt) {
  if (!activeDeliverable) return;
  const targetUrl = formatCloudDirectUrl(activeDeliverable.downloadUrl);
  const baseName = activeDeliverable.title.trim().replace(/\s+/g, '_');

  const suffixMap = {
    prores4444: '_4K_ProRes4444_XQ',
    prores422: '_4K_ProRes422_HQ',
    hevc: '_4K_UHD_HEVC_HDR',
    proxy: '_Proxy_1080p_FHD',
    audio: '_Master_Audio_Stems_24bit'
  };

  const filename = `${baseName}${suffixMap[fmt] || ''}`;
  soundFX.click();
  showToast(`جاري فتح رابط التحميل: ${filename}`);

  const link = document.createElement('a');
  link.href = targetUrl;
  link.download = filename;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  closeFormatsModal();
}