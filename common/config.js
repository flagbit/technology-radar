export const quadrants = [
  'languages-and-frameworks',
  'techniques',
  'platforms-and-services',
  'tools',
];

export function assetUrl(file) {
  return `/techradar/assets/${file}`
}

export const getPageNames = (radar) => {
  return [
    'index',
    'overview',
    'help-and-about-tech-radar',
    'toolbox',
    ...quadrants,
    ...getItemPageNames(radar.items),
  ]
}

export const getItemPageNames = (items) => items.map(item => `${item.quadrant}/${item.name}`);

export const rings = [
  'adopt',
  'trial',
  'assess',
  'hold'
];

const messages = {
  'languages-and-frameworks': 'Languages & Frameworks',
  'techniques': 'Techniques',
  'platforms-and-services': 'Platforms & Services',
  'tools': 'Tools',
};

export const translate = (key) => (messages[key] || '-');

export function isMobileViewport() {
    // return false for server side rendering
    if (typeof window == 'undefined') return false;

    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    return width < 1200;
}

const formatRelease = (release) => moment(release, 'YYYY-MM-DD').format('MMM YYYY');
