import { useState } from 'react'

// REPLACE THIS with your actual screenshot URLs after deployment
const SCREENSHOT_URL = 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=800&fit=crop&q=80'

const screenshotData = [
  {
    title: 'Home Screen - MainTestGroup',
    annotations: [
      { x: '20%', y: '18%', title: 'Competition Header', description: 'Shows your current Group competition with monthly points total. Track your standing against other members in real-time.', position: 'right' as const, color: 'bg-green-500' },
      { x: '15%', y: '30%', title: 'Fitness Tracking', description: 'Monitor your physical activity with cumulative points. Tap to input points into your Fitness activities.', position: 'right' as const, color: 'bg-orange-500' },
      { x: '50%', y: '30%', title: 'Health Metrics', description: 'Health activities includes sleep quality, nutrition, and wellness activities.', position: 'right' as const, color: 'bg-blue-400' },
      { x: '85%', y: '30%', title: 'Mind & Wellness', description: 'Mental wellness tracked with meditation, mindfulness exercises, and stress management.', position: 'left' as const, color: 'bg-gray-500' },
      { x: '50%', y: '58%', title: 'Progress Chart', description: 'Visualize cumulative points by member over time. Compare progress with other group members in real time.', position: 'right' as const, color: 'bg-purple-500' },
      { x: '70%', y: '83%', title: 'Activity Feed', description: 'Stay updated with real-time group activity. See when members hit milestones and celebrate achievements.', position: 'top' as const, color: 'bg-pink-500' }
    ]
  },
  {
    title: 'Side Quests - Challenge Tracking',
    annotations: [
      { x: '75%', y: '10%', title: 'Add New Quest', description: 'Create custom challenges for yourself or your group. Set parameters like reps, distance, or time.', position: 'left' as const, color: 'bg-blue-500' },
      { x: '30%', y: '18%', title: 'Quest Status Tabs', description: 'Toggle between Active, Completed, and Scheduled quests. Manage ongoing challenges easily.', position: 'right' as const, color: 'bg-purple-500' },
      { x: '50%', y: '28%', title: 'Push Ups Challenge', description: 'Active quest tracking push-ups from Feb 15 to Feb 22. Monitor daily progress toward completion.', position: 'right' as const, color: 'bg-orange-500' },
      { x: '50%', y: '38%', title: 'Elevation Quest', description: 'Track elevation gains in feet. Challenge runs from Feb 11 to Feb 18, goal of 5000 feet.', position: 'right' as const, color: 'bg-green-500' }
    ]
  },
  {
    title: 'Groups - Manage Your Communities',
    annotations: [
      { x: '50%', y: '14%', title: 'Your Groups Section', description: 'View all groups with your role (Owner, Admin, or Member). Quick access to settings and information.', position: 'right' as const, color: 'bg-blue-500' },
      { x: '55%', y: '47%', title: 'Active Group Indicator', description: 'Blue checkmark shows which group is currently selected for tracking points and activities.', position: 'right' as const, color: 'bg-green-500' },
      { x: '50%', y: '80%', title: 'Join New Groups', description: 'Paste a Group ID to send join request to new communities. Great for joining friends and family groups.', position: 'right' as const, color: 'bg-purple-500' }
    ]
  },
  {
    title: 'Points Input - Log Fitness Activities',
    annotations: [
      { x: '50%', y: '17%', title: 'Category Tabs', description: 'Switch between Fitness, Health, and Mind categories to log different types of activities.', position: 'right' as const, color: 'bg-orange-500' },
      { x: '85%', y: '24%', title: 'Current & Goal Points', description: 'Left number shows your input, blue number shows current points based on activity ruleset.', position: 'left' as const, color: 'bg-blue-500' },
      { x: '20%', y: '28%', title: 'Activity Info Icon', description: 'Tap to see detailed instructions and how points are calculated for each activity.', position: 'right' as const, color: 'bg-purple-500' }
    ]
  },
  {
    title: 'Leaderboard - Competition Rankings',
    annotations: [
      { x: '50%', y: '25%', title: 'Podium View', description: 'Visual representation of top 3 competitors with profile pictures and total points. Gold, silver, bronze medals!', position: 'right' as const, color: 'bg-yellow-500' },
      { x: '30%', y: '25%', title: 'Second Place', description: 'Silver medal holder with points. Tap profile to see activity breakdown and recent achievements.', position: 'right' as const, color: 'bg-gray-400' },
      { x: '70%', y: '25%', title: 'Third Place', description: 'Bronze medal rounds out the podium. Visual podium makes standings instantly clear and motivating.', position: 'left' as const, color: 'bg-orange-600' },
      { x: '50%', y: '54%', title: 'Full Rankings List', description: 'Complete leaderboard showing all group members ranked by total points. Tap for detailed stats.', position: 'right' as const, color: 'bg-blue-500' }
    ]
  }
]

