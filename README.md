# XXXTV API — Free Porn Video Metadata API & Embed Player

Free public Porn video metadata API and embed platform.

🌐 **Webmaster Documentation:**  
https://xxxtv.top/webmasters

## Features

- Free Porn API
- No API key required
- JSON responses
- Paginated video listings
- Video metadata
- Tags
- Models
- Channels
- Thumbnails
- Video previews
- Embed player URLs

## Base URL

https://xxxtv.top

## Endpoints

### Latest Videos

GET /api/videos/latest

### Single Video

GET /api/videos/{id}

## Latest Videos Parameters

| Parameter | Type | Default | Maximum |
|-----------|------|---------|---------|
| limit | integer | 20 | 50 |
| page | integer | 1 | — |

## Latest Videos Example

https://xxxtv.top/api/videos/latest?limit=20&page=1

## Response

```json
{
  "success": true,
  "page": 1,
  "limit": 20,
  "count": 20,
  "totalVideos": 1987,
  "totalPages": 100,

  "data": [
    {
      "id": "VmALfibyZX",
      "title": "Example video",
      "description": "Example description",
      "slug": "example-video",
      "duration": 482,
      "views": 1234,
      "createdAt": "2026-05-30 14:00:16",
      "thumbnail": "https://xxxtv.top/videos/VmALfibyZX/thumbnail.jpeg",
      "preview": "https://xxxtv.top/videos/VmALfibyZX/preview.mp4",
      "pageUrl": "https://xxxtv.top/video/VmALfibyZX/example-video",
      "embedUrl": "https://xxxtv.top/embed/VmALfibyZX"
    }
  ]
}
```

## Single Video Example

https://xxxtv.top/api/videos/FDouWc65Gw

## Response

```json
{
  "success": true,
  "data": {
    "id": "VmALfibyZX",
    "title": "Example video",
    "description": "Example description",
    "slug": "example-video",
    "duration": 482,
    "views": 1234,
    "createdAt": "2026-05-30 14:00:16",
    "thumbnail": "https://xxxtv.top/videos/VmALfibyZX/thumbnail.jpeg",
    "tags": [
      "example",
      "hd",
      "popular"
    ],
    "models": [
      "Example Model"
    ],
    "channel": "Example Channel",
    "pageUrl": "https://xxxtv.top/video/VmALfibyZX/example-video",
    "embedUrl": "https://xxxtv.top/embed/VmALfibyZX"
  }
}
```

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.
