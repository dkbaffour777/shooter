export const ai_motion = (() => {
    let direction = 1;
    return {
        get: () => direction,
        stop: () => direction = 0,
        change: () => {
            if (direction === 1) direction = -1;
            else if (direction === -1) direction = 1;
        },
    }
})();