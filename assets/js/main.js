(() => {
  'use strict';

  const BOOKING_EMBED_URL = '';
  const MAP_EMBED_URL = '';
  const PHONE_E164 = '+14157419846';
  const PLACEHOLDER_SRC = 'assets/placeholder.svg';
  const nav = document.querySelector('[data-site-nav]');
  const navToggle = document.querySelector('[data-nav-toggle]');
  const stickyBook = document.querySelector('[data-sticky-book]');

  const params = new URLSearchParams(window.location.search || '');
  const isLive = params.get('live') === '1';

  const safeScrollTop = () => {
    window.requestAnimationFrame(() => {
      try {
        window.scrollTo({ top: 0, left: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
      } catch (error) {
        window.scrollTo(0, 0);
      }
    });
  };

  safeScrollTop();

  if (nav && navToggle) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open', !expanded);
    });

    nav.addEventListener('click', (event) => {
      const target = event.target;
      if (target instanceof HTMLElement && target.tagName === 'A') {
        navToggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
      }
    });
  }

  if (stickyBook) {
    stickyBook.setAttribute('href', `sms:${PHONE_E164}`);
  }

  // IMAGE SYSTEM + FALLBACK LOGIC
  const hydrateManagedImages = () => {
    const managedImages = document.querySelectorAll('img[data-img]');
    managedImages.forEach((img) => {
      const src = img.getAttribute('data-img');
      if (!src) {
        img.src = PLACEHOLDER_SRC;
        return;
      }

      img.loading = 'lazy';
      img.decoding = 'async';

      img.addEventListener('error', () => {
        if (img.src !== PLACEHOLDER_SRC) {
          img.src = PLACEHOLDER_SRC;
        }
      }, { once: true });

      img.src = isLive ? src : PLACEHOLDER_SRC;
    });
  };

  hydrateManagedImages();

  // GALLERY DATA RENDER
  const galleryContainer = document.querySelector('[data-gallery-grid]');
  if (galleryContainer && Array.isArray(window.APP_DATA?.gallery)) {
    const fragment = document.createDocumentFragment();
    window.APP_DATA.gallery.forEach((url, index) => {
      const tile = document.createElement('div');
      tile.className = 'gallery-item';

      const img = document.createElement('img');
      img.alt = `Dog grooming photo ${index + 1}`;
      img.setAttribute('data-img', url);

      tile.appendChild(img);
      fragment.appendChild(tile);
    });
    galleryContainer.appendChild(fragment);
    hydrateManagedImages();
  }

  // BOOKING SYSTEM
  const bookingForm = document.querySelector('[data-booking-form]');
  const bookingOutput = document.querySelector('[data-booking-confirmation]');
  const smsButton = document.querySelector('[data-sms-button]');
  const callButton = document.querySelector('[data-call-button]');

  const setHref = (el, value) => {
    if (el instanceof HTMLAnchorElement) {
      el.href = value;
    }
  };

  setHref(smsButton, `sms:${PHONE_E164}`);
  setHref(callButton, `tel:${PHONE_E164}`);

  if (bookingForm && bookingOutput) {
    bookingForm.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!bookingForm.checkValidity()) {
        bookingForm.reportValidity();
        return;
      }

      const formData = new FormData(bookingForm);
      const addOns = formData.getAll('addons').join(', ') || 'None';
      const payload = {
        name: String(formData.get('name') || '').trim(),
        phone: String(formData.get('phone') || '').trim(),
        email: String(formData.get('email') || '').trim() || 'Not provided',
        service: String(formData.get('service') || '').trim(),
        addOns,
        date: String(formData.get('date') || '').trim(),
        time: String(formData.get('time') || '').trim(),
        dog: String(formData.get('dog') || '').trim() || 'Not provided',
        notes: String(formData.get('notes') || '').trim() || 'Not provided'
      };

      const smsBody = `Hi Omar! I'd like to book a ${payload.service}. Preferred date/time: ${payload.date} ${payload.time}. Dog: ${payload.dog}. Add-ons: ${payload.addOns}. Notes: ${payload.notes}. My name is ${payload.name}. Phone: ${payload.phone}. Email: ${payload.email}.`;

      bookingOutput.hidden = false;
      bookingOutput.innerHTML = `
        <h3>Request captured</h3>
        <p>Thanks ${payload.name}, your request is ready to send. Use text first for fastest response.</p>
        <div class="cta-row">
          <a class="btn btn-primary" href="sms:${PHONE_E164}?&body=${encodeURIComponent(smsBody)}">Text This Request</a>
          <a class="btn btn-secondary" href="tel:${PHONE_E164}">Call Omar</a>
        </div>
      `;
    });
  }

  // BOOKING SYSTEM: optional embed + fallback logic
  const bookingEmbedWrap = document.querySelector('[data-booking-embed]');
  if (bookingEmbedWrap) {
    const embedUrl = BOOKING_EMBED_URL || (isLive ? 'https://calendly.com/' : '');
    if (embedUrl) {
      const iframe = document.createElement('iframe');
      iframe.title = 'Online booking scheduler';
      iframe.loading = 'lazy';
      iframe.src = embedUrl;
      iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      iframe.style.width = '100%';
      iframe.style.minHeight = '500px';
      iframe.style.border = '1px solid #d6d6d6';
      bookingEmbedWrap.innerHTML = '';
      bookingEmbedWrap.appendChild(iframe);
    }
  }

  // MAP EMBED
  const mapTarget = document.querySelector('[data-map]');
  if (mapTarget) {
    const mapUrl = MAP_EMBED_URL;
    if (mapUrl) {
      const iframe = document.createElement('iframe');
      iframe.title = 'Service area map';
      iframe.loading = 'lazy';
      iframe.src = mapUrl;
      iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      mapTarget.innerHTML = '';
      mapTarget.className = 'map-embed';
      mapTarget.appendChild(iframe);
    }
  }
})();
