Package.describe({
    name: 'polyroid:iron-icon',
    version: '1.0.7',
    summary: 'An element that supports displaying an icon',
    git: 'https://github.com/Polyroid/iron-icon.git',
    documentation: null
});

Package.onUse(function (api) {
    api.versionsFrom('1.2');

    api.use([
        'polyroid:iron-flex-layout@1.0.0',
        'polyroid:iron-meta@1.0.0',
        'polyroid:polymer@1.0.0'
    ], 'client');

    api.addAssets([
        'hero.svg',
        'iron-icon.html'
    ], 'client');
});
