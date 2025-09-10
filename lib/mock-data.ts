import { User, SkillListing, SkillCategory } from './types';

export const mockUser: User = {
  userId: '1',
  farcasterId: 'jamie.eth',
  displayName: 'Jamie Mia 1340',
  bio: 'Full-stack developer passionate about Web3 and design',
  skillsOffered: ['React Development', 'UI/UX Design', 'Smart Contracts'],
  skillsSeeking: ['Photography', 'Content Writing', 'Marketing'],
  reputationScore: 4.8,
  verificationStatus: 'verified',
  createdAt: new Date('2024-01-15'),
  avatar: 'https://via.placeholder.com/100x100/4F46E5/FFFFFF?text=JM'
};

export const skillCategories: SkillCategory[] = [
  { id: 'tutoring', name: 'Tutoring', icon: '📚', color: 'bg-blue-100' },
  { id: 'photography', name: 'Photography', icon: '📸', color: 'bg-purple-100' },
  { id: 'coding', name: 'Coding', icon: '💻', color: 'bg-green-100' },
  { id: 'cooking', name: 'Cooking', icon: '🍳', color: 'bg-orange-100' },
];

export const mockSkillListings: SkillListing[] = [
  {
    listingId: '1',
    userId: '2',
    skillName: 'Python Tutoring',
    skillDescription: 'Beginner to intermediate Python programming lessons',
    type: 'offering',
    valuationPoints: 50,
    category: 'tutoring',
    createdAt: new Date('2024-01-20'),
    user: {
      userId: '2',
      farcasterId: 'alex.dev',
      displayName: 'Alex Chen',
      bio: 'Python developer with 5 years experience',
      skillsOffered: ['Python', 'Data Science'],
      skillsSeeking: ['UI/UX Design'],
      reputationScore: 4.9,
      verificationStatus: 'verified',
      createdAt: new Date('2024-01-10'),
      avatar: 'https://via.placeholder.com/100x100/10B981/FFFFFF?text=AC'
    }
  },
  {
    listingId: '2',
    userId: '3',
    skillName: 'UI/UX Design',
    skillDescription: 'Modern web and mobile app design consultation',
    type: 'offering',
    valuationPoints: 75,
    category: 'coding',
    createdAt: new Date('2024-01-18'),
    user: {
      userId: '3',
      farcasterId: 'sarah.design',
      displayName: 'Sarah Kim',
      bio: 'Senior UX Designer at tech startup',
      skillsOffered: ['UI/UX Design', 'Figma'],
      skillsSeeking: ['Photography'],
      reputationScore: 4.7,
      verificationStatus: 'verified',
      createdAt: new Date('2024-01-05'),
      avatar: 'https://via.placeholder.com/100x100/F59E0B/FFFFFF?text=SK'
    }
  },
  {
    listingId: '3',
    userId: '4',
    skillName: 'Portrait Photography',
    skillDescription: 'Professional headshots and portrait sessions',
    type: 'offering',
    valuationPoints: 60,
    category: 'photography',
    createdAt: new Date('2024-01-22'),
    user: {
      userId: '4',
      farcasterId: 'mike.photo',
      displayName: 'Mike Rodriguez',
      bio: 'Professional photographer specializing in portraits',
      skillsOffered: ['Photography', 'Photo Editing'],
      skillsSeeking: ['Web Development'],
      reputationScore: 4.6,
      verificationStatus: 'verified',
      createdAt: new Date('2024-01-12'),
      avatar: 'https://via.placeholder.com/100x100/EF4444/FFFFFF?text=MR'
    }
  }
];

export const suggestedSkills = [
  'React Development',
  'Python Programming',
  'UI/UX Design',
  'Photography',
  'Content Writing',
  'Digital Marketing',
  'Graphic Design',
  'Data Analysis',
  'Video Editing',
  'Language Tutoring'
];
