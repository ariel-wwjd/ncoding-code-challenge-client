const headerItems = (navigate: (route: string) => void) => {
  return [
    {
      id: 'AvailableCourses',
      label: 'Available Courses',
      onClick: () => {
        navigate('/');
      },
    },
    {
      id: 'ContinuingEducation',
      label: 'Continuing Education',
      onClick: () => {
        console.log('click');
      },
    },
    {
      id: 'MyCourses',
      label: 'My Courses',
      onClick: () => {
        navigate('/my-courses');
      },
    },
    {
      id: 'Community',
      label: 'Community',
      onClick: () => {
        console.log('click');
      },
    },
  ];
};

const currentPageHeaderItem = {
  home: 'AvailableCourses',
  availableCourses: 'AvailableCourses',
  myCourses: 'MyCourses',
};

export { headerItems, currentPageHeaderItem };
