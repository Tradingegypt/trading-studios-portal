function loadVideoDeliverable(deliverable) {
  activeDeliverable = deliverable;
  const video = document.getElementById('main-video-element');

  document.getElementById('active-video-title').textContent = deliverable.title;
  document.getElementById('active-video-specs').textContent = deliverable.specs;
  document.getElementById('player-aspect-badge').textContent = deliverable.aspect || '16:9 DCI';

  // يستخدم streamUrl للمعاينة داخل المشغل، وإذا لم يوجد يستخدم downloadUrl
  const previewSrc = deliverable.streamUrl || deliverable.downloadUrl;
  video.pause();
  video.src = previewSrc;
  video.load();

  document.getElementById('big-play-btn').classList.remove('opacity-0', 'pointer-events-none');
  document.getElementById('btn-play-icon').setAttribute('data-lucide', 'play');

  renderTimelineMarkers();
  lucide.createIcons();
}