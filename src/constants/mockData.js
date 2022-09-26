import MaintenanceImg from "../assets/images/maintenance-icon.svg";

export const REASON_FOR_CLAIM = [
  { id: 1, label: "select", value: "" },
  { id: 2, label: "Hardware Issue", value: "hardware issue" },
  { id: 3, label: "Pre-existing defects", value: "pre-existing defects" },
  { id: 4, label: "Other", value: "other" },
];
export const DEVICE_TYPE = [
  { id: 1, label: "select", value: "" },
  { id: 2, label: "Mobile", value: "mobile" },
  { id: 3, label: "Laptop", value: "laptop" },
  { id: 4, label: "Ipad", value: "ipad" },
  { id: 5, label: "Other", value: "other" },
];

export const STILL_POSSESSION = [
  { label: "Yes, I have the device" },
  { label: "No, I do not have the device" },
];

export const DAMAGE_DEVICE = [
  { label: "Yes, device fully damaged" },
  { label: "No, device partially damaged" },
];

export const MAILING_ADDRESS = [
  { label: "Same as policy" },
  { label: "New Address" },
];

export const SERVICE_OPTIONS = [
  {
    id: 1,
    label: "Schedule a visit",
    imgSrc: MaintenanceImg,
    description:
      "Make an appointment at an Pocket Geek Authorized Service Provider",
    deductPrice: "$89.00",
  },
  {
    id: 2,
    label: "Send in for repair",
    imgSrc: MaintenanceImg,
    description:
      "A courier will pick up your product and deliver it to Pocket Geek",
    deductPrice: "$89.00",
  },
  {
    id: 3,
    label: "Contact us",
    imgSrc: MaintenanceImg,
    description: "Talk to an Pocket Geek Support Advisor",
    deductPrice: "$89.00",
  },
];
