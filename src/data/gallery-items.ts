export type GalleryItem = {
  photo: {
    id: string;
    blurHash: string;
  };
};

// Gallery metadata only.
// The screen generates fresh image URLs on each mount to avoid cache reuse.
export const galleryItems: GalleryItem[] = [
  {
    photo: {
      blurHash: "LSG[A,=xX5Mx%hf6RPn$0-xun4fk",
      id: "07770b62-106b-4c7f-bfd4-974bdbd32cf4",
    },
  },
  {
    photo: {
      blurHash: "LGFEG=;OxvJT2U%MaLs.S5ELX8I.",
      id: "5ecc4379-f707-4bab-8200-126176f597ea",
    },
  },
  {
    photo: {
      blurHash: "LBE-p{|f=NE*C4%Mr_$kENSOODW.",
      id: "16829cc8-28f2-4937-adc6-899dbd6bfa76",
    },
  },
  {
    photo: {
      blurHash: "LQE.|bM{01t600t7?bj[?bWBRjRj",
      id: "1789d9a2-744f-4bbd-9bcc-e9231f6502bf",
    },
  },
  {
    photo: {
      blurHash: "LDEVc^Dh--Rp0i$|MvNKIW%gD$%M",
      id: "5fc79212-f785-4372-9173-96c0a193c008",
    },
  },
  {
    photo: {
      blurHash: "LUI53t~p9%M{yF-;=^NG.8bdWBs.",
      id: "6352e519-ecaa-4142-bea9-48b6d7b1cda4",
    },
  },
];
