export const calculateFlexBasis = (size: number, maxSize: number, multiplier: number) => {
    let flexBasis = size * multiplier * 100 / maxSize
    if (flexBasis > 100) {
        flexBasis = 100
    }
    return `${flexBasis}%`
}

export const calculateFilledWidth = (total: number, delta: number) => {
    const filledWidth = (total / (total + delta)) * 100
    return `${filledWidth}%`
}
