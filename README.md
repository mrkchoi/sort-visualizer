## sort-visualizer
## Background and Overview
A visual exploration of sorting algorithms written in JS &amp; d3.js

[Live Site](https://mrkchoi.github.io/sort-visualizer/)
## Functionality & MVP
Users will be able to:
 - [X] Visualize sorting algorithms with realtime iterative stepping
 - [X] Compare time complexity of different sorting algorithms
 - [X] Display overview of Big(O) with lower + upper + actual time complexities

The project will also include:
 - [X] Links to connect with me (GitHub, LinkedIn)
 - [X] A modal with algorithm introduction
 - [X] Data visualization built with d3.js

## Wireframes
The app will be a single screen, housing a primary d3.js container where algorithms are rendering in realtime.

![Realtime Processing](http://kchoi.io/assets/images/bubble-sort-vis.png)
![Comparison Chart](http://kchoi.io/assets/images/sort-visualizer-screenshot.png)


## Architecture & Technologies
This app will be implemented using the following technologies:
  * Vanilla JavaScript - structure and logic
  * d3.js - DOM manipulation and rendering
  * Babel for transpilation
  * Webpack for bundling scripts

## Implementation Timeline
#### 5/17/2019:
 - [X] Tutorials on d3.js
 - [X] Setup `webpack`, `babel`, stylesheets, index.html, and `entry.js` file

#### 5/18/2019:
 - [X] Continue d3.js documentation
 - [X] Complete sorting algorithms in JS
   - [X] Allow for local state history as nested dataset
 - [X] Color palette research
 - [X] Initial wireframes/mockups

#### 5/19/2019:
 - [X] Complete d3.js documentation
 - [X] Narrow down visualization options
 - [X] Connect datasets to d3.js visualization w/ animated transitions
 - [X] Build out layout/mockups

#### 5/20/2019:
 - [X] Build out the score, song progress, and winning/failing bar
 - [X] Implement sorting time complexity render
 - [X] Create interactive Big(O) overview chart
 - [X] Update introductory text + documentation

#### 5/21/2019:
 - [X] Finalize userflow/testing
 - [X] Wrapup final styling
 - [X] Complete text animations + container/dataset transitions 
 - [X] Production README.md
 - [X] Deploy to GitHub pages

#### Bonus features:
 - [X] Add visualizations for selection, insertion & bogo sort
