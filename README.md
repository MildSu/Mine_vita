# Mine Vita — PWA prototype

A mobile-first personal tracker prototype with five main tabs: Today, Habits, Food, Mood, Progress.

## Included now
- Installable PWA manifest + service worker
- Today dashboard
- 5 Frogs, including future-date planning and Sunday next-week prompt
- Habits with targets measured only in times (e.g. 2 times/day, 3 times/week)
- RColorBrewer Spectral-style habit colour palette
- Habit calendar and 31-day heatmap reports
- Food log with calories and daily protein/carbs/fat totals
- Camera/photo upload and manual meal logging
- Mood: exactly one mood per day, optional note, history, calendar, monthly distribution
- Progress overview, habit and nutrition summaries
- Local persistence with browser localStorage

## Not connected yet
- User accounts / admin dashboard
- Cloud database and multi-user privacy rules
- AI food recognition
- Nutrition source database and source citations
- Push reminders
- Production deployment

## Run locally
Because service workers require HTTP(S), serve the folder rather than double-clicking index.html.

Python example:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.
