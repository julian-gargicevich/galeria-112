import { Galeria } from "@nandorojo/galeria";
import { Image } from "expo-image";
import React, { useState } from "react";
import { FlatList, StyleSheet, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Spacing } from "@/constants/theme";
import { galleryItems } from "@/data/gallery-items";
import { useTheme } from "@/hooks/use-theme";

const NUM_COLUMNS = 3;
const GRID_GAP = Spacing.two;
const SCREEN_PADDING = Spacing.three;
const THUMB_RADIUS = 14;
const THUMB_SIZE = 360;
const VIEWER_WIDTH = 2400;
const VIEWER_HEIGHT = 1600;

type GalleryRenderItem = (typeof galleryItems)[number] & {
  thumbUrl: string;
  viewerUrl: string;
};

const buildRandomImageUrl = (seed: string, width: number, height: number) =>
  `https://picsum.photos/seed/${seed}/${width}/${height}`;

export default function HomeScreen() {
  const theme = useTheme();
  const { width } = useWindowDimensions();
  const [viewerIndex, setViewerIndex] = useState<number | null>(null);
  const [items] = useState<GalleryRenderItem[]>(() => {
    const mountKey = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

    return galleryItems.map((item, index) => {
      const seed = `${mountKey}-${index}-${item.photo.id}`;

      return {
        ...item,
        thumbUrl: buildRandomImageUrl(seed, THUMB_SIZE, THUMB_SIZE),
        viewerUrl: buildRandomImageUrl(seed, VIEWER_WIDTH, VIEWER_HEIGHT),
      };
    });
  });
  const viewerUrls = items.map((item) => item.viewerUrl);

  const thumbnailSize = Math.floor(
    (width - SCREEN_PADDING * 2 - GRID_GAP * (NUM_COLUMNS - 1)) / NUM_COLUMNS,
  );

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: theme.background }]}
    >
      <Galeria urls={viewerUrls}>
        <FlatList
          data={items}
          numColumns={3}
          keyExtractor={(item) => item.photo.id}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={styles.columnWrapper}
          contentContainerStyle={styles.listContent}
          ListHeaderComponent={
            <ThemedView style={styles.header}>
              <ThemedText type="title">Galeria issue #112 repro</ThemedText>
            </ThemedView>
          }
          renderItem={({ item, index }) => (
            <Galeria.Image index={index}>
              <Image
                source={item.thumbUrl}
                placeholder={item.photo.blurHash}
                contentFit="cover"
                cachePolicy="memory-disk"
                recyclingKey={item.photo.id}
                transition={150}
                style={[
                  styles.thumbnail,
                  {
                    width: thumbnailSize,
                    height: thumbnailSize,
                  },
                ]}
              />
            </Galeria.Image>
          )}
        />
      </Galeria>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: SCREEN_PADDING,
    paddingTop: Spacing.two,
    paddingBottom: Spacing.six,
    gap: GRID_GAP,
  },
  header: {
    gap: Spacing.three,
    paddingBottom: Spacing.three,
  },
  description: {
    lineHeight: 22,
  },
  callout: {
    gap: Spacing.one,
    padding: Spacing.three,
    borderRadius: Spacing.three,
  },
  metaRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: Spacing.two,
  },
  badge: {
    borderRadius: 999,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.one,
  },
  columnWrapper: {
    gap: GRID_GAP,
  },
  card: {
    gap: Spacing.one,
  },
  thumbnail: {
    borderRadius: THUMB_RADIUS,
    backgroundColor: "#D7D7D7",
  },
  cardTitle: {
    marginTop: Spacing.one,
    textTransform: "capitalize",
  },
});
