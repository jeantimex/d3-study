import * as d3 from 'd3';
import { add } from "../common";

import "../common/style.scss";

const width = 500;
const height = 500;

// Create SVG element
const svg = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// Create line element inside SVG
svg
  .append("line")
  .attr("x1", 100)
  .attr("x2", 500)
  .attr("y1", 50)
  .attr("y2", 50)
  .attr("stroke", "black");

console.log(add(1, 2));
