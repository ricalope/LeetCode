/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let saved = init;
    return {
        increment: () => {
            return ++saved;
        },
        decrement: () => {
            return --saved;
        },
        reset: () => {
            saved = init;
            return saved;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */