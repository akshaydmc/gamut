// eslint-disable-next-line gamut/import-paths
import * as icons from '@codecademy/gamut-icons/src/icons/regular';
import { keys, omit, pick } from 'lodash';

export const ICONS = icons;

export const VENDOR_ICONS = pick(
  ICONS,
  [
    'InstagramIcon',
    'FacebookIcon',
    'GithubIcon',
    'GplusIcon',
    'LinkedinIcon',
    'TwitterIcon',
    'YoutubeIcon',
    'RedditIcon',
    'MediumIcon',
    'JavascriptIcon',
    'PythonIcon',
    'RailsIcon',
    'ReactIcon',
    'RubyIcon',
    'FaviconIcon',
    'FaviconSolidIcon',
    'JavaIcon',
    'AmexIcon',
    'MastercardIcon',
    'VisaIcon',
    'GithubOutlineIcon',
    'JiraIcon',
    'SlackIcon',
    'LinkedinOutlineIcon',
    'TwitterOutlineIcon',
  ].sort()
);

export const LE_ICONS = pick(
  ICONS,
  [
    'PortfolioProjectIcon',
    'ChecklistIcon',
    'PinIcon',
    'ChallengeProjectIcon',
    'CertificateFilledIcon',
    'InformationalIcon',
    'LessonIcon',
    'ProjectsIcon',
    'NarrativeIcon',
    'ObjectiveIcon',
    'OverviewIcon',
    'InstructionsIcon',
    'ResponsiveIcon',
    'LearnIcon',
    'ArticleIcon',
    'ForumsChatIcon',
    'EditorIcon',
    'QuizIcon',
    'StreakIcon',
    'FitnessDumbbellIcon',
    'TrophyIcon',
    'TrophyFilledIcon',
    'TerminalIcon',
    'CertificateIcon',
    'BadgeIcon',
    'PathIcon',
    'PathChangeIcon',
    'PathCompleteIcon',
    'BookClosedBookmarkIcon',
    'FileSearchIcon',
  ].sort()
);

export const UI_ICONS = omit(ICONS, keys({ ...LE_ICONS, ...VENDOR_ICONS }));