function Screenshot({ title, annotations }: { title: string, annotations: any[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <div className="flex flex-col items-center w-full mb-16">
      <h3 className="text-2xl font-semibold mb-8">{title}</h3>
      
      <div className="relative inline-block">
        <div className="w-[340px] rounded-[3rem] border-[14px] border-gray-900 bg-gray-900 overflow-hidden shadow-2xl">
          <div className="bg-gray-900 h-8 flex items-center justify-center relative">
            <div className="w-32 h-6 bg-black rounded-b-2xl absolute top-0"></div>
          </div>
          
          <div className="bg-white">
            <img src={SCREENSHOT_URL} alt={title} className="w-full h-auto" />
          </div>
          
          <div className="bg-gray-900 h-8 flex items-center justify-center">
            <div className="w-32 h-1 bg-gray-700 rounded-full"></div>
          </div>
        </div>
        
        {annotations.map((annotation, index) => (
          <div
            key={index}
            className="absolute"
            style={{ left: annotation.x, top: annotation.y, zIndex: activeIndex === index ? 20 : 10 }}
          >
            <button
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className={`w-6 h-6 ${annotation.color} rounded-full border-2 border-white shadow-lg relative cursor-pointer hover:scale-125 transition-transform ${activeIndex === index ? 'ring-4 ring-blue-300/50' : ''}`}
            >
              {activeIndex !== index && (
                <div className={`absolute inset-0 ${annotation.color} rounded-full animate-ping opacity-50`}></div>
              )}
            </button>
            
            {activeIndex === index && (
              <div
                className={`absolute bg-white rounded-xl shadow-2xl border border-gray-200 p-4 min-w-[240px] max-w-[280px] z-50 ${
                  annotation.position === 'left' ? 'right-16 -translate-y-1/2 top-1/2' :
                  annotation.position === 'right' ? 'left-16 -translate-y-1/2 top-1/2' :
                  annotation.position === 'top' ? 'bottom-8 left-1/2 -translate-x-1/2' :
                  'top-8 left-1/2 -translate-x-1/2'
                }`}
              >
                <button
                  onClick={(e) => { e.stopPropagation(); setActiveIndex(null) }}
                  className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 text-xs font-bold"
                >
                  ✕
                </button>

                <div className={`w-1 h-full absolute left-0 top-0 rounded-l-xl ${annotation.color}`}></div>
                <div className="pl-3 pr-4">
                  <h4 className="font-semibold text-sm mb-2">{annotation.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{annotation.description}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Fitness App Features</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Interactive visual guide to our group fitness competition platform
          </p>
          <div className="mt-8 bg-blue-500/30 backdrop-blur-sm rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-sm text-blue-50">
              💡 Click on any colored dot to explore detailed feature explanations!
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {screenshotData.map((screen, i) => (
          <Screenshot key={i} title={screen.title} annotations={screen.annotations} />
        ))}
      </div>

      <div className="bg-gray-900 text-gray-400 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm">© 2026 Fitness App Platform. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
