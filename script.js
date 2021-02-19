// Task 1
function repeat(toRepeat) {
    if (!Array.isArray(toRepeat)) return toRepeat;
    let result = [];
    for (let i=0; i<3; i++) {
        result.push(...toRepeat);
    }
    return result;
}

// Task 2
function reformat(str) {
    if (typeof str !== 'string') return str;
    let result = str.replace(/[aeiou]/ig, '').toLowerCase();
    return result.length ? `${result[0].toUpperCase()}${result.slice(1)}` : result;
}


// Task 3
function next_binary_number(arr) {
    if (!Array.isArray(arr)) return arr;
    
    const max = arr.length-1;
    let foundAt = -1;

    for (let i=max; i>=0; i--) {
        if (arr[i] === 0) {
            arr[i] = 1;
            foundAt = i;
            break;
        }
    }

    if (foundAt < 0) {
        arr.push(0);
        for (let j=max; j>0; j--) {
            arr[j] = 0;
        }
    } else {
        for (let j=max; j>foundAt; j--) {
            arr[j] = 0;
        }
    }

    return arr;
}
