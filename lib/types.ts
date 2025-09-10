export interface User {
  userId: string;
  farcasterId: string;
  displayName: string;
  bio: string;
  skillsOffered: string[];
  skillsSeeking: string[];
  reputationScore: number;
  verificationStatus: 'verified' | 'pending' | 'unverified';
  createdAt: Date;
  avatar?: string;
}

export interface SkillListing {
  listingId: string;
  userId: string;
  skillName: string;
  skillDescription: string;
  type: 'offering' | 'seeking';
  valuationPoints: number;
  category: string;
  createdAt: Date;
  user?: User;
}

export interface Swap {
  swapId: string;
  offeringUserId: string;
  seekingUserId: string;
  offeredListingId: string;
  seekingListingId: string;
  status: 'pending' | 'accepted' | 'completed' | 'declined';
  createdAt: Date;
  completedAt?: Date;
  rating?: number;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
}
