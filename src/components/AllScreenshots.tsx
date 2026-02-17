import { ScreenshotWithAnnotations } from './ScreenshotWithAnnotations'
import { screenshotData } from '../data/annotations'

const screenshots: Record<string, string> = {
  homeScreenshot: '/screenshots/home-screenshot.png',
  sideQuestsScreenshot: '/screenshots/side-quests-screenshot.png',
  groupsScreenshot: '/screenshots/groups-screenshot.png',
  pointsInputFitnessScreenshot: '/screenshots/points-input-fitness-screenshot.png',
  editActivityHealthScreenshot: '/screenshots/edit-activity-health-screenshot.png',
  pointsInputHealthScreenshot: '/screenshots/points-input-health-screenshot.png',
  newSideQuestScreenshot: '/screenshots/new-side-quest-screenshot.png',
  groupDetailsScreenshot: '/screenshots/group-details-screenshot.png',
  editActivityBikeScreenshot: '/screenshots/edit-activity-bike-screenshot.png',
  manageActivitiesScreenshot: '/screenshots/manage-activities-screenshot.png',
  profileScreenshot: '/screenshots/profile-screenshot.png',
  leaderboardScreenshot: '/screenshots/leaderboard-screenshot.png',
}

export function AllScreenshots() {
  return (
    <div className="flex flex-col gap-16">
      {screenshotData.map((data, index) => {
        const screenshotUrl = screenshots[data.screenshot]

        // Fail loudly in the UI if a key doesn't match, so you notice immediately.
        if (!screenshotUrl) {
          return (
            <div key={`${data.title}-${index}`} className="p-4 border rounded">
              <div className="font-semibold">Missing screenshot mapping</div>
              <div className="text-sm opacity-70">
                screenshot key: <code>{data.screenshot}</code>
              </div>
              <div className="text-sm opacity-70">
                title: <code>{data.title}</code>
              </div>
            </div>
          )
        }

        return (
          <ScreenshotWithAnnotations
            key={`${data.title}-${index}`}
            title={data.title}
            screenshotUrl={screenshotUrl}
            annotations={data.annotations}
          />
        )
      })}
    </div>
  )
}
