// Lightbox functionality
document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = lightbox.querySelector('.lightbox-image-container');
    const lightboxCounter = lightbox.querySelector('.lightbox-counter');
    const currentSpan = lightboxCounter.querySelector('.current');
    const totalSpan = lightboxCounter.querySelector('.total');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');
    
    const galleryItems = document.querySelectorAll('.gallery-item');
    let currentIndex = 0;
    
    // Update total count
    totalSpan.textContent = galleryItems.length;
    
    // Open lightbox
    function openLightbox(index) {
        currentIndex = index;
        updateLightboxContent();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Update lightbox content
    function updateLightboxContent() {
        const item = galleryItems[currentIndex];
        const imageDiv = item.querySelector('.gallery-image');
        
        // For demo purposes, we're showing a placeholder
        // In production, you'd use actual images
        const bgStyle = imageDiv.style.background;
        
        // Check if there's an actual image
        const img = imageDiv.querySelector('img');
        
        if (img) {
            lightboxContent.innerHTML = `<img src="${img.src}" alt="${img.alt || 'Gallery image'}">`;
        } else {
            // Show placeholder with same gradient
            lightboxContent.innerHTML = `
                <div class="lightbox-placeholder" style="background: ${bgStyle}">
                    <span>Image ${currentIndex + 1}</span>
                </div>
            `;
        }
        
        currentSpan.textContent = currentIndex + 1;
    }
    
    // Navigate to previous image
    function prevImage() {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        updateLightboxContent();
    }
    
    // Navigate to next image
    function nextImage() {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        updateLightboxContent();
    }
    
    // Event listeners
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => openLightbox(index));
    });
    
    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);
    
    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                prevImage();
                break;
            case 'ArrowRight':
                nextImage();
                break;
        }
    });
    
    // Touch swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    lightbox.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextImage();
            } else {
                prevImage();
            }
        }
    }
});
