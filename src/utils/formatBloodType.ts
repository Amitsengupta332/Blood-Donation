export const formatBloodType = (bloodType: string) => {
  switch (bloodType) {
    case "O_POSITIVE":
      return "O+";
    case "O_NEGATIVE":
      return "O-";
    case "A_POSITIVE":
      return "A+";
    case "A_NEGATIVE":
      return "A-";
    case "B_POSITIVE":
      return "B+";
    case "B_NEGATIVE":
      return "B-";
    case "AB_POSITIVE":
      return "AB+";
    case "AB_NEGATIVE":
      return "AB-";
    default:
      return bloodType;
  }
};
