process.env.NODE_ENV = 'test';

module.exports = function(wallaby) {
    return {
        files: [
            {pattern: 'specSetup.js', instrument: 'false'},
            {pattern: 'src/**/*.js'},
            {pattern: 'src/**/*.spec.js', ignore: true}
        ],
        tests: [
            {pattern: 'src/**/*.spec.js'}
        ],
        compilers: {
            'src/**/*.js': wallaby.compilers.babel()
        },
        env: {
            type: 'node',
            runner: 'node'
        },
        testFramework: 'mocha',
        debug: true,
        bootstrap: function() {
            require('./specSetup');
        }
    }
};