const prefix = '/react-portfolio';
export const projects = [
  {
    title: 'Rise of the Elements',
    description: "An RPG game in Unity Teams using Photon Unity Networking (PUN) for multiplayer functionality. Using C#, we created player health, mana, experience, inventory, movement and attack systems. Additionally, we implemented mob spawning and loot systems. We also designed and animated all of our own assets.",
      image: prefix + '/images/rote1.gif',
      tags: ['Unity', 'C#', 'Networking'],
    source: '/',
    visit: '/',
    id: 0,
  },
  {
    title: 'IoT Anomaly Detection App',
    description: "A full-stack application that displays time series data from devices and sensors that are stored and processed in an AWS-based backend. We programmed Six Sigma formulas in an AWS Lambda function (Python) to detect anomalies and query them in a GraphQL API managed by AWS AppSync. Data is visualized as charts on our front-end in an iOS app written in Swift.",
      image: prefix + '/images/ios1.png',
      tags: ['AWS', 'Swift', 'GraphQL', 'Six Sigma', 'Python'],
    source: '/',
    visit: '/',
    id: 1,
  },
];
