// Copyright (c) 2022 Ashley Monaghan All rights reserved
//
// Created by: Ashley Monaghan
// Created on: Jan 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2OR-Assignment-5/sw.js", {
    scope: "/ICS2OR-Assignment-5/",
  })
}

/**
 * This function calculates pi.
 */
function buttonPressed() {
  let numberOfLoops = parseFloat(document.getElementById("number").value)
  let counter = 0
  let denomonaitor = -1
  let Pi = 0

  while (counter < numberOfLoops) {
    
    let numerator = 4
    denomonaitor = denomonaitor + 2
    let multiply = (-1) ** counter
    let aLittleBit = (numerator / denomonaitor) * multiply
    Pi = Pi + aLittleBit
    counter = counter + 1
  }

    document.getElementById("pianswer").innerHTML = "Your pi is: " + Pi + "!"

}
