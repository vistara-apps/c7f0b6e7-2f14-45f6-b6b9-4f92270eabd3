import { SkillListing } from '@/lib/types';
import { UserAvatar } from './UserAvatar';
import { Clock, Star } from 'lucide-react';

interface SkillCardProps {
  listing: SkillListing;
  variant?: 'list' | 'detail';
  onSelect?: (listing: SkillListing) => void;
}

export function SkillCard({ listing, variant = 'list', onSelect }: SkillCardProps) {
  const handleClick = () => {
    if (onSelect) {
      onSelect(listing);
    }
  };

  if (variant === 'detail') {
    return (
      <div className="skill-card">
        <div className="flex items-start gap-3 mb-4">
          {listing.user && <UserAvatar user={listing.user} variant="medium" />}
          <div className="flex-1">
            <h3 className="heading text-lg">{listing.skillName}</h3>
            <p className="caption">{listing.user?.displayName}</p>
            <div className="flex items-center gap-2 mt-1">
              <Star size={14} className="text-yellow-500 fill-current" />
              <span className="caption">{listing.user?.reputationScore}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-green-600">
              {listing.valuationPoints} pts
            </div>
          </div>
        </div>
        <p className="body text-gray-700 mb-4">{listing.skillDescription}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-500">
            <Clock size={14} />
            <span className="caption">
              {new Date(listing.createdAt).toLocaleDateString()}
            </span>
          </div>
          <button 
            onClick={handleClick}
            className="btn-primary text-sm"
          >
            Propose Swap
          </button>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="skill-card cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex items-center gap-3">
        {listing.user && <UserAvatar user={listing.user} variant="small" />}
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-gray-900 truncate">{listing.skillName}</h4>
          <p className="caption truncate">{listing.user?.displayName}</p>
        </div>
        <div className="text-right">
          <div className="text-sm font-medium text-green-600">
            {listing.valuationPoints} pts
          </div>
          <div className="flex items-center gap-1">
            <Star size={12} className="text-yellow-500 fill-current" />
            <span className="text-xs text-gray-500">{listing.user?.reputationScore}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
