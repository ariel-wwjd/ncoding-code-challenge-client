export const headerItems = [
  { id: 'AvailableCourses', label: 'Available Courses', onClick: () => {console.log('click')} },
  { id: 'ContinuingEducation', label: 'Continuing Education', onClick: () => {console.log('click')} },
  { id: 'MyCourses', label: 'My Courses', onClick: () => {console.log('click')} },
  { id: 'Community', label: 'Community', onClick: () => {console.log('click')} },
];

export const currentPageHeaderItem = {
  home: 'AvailableCourses',
  availableCourses: 'ContinuingEducation',
  myCourses: 'MyCourses',
};
