const buildUrl = (pageAddress, domain) => pageAddress.replace(/^\/|()/g, x => `https://${domain}${x}`)


console.log(buildUrl('pages/about', 'hexlet.io'))
console.log(buildUrl('/pages/about', 'hexlet.io'))