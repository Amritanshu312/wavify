export interface UserInfo {
  uid: string; // Unique identifier for the user
  name: string; // User's name
  email: string; // User's email address
  emailVerified: boolean; // Whether the user's email is verified
  createdAt: Date; // Account creation date
  banner?: string; // Optional banner URL or description
  description?: string; // Optional user description
  photo: string; // URL to the user's profile photo
  shortTitle?: string; // Optional short title for the user
  followers: number; // Number of followers
  following: number; // Number of accounts the user follows
  posts: number; // Number of posts by the user
  shares: number; // Number of shares by the user
}
