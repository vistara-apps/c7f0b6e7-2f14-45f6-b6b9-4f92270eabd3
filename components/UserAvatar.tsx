import { User } from '@/lib/types';

interface UserAvatarProps {
  user: User;
  variant?: 'small' | 'medium' | 'large';
  showVerification?: boolean;
}

export function UserAvatar({ 
  user, 
  variant = 'medium', 
  showVerification = true 
}: UserAvatarProps) {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-20 h-20'
  };

  const badgeSize = {
    small: 'w-3 h-3',
    medium: 'w-4 h-4',
    large: 'w-6 h-6'
  };

  return (
    <div className="relative inline-block">
      <img
        src={user.avatar || `https://via.placeholder.com/100x100/4F46E5/FFFFFF?text=${user.displayName.charAt(0)}`}
        alt={user.displayName}
        className={`${sizeClasses[variant]} rounded-full object-cover border-2 border-white shadow-sm`}
      />
      {showVerification && user.verificationStatus === 'verified' && (
        <div className={`absolute -bottom-1 -right-1 ${badgeSize[variant]} bg-orange-500 rounded-full flex items-center justify-center`}>
          <svg 
            width="12" 
            height="12" 
            viewBox="0 0 24 24" 
            fill="white"
            className="w-2/3 h-2/3"
          >
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
      )}
    </div>
  );
}
