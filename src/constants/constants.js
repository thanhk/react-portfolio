const prefix = '/react-portfolio';
export const projects = [
  {
    title: 'Rise of the Elements',
    description: "An RPG game in Unity Teams using Photon Unity Networking (PUN) for multiplayer functionality. Players had health, mana, experience, inventories, attacks, and sprites that were custom made by us. We also designed an isometric map and implemented mob spawning using C#.",
      image: prefix + '/images/rote1.gif',
      tags: ['Unity', 'C#', 'Networking'],
    source: '/',
    visit: '/',
    id: 0,
  },
  {
    title: 'IoT Anomaly Detection App',
    description: "An iOS mobile app that displays data from devices and sensors using SwiftUI. Data is collected from an M5 Stack and stored in an S3 Bucket, where we run Six Sigma formulas in a AWS Lambda function (Python) to detect anomalies. The processed data is then stored and retrieved using a GraphQL API managed by AWS AppSync.",
      image: prefix + '/images/ios1.png',
      tags: ['AWS', 'SwiftUI', 'GraphQL', 'Six Sigma'],
    source: '/',
    visit: '/',
    id: 1,
  },
];
