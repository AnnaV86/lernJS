const buildUrl = (pageAddress, domain) => `https://${domain + pageAddress
    .replace(/.*(?=pages)/, '')
    .replace(/.*/, x => '/' + x[0].toUpperCase() + x.slice(1).replace(/\/a/, '/A'))}`


console.log(buildUrl('ahftgx/pages/about', 'hexlet.io'))
console.log(buildUrl('gfdgfdgdfgdfg/pages/about', 'hexlet.io'))
