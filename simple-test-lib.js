const [
    BG_GREEN,
    TXT_GREEN,
    BG_RED,
    TXT_RED,
    RESET_BASH
] = [
    '\x1b[42m',
    '\x1B[32m',
    '\x1b[41m',
    '\x1B[31m',
    '\x1b[0m'
]

function test(title, callback) {
    try {
        callback();
        console.info(`${BG_GREEN} PASSED ${RESET_BASH}\t ${TXT_GREEN} ${title} ${RESET_BASH}`)

    } catch(e) {
        console.error(`${BG_RED} FAILED ${RESET_BASH}\t ${TXT_RED} ${title} ${RESET_BASH}`)
        console.warn(e.message);
    }
}

function expect(actual) {
    return {
        toBe: expected => {
            if(actual !== expected)
                throw new Error(`${actual} is not equal to ${expected}`);
        },
        toBeFalsy: () => {
            if(actual)
                throw new Error(`${actual} is not falsy`);
        },
        toBeTruthy: () => {
            if(!actual)
                throw new Error(`${actual} is not truthy`);
        },
        toBeGreaterThan: expected => {
            if(actual > expected)
                throw new Error(`${actual} is not greater than ${expected}`);
        },
        toBeGreaterThanOrEqual: expected => {
            if(actual >= expected)
                throw new Error(`${actual} is not greater than or equal to ${expected}`);
        },
        toBeLessThan: expected => {
            if(actual < expected)
                throw new Error(`${actual} is not less than ${expected}`);
        },
        toBeLessThanOrEqual: expected => {
            if(actual <= expected)
                throw new Error(`${actual} is not less than or equal to ${expected}`);
        },
    }
}

module.exports = { test, expect };