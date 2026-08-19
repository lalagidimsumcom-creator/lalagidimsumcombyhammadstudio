export interface MomentItem {
  id: string;
  title: string;
  category: string;
  image: string;
  spanClass: string;
}

export const MOMENTS_GALLERY: MomentItem[] = [
  {
    id: "m1",
    title: "Birthday Celebration Surprise",
    category: "Birthday Moment 🎂",
    image: "/images/lalagi-dimsum-cake.jpg",
    spanClass: "col-span-1 md:col-span-2 row-span-2"
  },
  {
    id: "m2",
    title: "Dimsum Tampah 100 Pcs",
    category: "Gathering Feast ✨",
    image: "/images/lalagi-dimsum-tampah.jpg",
    spanClass: "col-span-1 md:col-span-1 row-span-1"
  },
  {
    id: "m3",
    title: "Dimsum Mentai Torched",
    category: "Signature Dish 🔥",
    image: "/images/lalagi-dimsum-mentai.jpg",
    spanClass: "col-span-1 md:col-span-1 row-span-1"
  },
  {
    id: "m4",
    title: "Graduation & Anniversary Tower",
    category: "Anniversary 🎓",
    image: "/images/lalagi-dimsum-tower.jpg",
    spanClass: "col-span-1 md:col-span-1 row-span-2"
  },
  {
    id: "m5",
    title: "Family & Office Gathering Table",
    category: "Office & Family Event 🥟",
    image: "/images/lalagi-dimsum-event.jpg",
    spanClass: "col-span-1 md:col-span-2 row-span-1"
  },
  {
    id: "m6",
    title: "Special Moment Gift Hampers",
    category: "Gift Hampers 🎁",
    image: "/images/lalagi-dimsum-hampers.jpg",
    spanClass: "col-span-1 md:col-span-1 row-span-1"
  }
];
