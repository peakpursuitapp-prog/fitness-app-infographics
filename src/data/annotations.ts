export const screenshotData = [
  {
    title: 'Home Screen - MainTestGroup',
    screenshot: 'homeScreenshot',
    annotations: [
      {
        x: '20%',
        y: '18%',
        title: 'Competition Header',
        description: 'Shows your current Group competition with monthly points total. Track your standing against other members in real-time. Click the green button to view list of current Groups.',
        position: 'right' as const,
        color: 'bg-green-500'
      },
      {
        x: '15%',
        y: '30%',
        title: 'Fitness Tracking',
        description: 'Monitor your physical activity with cumulative points. The number 141 represents your total fitness points for the month. Tap to input points into your Fitness activities',
        position: 'right' as const,
        color: 'bg-orange-500'
      },
      {
        x: '50%',
        y: '30%',
        title: 'Health Metrics',
        description: 'Health activities includes sleep quality, nutrition, and wellness activities.',
        position: 'right' as const,
        color: 'bg-blue-400'
      },
      {
        x: '85%',
        y: '30%',
        title: 'Mind & Wellness',
        description: 'Your mental wellness is tracked with activities in meditation, mindfulness exercises, and stress management',
        position: 'left' as const,
        color: 'bg-gray-500'
      },
      {
        x: '50%',
        y: '58%',
        title: 'Progress Chart',
        description: 'Visualize cumulative points by member over time. Compare your progress with other group members in real time. Track your points throughout the month to see who\\'s leading.',
        position: 'right' as const,
        color: 'bg-purple-500'
      },
      {
        x: '70%',
        y: '83%',
        title: 'Activity Feed',
        description: 'Stay updated with real-time group activity. See when members hit milestones, encourage Group members and celebrate achievements together.',
        position: 'top' as const,
        color: 'bg-pink-500'
      }
    ]
  },
  {
    title: 'Side Quests - Challenge Tracking',
    screenshot: 'sideQuestsScreenshot',
    annotations: [
      {
        x: '75%',
        y: '10%',
        title: 'Add New Quest',
        description: 'Create custom challenges for yourself or your group. Set parameters like reps, distance, or time. Schedule quests or start them immediately.',
        position: 'left' as const,
        color: 'bg-blue-500'
      },
      {
        x: '30%',
        y: '18%',
        title: 'Quest Status Tabs',
        description: 'Toggle between Active, Completed, and Scheduled quests. Easily manage your ongoing challenges and review past achievements. Plan future activities with the scheduled view.',
        position: 'right' as const,
        color: 'bg-purple-500'
      },
      {
        x: '50%',
        y: '28%',
        title: 'Push Ups Challenge',
        description: 'Active quest tracking push-ups and reps from Feb 15 to Feb 22. Monitor your daily progress, log completed reps, and see how close you are to completing the challenge.',
        position: 'right' as const,
        color: 'bg-orange-500'
      },
      {
        x: '50%',
        y: '38%',
        title: 'Elevation Quest',
        description: 'Track elevation gains measured in feet. This quest runs from Feb 11 to Feb 18, challenging you to reach 5000 feet total. Perfect for hiking and stair climbing activities.',
        position: 'right' as const,
        color: 'bg-green-500'
      },
      {
        x: '50%',
        y: '48%',
        title: 'Bike Challenge',
        description: 'Distance-based quest measuring miles biked. Set to achieve 100 miles between Feb 11 and Feb 18. Log rides and track your progress toward the century mark.',
        position: 'right' as const,
        color: 'bg-blue-400'
      }
    ]
  },
  {
    title: 'Groups - Manage Your Communities',
    screenshot: 'groupsScreenshot',
    annotations: [
      {
        x: '50%',
        y: '14%',
        title: 'Your Groups Section',
        description: 'View all groups you\\'re part of with your role (Owner, Admin, or Member). Each group shows a Details button for quick access to settings and information.',
        position: 'right' as const,
        color: 'bg-blue-500'
      },
      {
        x: '55%',
        y: '47%',
        title: 'Active Group Indicator',
        description: 'The blue checkmark shows which group is currently selected. This is your active group where all points and activities are being tracked. Tap Details to switch groups.',
        position: 'right' as const,
        color: 'bg-green-500'
      },
      {
        x: '50%',
        y: '80%',
        title: 'Join New Groups',
        description: 'Paste a Group ID to send a join request to new communities. Great for joining friends, family groups, or workout communities. Wait for owner approval to start competing.',
        position: 'right' as const,
        color: 'bg-purple-500'
      },
      {
        x: '50%',
        y: '93%',
        title: 'Bottom Navigation',
        description: 'Quick access to Home, Points Input, Leaderboard, Side Quests, and Profile. The navigation persists across all screens for seamless app navigation.',
        position: 'top' as const,
        color: 'bg-gray-500'
      }
    ]
  },
  {
    title: 'Points Input - Log Fitness Activities',
    screenshot: 'pointsInputFitnessScreenshot',
    annotations: [
      {
        x: '50%',
        y: '17%',
        title: 'Category Tabs',
        description: 'Switch between Fitness, Health, and Mind categories to log different types of activities. Each category tracks different aspects of your wellness journey.',
        position: 'right' as const,
        color: 'bg-orange-500'
      },
      {
        x: '85%',
        y: '24%',
        title: 'Current & Goal Points',
        description: 'The left number shows your input: miles for biking, reps for pull ups, etc., while the blue number on the right shows your current points for this activity based on each activity\\'s ruleset',
        position: 'left' as const,
        color: 'bg-blue-500'
      },
      {
        x: '20%',
        y: '28%',
        title: 'Activity Info Icon',
        description: 'Tap the info icon to see detailed instructions and parameters for each activity. Learn about units per point, step increments, and how points are calculated.',
        position: 'right' as const,
        color: 'bg-purple-500'
      },
      {
        x: '50%',
        y: '50%',
        title: 'Activity List',
        description: 'Scroll through all available fitness activities: Bike, Run, Elevation, Swimming, Walk, Elliptical, Pull Ups, and Weight Training. Each shows units and current input values.',
        position: 'right' as const,
        color: 'bg-green-500'
      }
    ]
  },
  {
    title: 'Points Input - Health Habits',
    screenshot: 'pointsInputHealthScreenshot',
    annotations: [
      {
        x: '50%',
        y: '17%',
        title: 'Health Category',
        description: 'The Health tab focuses on daily habits and nutrition choices. Track water intake, dietary restrictions, and lifestyle choices that impact your overall wellness.',
        position: 'right' as const,
        color: 'bg-blue-400'
      },
      {
        x: '70%',
        y: '27%',
        title: 'Toggle & Points',
        description: 'Green toggles indicate completed habits. The blue number shows points earned when you complete the activity. Simple on/off tracking makes logging quick and easy.',
        position: 'left' as const,
        color: 'bg-green-500'
      },
      {
        x: '30%',
        y: '43%',
        title: 'Streak Indicators',
        description: 'The fire emoji with "4 days" shows your current streak for that habit. Maintain streaks to build consistency and earn bonus points for sustained healthy behaviors.',
        position: 'right' as const,
        color: 'bg-orange-500'
      },
      {
        x: '50%',
        y: '65%',
        title: 'Health Habits List',
        description: 'Track habits like water intake, limiting sugar/alcohol, avoiding takeout, gluten-free eating, meat-free days, avoiding nicotine, and limiting social media. Each has customizable point values.',
        position: 'right' as const,
        color: 'bg-purple-500'
      }
    ]
  },
  {
    title: 'Edit Activity - Checkbox Type',
    screenshot: 'editActivityHealthScreenshot',
    annotations: [
      {
        x: '50%',
        y: '23%',
        title: 'Activity Details',
        description: 'Customize the activity name, category (Fitness, Health, or Mind), and type (Checkbox, Scroll, or Slider). Set optional units for scroll-based activities.',
        position: 'right' as const,
        color: 'bg-blue-500'
      },
      {
        x: '70%',
        y: '48%',
        title: 'Active Status Toggle',
        description: 'Control whether this activity appears in your Points Input screen. Turn off seasonal or temporary activities without deleting them completely.',
        position: 'left' as const,
        color: 'bg-green-500'
      },
      {
        x: '50%',
        y: '61%',
        title: 'Helper Info Text',
        description: 'Add optional helper text that appears when users tap the info icon. Explain rules, tips, or motivation for completing this activity.',
        position: 'right' as const,
        color: 'bg-purple-500'
      },
      {
        x: '50%',
        y: '87%',
        title: 'Checkbox Parameters',
        description: 'Set initial value, streak increase per completion, days required for streak, and max points per day. Fine-tune how points and streaks work for this habit.',
        position: 'right' as const,
        color: 'bg-orange-500'
      }
    ]
  },
  {
    title: 'Edit Activity - Scroll Type',
    screenshot: 'editActivityBikeScreenshot',
    annotations: [
      {
        x: '50%',
        y: '25%',
        title: 'Scroll Activity Setup',
        description: 'Configure scroll-type activities for gradual input. Set the activity name (Bike), category (Fitness), and type (Scroll). Display the units (2.5 Miles) for user reference.',
        position: 'right' as const,
        color: 'bg-blue-500'
      },
      {
        x: '50%',
        y: '59%',
        title: 'Info Field',
        description: 'Add fun descriptions or motivation like "we like to bicycle" to make the activity more personal and engaging for your group members.',
        position: 'right' as const,
        color: 'bg-green-500'
      },
      {
        x: '50%',
        y: '84%',
        title: 'Scroll Parameters',
        description: 'Define how units convert to points (2.50 units per point), choose single/two wheel mode, and set integer step (1) and decimal step (0.10) for precise input control.',
        position: 'right' as const,
        color: 'bg-orange-500'
      }
    ]
  },
  {
    title: 'Create New Side Quest',
    screenshot: 'newSideQuestScreenshot',
    annotations: [
      {
        x: '50%',
        y: '27%',
        title: 'Quest Name & Type',
        description: 'Enter the quest name (Pull ups) and choose between Race to Target (first to finish wins) or Max Total (highest total wins). Different modes create different competition dynamics.',
        position: 'right' as const,
        color: 'bg-purple-500'
      },
      {
        x: '50%',
        y: '42%',
        title: 'Scoring Options',
        description: 'Choose how winners are determined: by Units (distance/reps), Points earned, or number of Completions. Customize the challenge type to match your group\\'s goals.',
        position: 'right' as const,
        color: 'bg-blue-500'
      },
      {
        x: '50%',
        y: '54%',
        title: 'Select Activity',
        description: 'Link the quest to an existing activity from your group. The quest will track that specific activity (Pull Ups with Reps unit) over the quest duration.',
        position: 'right' as const,
        color: 'bg-green-500'
      },
      {
        x: '50%',
        y: '73%',
        title: 'Schedule Quest',
        description: 'Set start and end dates (Feb 16 - Feb 23, 2026) and timezone (America/Denver). Schedule quests in advance or start them immediately for spontaneous challenges.',
        position: 'right' as const,
        color: 'bg-orange-500'
      },
      {
        x: '50%',
        y: '93%',
        title: 'Participant Selection',
        description: 'Choose whether all group members participate automatically or hand-pick selected participants. Perfect for creating sub-group challenges or team competitions.',
        position: 'top' as const,
        color: 'bg-pink-500'
      }
    ]
  },
  {
    title: 'Group Details - MainTestGroup',
    screenshot: 'groupDetailsScreenshot',
    annotations: [
      {
        x: '85%',
        y: '19%',
        title: 'Share Group',
        description: 'Tap the share button to send the Group ID to friends and family. They can use this ID to request to join your competition group.',
        position: 'left' as const,
        color: 'bg-blue-500'
      },
      {
        x: '50%',
        y: '22%',
        title: 'Group ID',
        description: 'Unique identifier for your group. Share this with people you want to invite. Keep it private if you want to control who joins.',
        position: 'right' as const,
        color: 'bg-purple-500'
      },
      {
        x: '85%',
        y: '30%',
        title: 'Manage Activities',
        description: 'Access the full activity management interface. Add new activities, edit existing ones, set point values, and customize what your group tracks.',
        position: 'left' as const,
        color: 'bg-green-500'
      },
      {
        x: '50%',
        y: '43%',
        title: 'View History',
        description: 'Review past competitions, monthly winners, and historical data. See how your group\\'s activity has evolved over time and celebrate past achievements.',
        position: 'right' as const,
        color: 'bg-orange-500'
      },
      {
        x: '50%',
        y: '68%',
        title: 'Members List',
        description: 'See all group members with their roles. drewwelker is the Owner, while butbka, dirtnasty, hcc.erin, and lor.welker are Members. Tap the menu to manage permissions or remove members.',
        position: 'right' as const,
        color: 'bg-pink-500'
      }
    ]
  },
  {
    title: 'Manage Group Activities',
    screenshot: 'manageActivitiesScreenshot',
    annotations: [
      {
        x: '85%',
        y: '10%',
        title: 'Add New Activity',
        description: 'Create custom activities tailored to your group. Add unique fitness challenges, health habits, or mind activities that match your community\\'s wellness goals.',
        position: 'left' as const,
        color: 'bg-blue-500'
      },
      {
        x: '85%',
        y: '20%',
        title: 'Show Inactive Toggle',
        description: 'Enable this toggle to view seasonal or archived activities. Keep your active list clean while preserving historical activities for future use.',
        position: 'left' as const,
        color: 'bg-purple-500'
      },
      {
        x: '50%',
        y: '28%',
        title: 'Fitness Category',
        description: 'All fitness activities are grouped together. Each shows its parameters: units per point, units, integer/decimal steps, and wheel type for easy reference.',
        position: 'right' as const,
        color: 'bg-orange-500'
      },
      {
        x: '85%',
        y: '50%',
        title: 'Activity Menu',
        description: 'Tap the three-line menu icon to edit activity details, change parameters, or deactivate activities. Drag to reorder how activities appear in the Points Input screen.',
        position: 'left' as const,
        color: 'bg-green-500'
      },
      {
        x: '50%',
        y: '93%',
        title: 'Recompute Points',
        description: 'After changing activity parameters, use this button to recalculate all member points for the month. Ensures fair scoring when rules change mid-competition.',
        position: 'top' as const,
        color: 'bg-red-500'
      }
    ]
  },
  {
    title: 'User Profile',
    screenshot: 'profileScreenshot',
    annotations: [
      {
        x: '85%',
        y: '8%',
        title: 'Settings',
        description: 'Access app settings, notification preferences, privacy controls, and account management. Configure your app experience and manage connected devices.',
        position: 'left' as const,
        color: 'bg-gray-500'
      },
      {
        x: '30%',
        y: '22%',
        title: 'Profile Photo',
        description: 'Your profile picture appears throughout the app - on leaderboards, in groups, and activity feeds. Tap the camera icon to update your photo.',
        position: 'right' as const,
        color: 'bg-blue-500'
      },
      {
        x: '85%',
        y: '56%',
        title: 'Change Username',
        description: 'Your unique username (@drewwelker) is public and must be unique across the app. Used for mentions, leaderboards, and group displays.',
        position: 'left' as const,
        color: 'bg-purple-500'
      },
      {
        x: '50%',
        y: '70%',
        title: 'Manage Groups',
        description: 'Quick access to view all your groups, switch between them, create new groups, or join existing ones. Your central hub for community management.',
        position: 'right' as const,
        color: 'bg-orange-500'
      },
      {
        x: '50%',
        y: '82%',
        title: 'About Me Section',
        description: 'Add or update your bio and personal details. Share your fitness goals, interests, or motivational quotes with your group members.',
        position: 'right' as const,
        color: 'bg-pink-500'
      }
    ]
  },
  {
    title: 'Leaderboard - Competition Rankings',
    screenshot: 'leaderboardScreenshot',
    annotations: [
      {
        x: '50%',
        y: '25%',
        title: 'Podium View',
        description: 'Visual representation of the top 3 competitors with profile pictures and total points. Gold, silver, and bronze medals celebrate the top performers. drewwelker leads with 245 points!',
        position: 'right' as const,
        color: 'bg-yellow-500'
      },
      {
        x: '30%',
        y: '25%',
        title: 'Second Place',
        description: 'dirtnasty holds second place with 36 points, earning the silver medal. Tap their profile to see their activity breakdown and recent achievements.',
        position: 'right' as const,
        color: 'bg-gray-400'
      },
      {
        x: '70%',
        y: '25%',
        title: 'Third Place',
        description: 'semaas20 rounds out the podium with 16 points and the bronze medal. The visual podium makes competition standings instantly clear and motivating.',
        position: 'left' as const,
        color: 'bg-orange-600'
      },
      {
        x: '50%',
        y: '54%',
        title: 'Full Rankings List',
        description: 'Complete leaderboard showing all group members ranked by total points. Tap any member to view their detailed stats, activity history, and contributions by category.',
        position: 'right' as const,
        color: 'bg-blue-500'
      },
      {
        x: '85%',
        y: '54%',
        title: 'View Details',
        description: 'Tap the arrow to see a detailed breakdown of that member\\'s points by category (Fitness, Health, Mind) and view their recent activities and achievements.',
        position: 'left' as const,
        color: 'bg-purple-500'
      }
    ]
  }
];
