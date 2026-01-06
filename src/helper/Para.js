export default function para(article) {
    const paras = []
    let j = 0
    for (let i = 300; i< article.length; i += 1 ) {
        if (article.charAt(i) === ".") {
            paras.push(article.slice(j, i+1))
            j = i+1;
            i += 300;
        }
    }
    paras.push(article.slice(j))
    return paras
}