/**
 * The number of minutes it takes to prepare a single layer.
 */
const PREPARATION_MINUTES_PER_LAYER = 2;

const EXPECTED_MINUTES_IN_OVEN = 40;

/**
 * Determines the number of minutes the lasagna still needs to remain in the
 * oven to be properly prepared.
 *
 * @param {number} actualMinutesInOven
 * @returns {number} the number of minutes remaining
 */
function remainingMinutesInOven(actualMinutesInOven) {
    throw new Error('Remove this line and implement the function');
}

/**
 * Given a number of layers, determines the total preparation time.
 *
 * @param {number} numberOfLayers
 * @returns {number} the total preparation time
 */
function preparationTimeInMinutes(numberOfLayers) {
    throw new Error('Remove this line and implement the function');
}

/**
 * Calculates the total working time. That is, the time to prepare all the layers
 * of lasagna, and the time already spent in the oven.
 *
 * @param {number} numberOfLayers
 * @param {number} actualMinutesInOven
 * @returns {number} the total working time
 */
function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
    throw new Error('Remove this line and implement the function');
}

module.exports = {
    PREPARATION_MINUTES_PER_LAYER,
    EXPECTED_MINUTES_IN_OVEN
}