import { ScreenshotWithAnnotations } from './screenshot-with-annotations';
import { screenshotData } from '../data/screenshot-annotations';

const screenshots = {
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
  leaderboardScreenshot: '/screenshots/leaderboard-screenshot.png'
};

export function AllScreenshots() {
  return (
    <div className="space-y-16">
      {screenshotData.map((data, index) => (
        <ScreenshotWithAnnotations
          key={index}
          title={data.title}
          screenshotUrl={screenshots[data.screenshot as keyof typeof screenshots]}
          deviceType="mobile"
          annotations={data.annotations}
        />
      ))}
    </div>
  );
}
