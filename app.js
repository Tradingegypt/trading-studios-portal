const rawStreamUrl = document.getElementById('deliverable-stream-url').value.trim();
const previewUrl = document.getElementById('deliverable-preview-url').value.trim();

const newDel = {
  id: 'vid_' + Date.now(),
  title: title,
  category: category,
  aspect: category === 'social' ? '9:16 Vertical' : (category === 'teaser' ? '2.39:1 Anamorphic' : '16:9 DCI'),
  specs: specs,
  streamUrl: previewUrl || rawStreamUrl,
  downloadUrl: rawStreamUrl,
  duration: '03:30',
  thumbnail: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?auto=format&fit=crop&w=800&q=80'
};
