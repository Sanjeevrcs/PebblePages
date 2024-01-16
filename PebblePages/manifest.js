export const manifestForPlugIn = {
    registerType: 'prompt',
    includeAssets: ['public\\blogger.png'],
    manifest: {
      name: 'Pebble Pages',
      short_name: 'PebblePages',
      description: 'ss',
      icons: [
        {
          "src": "blogger-144x144.png",
          "sizes": "144x144",
          "type": "image/png",
          "purpose": "maskable"
        },
        {
          "src": "manifest-icon-192.maskable.png",
          "sizes": "192x192",
          "type": "image/png",
          "purpose": "any"
        },
        {
          "src": "manifest-icon-512.maskable.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "maskable"
        },
      ],
      theme_color: '#171717',
      background_color: '#f0e7db',
      display: 'standalone',
      scope: '/',
      start_url: '/',
      orientation: 'portrait',
      share_target: {         // https://developer.mozilla.org/en-US/docs/Web/Manifest/share_target
        "action": "/saveBlogs",
        "method": "GET", 
        "params": {
          "text": "url",
        }
      }
  
    }
  };
  