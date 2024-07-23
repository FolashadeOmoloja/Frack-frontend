export type userObject = {
  firstName: string;
  lastName: string;
  profileImage: string | null; // Use '|' for union types
  phoneNumber: string;
  emailAddress: string;
  password: string;
  role: string;
  experienceYears: string;
  country: string;
  accountStatus: string;
  hex: string;
};
