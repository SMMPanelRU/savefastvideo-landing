# SaveFastVideo

Бесплатный Telegram-бот для скачивания видео из социальных сетей.
Лендинг: **[save.smoservice.media](https://save.smoservice.media)**
Бот: **[@SaveFastVideoFreebot](https://t.me/SaveFastVideoFreebot)**

## Что умеет

- 📥 **Скачивание видео без водяных знаков**: Instagram (Reels, посты, карусели), TikTok, YouTube Shorts
- 🖼 **Карусели Instagram** — полным альбомом (видео + фото), а не одним файлом
- 🎙 **/transcript** — распознавание речи из видео (faster-whisper, локально, 40+ языков)
- 🔔 **/subscribe** — автоматическое получение новых видео с YouTube и VK-каналов
- 🎛 **Качество**: 1080p / 720p / 480p / только звук (MP3)
- 🆓 Бесплатно, без рекламы, без подписки

## Поддерживаемые платформы

| Платформа | Что скачивается |
|---|---|
| 🟣 Instagram | Reels, посты, карусели |
| ⚫ TikTok | Видео без watermark |
| 🔴 YouTube | Shorts + обычные (до 50 МБ) |
| ✖️ Twitter / X | Видео и фото |
| 🔵 VK | Видео и клипы (через VK API) |
| 🧡 Одноклассники | Видео из ОК |

## Как пользоваться

1. Откройте [@SaveFastVideoFreebot](https://t.me/SaveFastVideoFreebot) в Telegram.
2. Отправьте ссылку на видео (можно с `https://` и без).
3. Получите видео через несколько секунд.

Полная инструкция и FAQ — на [лендинге](https://save.smoservice.media).

## Стек этого репозитория

Этот репозиторий — публичный лендинг ([save.smoservice.media](https://save.smoservice.media)),
не код самого бота. Stack:

- **Astro 6** (статический SSG)
- **Tailwind CSS 4**
- **@astrojs/sitemap** — авто-генерация sitemap.xml
- schema.org структурированные данные (SoftwareApplication, FAQPage)

## Локальная разработка

```bash
npm install
npm run dev    # http://localhost:4321
npm run build  # → dist/
```

## Deploy

Auto-deploy через [Coolify](https://coolify.io) при push в `main`.

## Лицензия

MIT.
