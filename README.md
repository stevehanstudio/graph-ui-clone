# Graph-UI

This is my fork of the main branch of the Graph UI project for Plenful's Open Avenues micro-internship.  In this project we built a web application to visualize a complex recursive data structure using Typescript, React, Material UI, and D3.js.

## Team
Sanjeev Vijayaraj, Project Leader\
Steve Han,  Software Developer Intern\
Ian Wong, Software Developer Intern\
Kyle Wu,  Software Developer Intern

## Screenshot
<img src="graph_lib/public/graph-ui-screenshot.jpg" alt="screenshot" />

## Installation

- First clone this repository

- Next change into cloned folder, then
`
cd graph_lib
npm install
`

## Deployment

I've set this project up to deploy to Github pages.  To deploy
`
npm predeploy
npm deploy
`

## Notes:

- I downgraded to React version to 17.0.2.  As result, useId from React 18 is not available, so I modified Ian's code to use an arbitrary string instead of useId.

## Reference

Coming soon...