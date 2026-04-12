import { imageMapCanada, imageMapAustralia, imageMapUK } from "@/assets";

const locationsData = [
  {
    id: 1,
    country: "Canada",
    image: imageMapCanada,
    officeName: "Designo Central Office",
    address: "3886 Wellington Street,\nToronto, Ontario M9C 3J5",
    phone: "+1 253-863-8967",
    email: "contact@designo.co",
  },
  {
    id: 2,
    country: "Australia",
    image: imageMapAustralia,
    officeName: "Designo AU Office",
    address: "19 Balonne Street,\nNew South Wales 2443",
    phone: "(02) 6720 9092",
    email: "contact@designo.au",
  },
  {
    id: 3,
    country: "United Kingdom",
    image: imageMapUK,
    officeName: "Designo UK Office",
    address: "13 Colorado Way,\nRhyd-y-fro SA8 9GA",
    phone: "078 3115 1400",
    email: "contact@designo.uk",
  },
];

export default locationsData;
