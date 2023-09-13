/*
This function returnst the first line of a sentence or article
*/

export default getFirstLine = lines => {
    const firstLine = lines.split("\n")[0]
    return firstLine
}