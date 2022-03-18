export const USER = 'user';
export const TEAM = 'team';

export const MINUTES_SEC = 60;
export const HOUR_SEC = 3600;
export const DAY_SEC = 86400;
export const WEEK_SEC = 604800;
export const MONTH_SEC = 2629800;
export const YEAR_SEC = 31557600;

export function setDefaultProfileImage(img) {
  return (
    img ||
    'https://user-images.githubusercontent.com/71386219/157435570-a48382a8-63e5-4d25-91f4-e506289424b5.png'
  );
}
