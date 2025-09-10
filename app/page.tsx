'use client';

import { useState } from 'react';
import { useMiniKit } from '@coinbase/minikit';
import { AppShell } from '@/components/AppShell';
import { UserAvatar } from '@/components/UserAvatar';
import { SkillCard } from '@/components/SkillCard';
import { SkillCategoryGrid } from '@/components/SkillCategoryGrid';
import { Input } from '@/components/Input';
import { Button } from '@/components/Button';
import { Tag } from '@/components/Tag';
import { mockUser, mockSkillListings, skillCategories, suggestedSkills } from '@/lib/mock-data';
import { SkillListing, SkillCategory } from '@/lib/types';
import { Search, Plus } from 'lucide-react';

export default function HomePage() {
  const { context } = useMiniKit();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showListingForm, setShowListingForm] = useState(false);

  // Use context data for display hints, but mockUser for demo
  const displayUser = {
    ...mockUser,
    displayName: context?.user?.displayName || mockUser.displayName,
  };

  const filteredListings = mockSkillListings.filter(listing => {
    const matchesSearch = !searchQuery || 
      listing.skillName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      listing.skillDescription.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = !selectedCategory || listing.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleCategorySelect = (category: SkillCategory) => {
    setSelectedCategory(selectedCategory === category.id ? null : category.id);
  };

  const handleSkillSelect = (listing: SkillListing) => {
    // In a real app, this would navigate to a detail view or open a swap modal
    console.log('Selected skill:', listing);
  };

  if (showListingForm) {
    return (
      <AppShell>
        <div className="container py-6">
          <div className="flex items-center gap-4 mb-6">
            <button 
              onClick={() => setShowListingForm(false)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
            <h1 className="heading">List a Skill</h1>
          </div>

          <div className="space-y-6">
            <Input
              label="Skill Name"
              placeholder="e.g., Python Programming, UI/UX Design"
            />
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <SkillCategoryGrid 
                categories={skillCategories}
                onCategorySelect={handleCategorySelect}
              />
            </div>

            <Input
              label="Description"
              placeholder="Describe what you offer and what you're looking for in return"
              as="textarea"
              rows={4}
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Valuation Points
              </label>
              <Input
                type="number"
                placeholder="50"
                helperText="Estimated value in points (1 hour ≈ 25 points)"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => setShowListingForm(false)}
              >
                Cancel
              </Button>
              <Button className="flex-1">
                List Skill
              </Button>
            </div>
          </div>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell activeTab="home">
      <div className="container py-6 space-y-6">
        {/* User Profile Header */}
        <div className="text-center space-y-4">
          <UserAvatar user={displayUser} variant="large" />
          <div>
            <h1 className="heading">{displayUser.displayName}</h1>
            <h2 className="display text-xl">Skill Swap App</h2>
            <p className="caption">Use fair-based Skill Swaps to develop knowledge.</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <Input
            placeholder="Search for a service"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-12"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 bg-gray-900 text-white rounded-md">
            <Search size={16} />
          </button>
        </div>

        {/* Skill Categories */}
        <SkillCategoryGrid 
          categories={skillCategories}
          onCategorySelect={handleCategorySelect}
        />

        {/* Suggested Skills Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-900">Suggested Skills</h3>
            <UserAvatar user={displayUser} variant="small" />
          </div>
          <p className="caption">Here are the newest Swaps that encourage.</p>
          
          <div className="space-y-3">
            {filteredListings.slice(0, 2).map((listing) => (
              <SkillCard
                key={listing.listingId}
                listing={listing}
                variant="list"
                onSelect={handleSkillSelect}
              />
            ))}
          </div>
        </div>

        {/* Suggested Skills Tags */}
        <div className="space-y-3">
          <h4 className="font-medium text-gray-900">Popular Skills</h4>
          <div className="flex flex-wrap gap-2">
            {suggestedSkills.slice(0, 6).map((skill) => (
              <Tag key={skill} variant="skill">
                {skill}
              </Tag>
            ))}
          </div>
        </div>

        {/* Floating Action Button */}
        <button
          onClick={() => setShowListingForm(true)}
          className="fixed bottom-20 right-4 w-14 h-14 bg-accent text-white rounded-full shadow-lg flex items-center justify-center hover:bg-opacity-90 transition-all duration-200"
        >
          <Plus size={24} />
        </button>
      </div>
    </AppShell>
  );
}
