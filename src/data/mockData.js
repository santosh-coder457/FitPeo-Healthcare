// src/data/mockData.js

export const navLinks = [
  { id: 'dashboard', text: 'Dashboard', icon: '🏠' }, // Use actual icons later
  { id: 'history', text: 'History', icon: '📚' },
  { id: 'calendar', text: 'Calendar', icon: '📅' },
  { id: 'appointments', text: 'Appointments', icon: '📝' },
  { id: 'statistics', text: 'Statistics', icon: '📊' },
  { id: 'tests', text: 'Tests', icon: '🔬' },
  { id: 'chat', text: 'Chat', icon: '💬' },
  { id: 'support', text: 'Support', icon: '❓' },
  { id: 'setting', text: 'Setting', icon: '⚙️' },
];

export const anatomicalData = [
  { id: 'heart', label: 'Healthy Heart', status: 'healthy', position: { top: '35%', left: '50%' } },
  { id: 'lungs', label: 'Lungs', status: 'issue', position: { top: '25%', left: '70%' } },
  { id: 'leg', label: 'Healthy Leg', status: 'healthy', position: { top: '70%', left: '45%' } },
  // Add positions for teeth, bone if you want specific indicators on the body
];

export const healthStatusCards = [
  {
    id: 'lungs',
    title: 'Lungs',
    date: '26 Oct 2021',
    status: 'issue', // 'healthy', 'issue', 'warning'
    icon: '/src/assets/lungs-icon.svg' // Placeholder icon
  },
  {
    id: 'teeth',
    title: 'Teeth',
    date: '26 Oct 2021',
    status: 'healthy',
    icon: '/src/assets/teeth-icon.svg' // Placeholder icon
  },
  {
    id: 'bone',
    title: 'Bone',
    date: '26 Oct 2021',
    status: 'warning',
    icon: '/src/assets/bone-icon.svg' // Placeholder icon
  },
];

export const calendarAppointments = {
  '25': ['10:00', '12:00'],
  '26': ['08:00', '10:00', '12:00'],
  '27': ['09:00', '13:00'],
  '28': ['11:00', '15:00'],
  '29': ['10:00', '16:00'],
  '30': ['09:00', '12:00'],
  '31': ['11:00'],
};

export const currentAppointmentDetails = [
  {
    id: 'dentist',
    type: 'Dentist',
    time: '09:00 - 11:00',
    doctor: 'Dr. Cameron Williamson',
    icon: '🦷'
  },
  {
    id: 'physiotherapy',
    type: 'Physiotherapy Appointment',
    time: '11:00 - 12:00',
    doctor: 'Dr. Kevin Djones',
    icon: '🚶'
  },
];

export const upcomingSchedule = [
  {
    day: 'On Thursday',
    appointments: [
      { id: 'hc1', title: 'Health checkup complete', time: '11:00 AM', icon: '✅' },
      { id: 'op1', title: 'Ophthalmologist', time: '14:00 PM', icon: '👁️' },
    ]
  },
  {
    day: 'On Saturday',
    appointments: [
      { id: 'card1', title: 'Cardiologist', time: '12:00 AM', icon: '❤️' },
      { id: 'neuro1', title: 'Neurologist', time: '16:00 PM', icon: '🧠' },
    ]
  },
];

// Activity feed data (conceptual, for bar chart visualization)
export const activityData = [
  { day: 'Mon', value: 3 },
  { day: 'Tues', value: 5 },
  { day: 'Wed', value: 2 },
  { day: 'Thurs', value: 7 },
  { day: 'Fri', value: 4 },
  { day: 'Sat', value: 6 },
  { day: 'Sun', value: 1 },
];