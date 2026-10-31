/* global self, caches */
// Kill-switch service worker — DO NOT DELETE.
//
// The old Gatsby site used gatsby-plugin-offline, which registered a service
// worker at /sw.js that served a cached copy of the old site. A 404 here does
// not remove it: the browser keeps running the old worker forever, so returning
// visitors get a broken, stale Gatsby page and never see the new Astro HTML.
//
// Browsers check /sw.js for updates on every visit. Because this file differs
// from the old one, it gets installed, wipes all caches, unregisters itself and
// reloads open tabs from the network. It intentionally has no fetch handler.
//
// Keep this file deployed for a long time (at least until late 2027) so that
// infrequent visitors get cleaned up too. See also the inline cleanup script in
// src/layouts/Layout.astro and the apex-domain rule in public/_redirects.

self.addEventListener('install', () => {
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys()
      await Promise.all(keys.map((key) => caches.delete(key)))
      // Take over tabs still controlled by the old worker; otherwise matchAll()
      // does not see them and navigate() is not allowed on them.
      await self.clients.claim()
      await self.registration.unregister()
      const clients = await self.clients.matchAll({ type: 'window' })
      await Promise.all(
        clients.map((client) => client.navigate(client.url).catch(() => {})),
      )
    })(),
  )
})
