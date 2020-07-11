export const svg = (path, options = {}) => {
    const { width, height } = options
    return `<img style="width: ${width ? width : '16px'}; height: ${height ? height : '16px'};" src=${path}></img>`
}