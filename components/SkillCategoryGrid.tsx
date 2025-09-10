import { SkillCategory } from '@/lib/types';

interface SkillCategoryGridProps {
  categories: SkillCategory[];
  onCategorySelect?: (category: SkillCategory) => void;
}

export function SkillCategoryGrid({ categories, onCategorySelect }: SkillCategoryGridProps) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategorySelect?.(category)}
          className={`${category.color} p-4 rounded-lg flex flex-col items-center gap-2 hover:opacity-80 transition-opacity duration-200`}
        >
          <span className="text-2xl">{category.icon}</span>
          <span className="text-xs font-medium text-gray-700 text-center">
            {category.name}
          </span>
        </button>
      ))}
    </div>
  );
}
