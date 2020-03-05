(function() {
    var configuration = {
    "token": "bde3fec5be6e5261c2156103abbee1ba",
    "excludeDomains": [
        "yourowndomain.com"
    ],
    "capping": {
        "limit": 5,
        "timeout": 24
    },
    "entryScript": {
        "type": "timeout",
        "timeout": 3000,
        "capping": {
            "limit": 5,
            "timeout": 24
        }
    },
    "popUnder": {
        "enabled": true
    }
};
    var script = document.createElement('script');
    script.async = true;
    script.src = '//cdn.shorte.st/link-converter.min.js';
    script.onload = script.onreadystatechange = function () {var rs = this.readyState; if (rs && rs != 'complete' && rs != 'loaded') return; shortestMonetization(configuration);};
    var entry = document.getElementsByTagName('script')[0];
    entry.parentNode.insertBefore(script, entry);
})();
