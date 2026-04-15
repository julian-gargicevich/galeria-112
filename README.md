# Galeria Issue #112 Repro

Fresh Expo SDK 55 app for reproducing:

- issue: https://github.com/nandorojo/galeria/issues/112
- comment: https://github.com/nandorojo/galeria/issues/112#issuecomment-4248526036

The app uses the supplied remote photo items:

- thumbnails render with `expo-image`
- fullscreen viewer uses `@nandorojo/galeria@3.0.0`
- target behavior is the iOS freeze described in the issue

## Run

Galeria is a native module, so use a dev build instead of Expo Go.

```bash
bun install
npx expo run:ios
```

After the native build exists, you can also use:

```bash
npx expo start --dev-client
```

## Repro steps

1. Open the app on iOS.
2. Tap any thumbnail in the `Repro` tab.
3. Swipe horizontally through images before they finish loading.
4. Dismiss the viewer quickly.

## Data source

The fixture lives in `src/data/gallery-items.ts`.

The Supabase URLs are signed and expire. If the images stop loading, refresh the signed URLs and replace them in that file.
