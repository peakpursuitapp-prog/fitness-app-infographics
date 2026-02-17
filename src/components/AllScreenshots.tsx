import { ScreenshotWithAnnotations } from './ScreenshotWithAnnotations';
import { screenshotData } from '../data/annotations';

const screenshots = {
  homeScreenshot: '/screenshots/home.png',
  sideQuestsScreenshot: '/screenshots/side-quests.png',
  groupsScreenshot: '/screenshots/groups.png',
  pointsInputFitnessScreenshot: '/screenshots/points-input-fitness.png',
  editActivityHealthScreenshot: '/screenshots/edit-activity-health.png',
  pointsInputHealthScreenshot: '/screenshots/points-input-health.png',
  newSideQuestScreenshot: '/screenshots/new-side-quest.png',
  groupDetailsScreenshot: '/screenshots/group-details.png',
  editActivityBikeScreenshot: '/screenshots/edit-activity-bike.png',
  manageActivitiesScreenshot: '/screenshots/manage-activities.png',
  profileScreenshot: '/screenshots/profile.png',
  leaderboardScreenshot: '/screenshots/leaderboard.png'
};

export function AllScreenshots() {
  return (
    <div className="space-y-16">
      {screenshotData.map((data, index) => (
        <ScreenshotWithAnnotations
          key={index}
          title={data.title}
          screenshotUrl={screenshots[data.screenshot as keyof typeof screenshots]}
          annotations={data.annotations}
        />
      ))}
    </div>
  );
}
