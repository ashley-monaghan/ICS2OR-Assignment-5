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
  let numerator = 4
  let denomonaitor = -1
  let aLittleBit = 0


  while (counter == numberOfLoops) {
    
    numerator
    denomonaitor = denomonaitor + 2
    let multiply = (-1) ** counter
    aLittleBit = (numerator / denomonaitor) * multiply
    let Pi = 1
    Pi = Pi + aLittleBit
    counter = counter + 1
  }

    document.getElementById("pianswer").innerHTML = "Your pi is: " + Pi + "!"

}
