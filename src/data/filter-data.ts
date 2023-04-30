import { CategoryType } from "../types";

export const supportsFilter = [
  {
    label: "Supported",
    value: "supported",
  },
  {
    label: "Unsupported",
    value: "unsupported",
  },
];

export const categories: CategoryType[] = [
  {
    value: "fullAvatar",
    label: "Full Avatar",
    children: [
      {
        value: "human",
        label: "Human Based",
        children: [
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
          { value: "unisex", label: "Unisex" },
        ],
      },
      {
        value: "animal",
        label: "Animal & Mythical Based",
      },
      {
        value: "robot",
        label: "Robot Based",
      },
      {
        value: "otherAvatar",
        label: "Others",
      },
    ],
  },
  {
    value: "others",
    label: "Others",
  },
];

export const contentsFilter = [
  {
    label: "VRChat(Quest)",
    value: "Quest",
    color: "#75DE73",
  },
  {
    label: "VRChat(PCVR)",
    value: "PCVR",
    color: "#3CD4F5",
  },
  {
    label: "Others",
    value: "others",
  },
];

export const polygonRanges = [
  { label: "Under △7,500", value: "under_7500" },
  { label: "△7,500 to △10,000", value: "7500_to_10000" },
  { label: "△10,000 to △15,000", value: "10000_to_15000" },
  { label: "△15,000 to △20,000", value: "15000_to_20000" },
  { label: "△20,000 to △32,000", value: "20000_to_32000" },
  { label: "△32,000 to △70,000", value: "32000_to_70000" },
  { label: "△70,000 & Above", value: "70000_and_above" },
];

export const priceRanges = [
  { label: "Under $10", value: "under_10" },
  { label: "$10 to $20", value: "10_to_20" },
  { label: "$20 to $30", value: "20_to_30" },
  { label: "$30 to $40", value: "30_to_40" },
  { label: "$40 to $50", value: "40_to_50" },
  { label: "$50 to $70", value: "50_to_70" },
  { label: "$70 & above", value: "70_and_above" },
];
