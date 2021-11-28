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
    description: "An iOS mobile app that displays data from devices and sensors using SwiftUI. Data is collected from a M5 Stack and stored in a S3 Bucket, where we programmed Six Sigma formulas in an AWS Lambda function (Python) to detect anomalies. The processed data is then stored and retrieved in a GraphQL API managed by AWS AppSync. Data between the frontend and backend is bridged using plugins from AWS Amplify.",
      /*image: prefix + '/images/ios1.png',*/
      tags: ['AWS', 'SwiftUI', 'GraphQL', 'Six Sigma', 'Python'],
    source: '/',
    visit: '/',
    id: 1,
  },
];
