const buildUrl = (pageAddress, domain) => `https://${domain + pageAddress.replace(/^\/|()/, '/$1')}`


console.log(buildUrl('pages/about', 'hexlet.io'))
console.log(buildUrl('/pages/about', 'hexlet.io'))