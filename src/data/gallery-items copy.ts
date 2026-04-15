export type GalleryItem = {
  index: number;
  thumbUrl: string;
  viewerUrl: string;
  photo: {
    id: string;
    blurHash: string;
    createdAt: string;
    date: string;
    fileSize: number;
    height: number;
    pose: "front" | "side" | "back";
    storagePathFull: string;
    storagePathThumb: string;
    updatedAt: string;
    userId: string;
    width: number;
  };
};

// Signed Supabase URLs copied from the issue payload on 2026-04-15.
// Refresh them once they expire.
export const galleryItems: GalleryItem[] = [
  {
    index: 0,
    photo: {
      blurHash: "LSG[A,=xX5Mx%hf6RPn$0-xun4fk",
      createdAt: "2026-04-15T01:51:24.696000Z",
      date: "2026-04-15",
      fileSize: 378500,
      height: 1287,
      id: "07770b62-106b-4c7f-bfd4-974bdbd32cf4",
      pose: "back",
      storagePathFull:
        "a276c090-dd2e-450e-a3cb-090b09930960/1be4cd5a-54ac-42dd-953d-fb22a50ac469_full.jpg",
      storagePathThumb:
        "a276c090-dd2e-450e-a3cb-090b09930960/1be4cd5a-54ac-42dd-953d-fb22a50ac469_thumb.jpg",
      updatedAt: "2026-04-15T01:51:24.696000Z",
      userId: "a276c090-dd2e-450e-a3cb-090b09930960",
      width: 1286,
    },
    thumbUrl:
      "https://kwefzrombgxlpzwgzjkl.supabase.co/storage/v1/object/sign/body-progress-photos/a276c090-dd2e-450e-a3cb-090b09930960/1be4cd5a-54ac-42dd-953d-fb22a50ac469_thumb.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xYmUwYTg3Zi04NDRmLTRkOTYtOWEwMi0xMDViYjcxOGUxNDAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJib2R5LXByb2dyZXNzLXBob3Rvcy9hMjc2YzA5MC1kZDJlLTQ1MGUtYTNjYi0wOTBiMDk5MzA5NjAvMWJlNGNkNWEtNTRhYy00MmRkLTk1M2QtZmIyMmE1MGFjNDY5X3RodW1iLmpwZyIsImlhdCI6MTc3NjIxNzk3NiwiZXhwIjoxNzc2MjIxNTc2fQ.3uVIwFmOjwGaAS9hLlJpDPByeGTBnmWhg71WMiH90e4",
    viewerUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Fronalpstock_big.jpg",
  },
  {
    index: 1,
    photo: {
      blurHash: "LGFEG=;OxvJT2U%MaLs.S5ELX8I.",
      createdAt: "2026-04-15T01:51:07.493000Z",
      date: "2026-04-15",
      fileSize: 687442,
      height: 1288,
      id: "5ecc4379-f707-4bab-8200-126176f597ea",
      pose: "side",
      storagePathFull:
        "a276c090-dd2e-450e-a3cb-090b09930960/23f8fcff-a967-449a-82d7-e012ce5c7143_full.jpg",
      storagePathThumb:
        "a276c090-dd2e-450e-a3cb-090b09930960/23f8fcff-a967-449a-82d7-e012ce5c7143_thumb.jpg",
      updatedAt: "2026-04-15T01:51:07.493000Z",
      userId: "a276c090-dd2e-450e-a3cb-090b09930960",
      width: 1286,
    },
    thumbUrl:
      "https://kwefzrombgxlpzwgzjkl.supabase.co/storage/v1/object/sign/body-progress-photos/a276c090-dd2e-450e-a3cb-090b09930960/23f8fcff-a967-449a-82d7-e012ce5c7143_thumb.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xYmUwYTg3Zi04NDRmLTRkOTYtOWEwMi0xMDViYjcxOGUxNDAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJib2R5LXByb2dyZXNzLXBob3Rvcy9hMjc2YzA5MC1kZDJlLTQ1MGUtYTNjYi0wOTBiMDk5MzA5NjAvMjNmOGZjZmYtYTk2Ny00NDlhLTgyZDctZTAxMmNlNWM3MTQzX3RodW1iLmpwZyIsImlhdCI6MTc3NjIxNzk3NiwiZXhwIjoxNzc2MjIxNTc2fQ.hxWWF3gZCx2DM2PxQhdfdjNuC_fCIq066WxPhderZV4",
    viewerUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/dd/Big_%26_Small_Pumkins.JPG",
  },
  {
    index: 2,
    photo: {
      blurHash: "LBE-p{|f=NE*C4%Mr_$kENSOODW.",
      createdAt: "2026-04-15T01:50:56.841000Z",
      date: "2026-04-15",
      fileSize: 644308,
      height: 1288,
      id: "16829cc8-28f2-4937-adc6-899dbd6bfa76",
      pose: "front",
      storagePathFull:
        "a276c090-dd2e-450e-a3cb-090b09930960/0958d34b-97a8-4cfa-91a3-d5e6cbeca31f_full.jpg",
      storagePathThumb:
        "a276c090-dd2e-450e-a3cb-090b09930960/0958d34b-97a8-4cfa-91a3-d5e6cbeca31f_thumb.jpg",
      updatedAt: "2026-04-15T01:50:56.841000Z",
      userId: "a276c090-dd2e-450e-a3cb-090b09930960",
      width: 1286,
    },
    thumbUrl:
      "https://kwefzrombgxlpzwgzjkl.supabase.co/storage/v1/object/sign/body-progress-photos/a276c090-dd2e-450e-a3cb-090b09930960/0958d34b-97a8-4cfa-91a3-d5e6cbeca31f_thumb.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xYmUwYTg3Zi04NDRmLTRkOTYtOWEwMi0xMDViYjcxOGUxNDAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJib2R5LXByb2dyZXNzLXBob3Rvcy9hMjc2YzA5MC1kZDJlLTQ1MGUtYTNjYi0wOTBiMDk5MzA5NjAvMDk1OGQzNGItOTdhOC00Y2ZhLTkxYTMtZDVlNmNiZWNhMzFmX3RodW1iLmpwZyIsImlhdCI6MTc3NjIxNzk3NiwiZXhwIjoxNzc2MjIxNTc2fQ.odUaxxL3B-Ksx97qo4ixZ1w6bpE1vRo-c6IdawtnLpo",
    viewerUrl:
      "https://northabroad.com/wp-content/uploads/phuket-big-buddha-cover-PTHI5010.jpg",
  },
  {
    index: 3,
    photo: {
      blurHash: "LQE.|bM{01t600t7?bj[?bWBRjRj",
      createdAt: "2026-04-15T01:51:52.752000Z",
      date: "2026-04-14",
      fileSize: 245945,
      height: 1290,
      id: "1789d9a2-744f-4bbd-9bcc-e9231f6502bf",
      pose: "side",
      storagePathFull:
        "a276c090-dd2e-450e-a3cb-090b09930960/258c41a8-6cb3-419a-bf75-8f1f148c3687_full.jpg",
      storagePathThumb:
        "a276c090-dd2e-450e-a3cb-090b09930960/258c41a8-6cb3-419a-bf75-8f1f148c3687_thumb.jpg",
      updatedAt: "2026-04-15T01:51:52.752000Z",
      userId: "a276c090-dd2e-450e-a3cb-090b09930960",
      width: 1290,
    },
    thumbUrl:
      "https://kwefzrombgxlpzwgzjkl.supabase.co/storage/v1/object/sign/body-progress-photos/a276c090-dd2e-450e-a3cb-090b09930960/258c41a8-6cb3-419a-bf75-8f1f148c3687_thumb.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xYmUwYTg3Zi04NDRmLTRkOTYtOWEwMi0xMDViYjcxOGUxNDAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJib2R5LXByb2dyZXNzLXBob3Rvcy9hMjc2YzA5MC1kZDJlLTQ1MGUtYTNjYi0wOTBiMDk5MzA5NjAvMjU4YzQxYTgtNmNiMy00MTlhLWJmNzUtOGYxZjE0OGMzNjg3X3RodW1iLmpwZyIsImlhdCI6MTc3NjIxNzk3NywiZXhwIjoxNzc2MjIxNTc3fQ.CIAV1ZyKDs647Z1Pih5ZFBbR1yF_n0b4-dQP_SHu4Rw",
    viewerUrl:
      "https://kwefzrombgxlpzwgzjkl.supabase.co/storage/v1/object/sign/body-progress-photos/a276c090-dd2e-450e-a3cb-090b09930960/258c41a8-6cb3-419a-bf75-8f1f148c3687_full.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xYmUwYTg3Zi04NDRmLTRkOTYtOWEwMi0xMDViYjcxOGUxNDAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJib2R5LXByb2dyZXNzLXBob3Rvcy9hMjc2YzA5MC1kZDJlLTQ1MGUtYTNjYi0wOTBiMDk5MzA5NjAvMjU4YzQxYTgtNmNiMy00MTlhLWJmNzUtOGYxZjE0OGMzNjg3X2Z1bGwuanBnIiwiaWF0IjoxNzc2MjE3OTc3LCJleHAiOjE3NzYyMjE1Nzd9.Xahl_Q8tJkycaXLqkVGebAP4YpZXtqSis4s_bapqHP0",
  },
  {
    index: 4,
    photo: {
      blurHash: "LDEVc^Dh--Rp0i$|MvNKIW%gD$%M",
      createdAt: "2026-04-15T01:51:36.165000Z",
      date: "2026-04-14",
      fileSize: 436733,
      height: 1287,
      id: "5fc79212-f785-4372-9173-96c0a193c008",
      pose: "front",
      storagePathFull:
        "a276c090-dd2e-450e-a3cb-090b09930960/5bbbbd75-9d64-4aed-9e50-86cb5e1d493c_full.jpg",
      storagePathThumb:
        "a276c090-dd2e-450e-a3cb-090b09930960/5bbbbd75-9d64-4aed-9e50-86cb5e1d493c_thumb.jpg",
      updatedAt: "2026-04-15T01:51:36.165000Z",
      userId: "a276c090-dd2e-450e-a3cb-090b09930960",
      width: 1286,
    },
    thumbUrl:
      "https://kwefzrombgxlpzwgzjkl.supabase.co/storage/v1/object/sign/body-progress-photos/a276c090-dd2e-450e-a3cb-090b09930960/5bbbbd75-9d64-4aed-9e50-86cb5e1d493c_thumb.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xYmUwYTg3Zi04NDRmLTRkOTYtOWEwMi0xMDViYjcxOGUxNDAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJib2R5LXByb2dyZXNzLXBob3Rvcy9hMjc2YzA5MC1kZDJlLTQ1MGUtYTNjYi0wOTBiMDk5MzA5NjAvNWJiYmJkNzUtOWQ2NC00YWVkLTllNTAtODZjYjVlMWQ0OTNjX3RodW1iLmpwZyIsImlhdCI6MTc3NjIxNzk3NywiZXhwIjoxNzc2MjIxNTc3fQ.1nSpjJhG5p_ptJ_8FaQdSrf6diwM1nX4kpvx8w26Slw",
    viewerUrl:
      "https://ichef.bbci.co.uk/news/1536/cpsprodpb/5b78/live/3cca1af0-ead0-11ef-8116-3df6b7ec9fa4.jpg",
  },
  {
    index: 5,
    photo: {
      blurHash: "LUI53t~p9%M{yF-;=^NG.8bdWBs.",
      createdAt: "2026-04-15T01:52:07.188000Z",
      date: "2026-04-12",
      fileSize: 370981,
      height: 1290,
      id: "6352e519-ecaa-4142-bea9-48b6d7b1cda4",
      pose: "front",
      storagePathFull:
        "a276c090-dd2e-450e-a3cb-090b09930960/93d8fca8-5ade-49b6-8844-07a1f023ab61_full.jpg",
      storagePathThumb:
        "a276c090-dd2e-450e-a3cb-090b09930960/93d8fca8-5ade-49b6-8844-07a1f023ab61_thumb.jpg",
      updatedAt: "2026-04-15T01:52:07.188000Z",
      userId: "a276c090-dd2e-450e-a3cb-090b09930960",
      width: 1290,
    },
    thumbUrl:
      "https://kwefzrombgxlpzwgzjkl.supabase.co/storage/v1/object/sign/body-progress-photos/a276c090-dd2e-450e-a3cb-090b09930960/93d8fca8-5ade-49b6-8844-07a1f023ab61_thumb.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xYmUwYTg3Zi04NDRmLTRkOTYtOWEwMi0xMDViYjcxOGUxNDAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJib2R5LXByb2dyZXNzLXBob3Rvcy9hMjc2YzA5MC1kZDJlLTQ1MGUtYTNjYi0wOTBiMDk5MzA5NjAvOTNkOGZjYTgtNWFkZS00OWI2LTg4NDQtMDdhMWYwMjNhYjYxX3RodW1iLmpwZyIsImlhdCI6MTc3NjIxNzk3NywiZXhwIjoxNzc2MjIxNTc3fQ.P-MZWI8crSqcpgBRnEV8bzp3Gg0a7UMzam3obWbY7K0",
    viewerUrl:
      "https://ichef.bbci.co.uk/news/1536/cpsprodpb/6034/live/07d08d20-ead0-11ef-8116-3df6b7ec9fa4.jpg",
  },
];

export const viewerUrls = galleryItems.map((item) => item.viewerUrl);
