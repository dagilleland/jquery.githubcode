/// <autosync enabled="true" />
/// <reference path="https://code.jquery.com/qunit/qunit-1.14.0.js" />
/// <reference path="../../example/assets/javascripts/jquery.min.js" />
/// <reference path="../../src/jquery.githubcode.js" />

/* Tests:
  General tests--
     Should add githubcode() as plugin to jQuery

  Test methods in closure--

  Test prototype methods--
    init
    githubRequest
    insert
    gatherContent
    detectLangauge
    constructRequestUrl
    parseUrlParams
    parseApiParams

  Url Tests--
    Retrieve Url without Spaces
    Retrieve Url with Spaces

    Style Tests--
    Map default languages to code styles
        .js .css .sass. .scss .html .htm .md .svg .coffee .php
    Add new code style mapping

    Handle extensionless files
        hello
    Handle files with extension only
        .gitignore
  Options Tests--
    ref: 'master"
    access_token: 'f23b79399a2c6fbb411643ce79ad60029c853b97',
    request_host: "https://api.github.com/repos",
    beforeInsert: function(){},
    afterInsert: function(){}
*/

// chainedTest() -- Runs a test callback function based on the supplied options
$.fn.chainedTest = function (o) {
    return this.each(function () {
        if ($.data(this, o.dataKey)) {
            if ($.data(this, o.dataKey)[o.functionName]) {
                var output = $.data(this, o.dataKey)[o.functionName](o.arg0, o.arg1, o.arg2, o.arg3, o.arg4);
                console.log(output);
                if (o.callbackTestFunction)
                    o.callbackTestFunction(output, o.expected, o.expectedMessage);
                //return output;
            }
        }
    })
}

module('General Setup')
test('jQuery plugins present', function () {
    notEqual($.fn.githubcode, undefined, 'Expected $.fn.githubcode plugin');
    notEqual($.fn.chainedTest, undefined, 'Expected $.fn.chainedTest plugin (to support testing internal functions)');
});

module('Testing GithubCode prototype methods')
test('GithubCode.detectLanguage() gets proper extension', function () {
    // Setup - default options
    var testOptions = {
        dataKey: 'plugin_githubcode',
        functionName: 'detectLanguage',
        callbackTestFunction: equal,
        expected: 'javascript',
        expectedMessage: 'Expected detectLanguage() to return proper value for file extension: ',
        arg0: 'file.js',
        arg1: null,
        arg2: null,
        arg3: null,
        arg4: null
    };

    var testCase = function (options) {
        $('<code />').addClass('githubcode').githubcode().chainedTest(options);
    }

    // .js - avascript
    testCase(testOptions);

    // .css - css
    testOptions.arg0 = 'file.css';
    testOptions.expected = 'css';
    testCase(testOptions);

    // .sass - sass
    testOptions.arg0 = 'file.sass';
    testOptions.expected = 'sass';
    testCase(testOptions);

    // .scss - scss
    testOptions.arg0 = 'file.scss';
    testOptions.expected = 'scss';
    testCase(testOptions);

    // .html - markup
    testOptions.arg0 = 'file.html';
    testOptions.expected = 'markup';
    testCase(testOptions);
    testOptions.arg0 = 'file.htm';
    testCase(testOptions);
    testOptions.arg0 = 'file.md';
    testCase(testOptions);
    testOptions.arg0 = 'file.svg';
    testCase(testOptions);

    // .coffee - coffeescript
    testOptions.arg0 = 'file.coffee';
    testOptions.expected = 'coffeescript';
    testCase(testOptions);

    // .php - php
    testOptions.arg0 = 'file.php';
    testOptions.expected = 'php';
    testCase(testOptions);

    // .cs - csharp
    testOptions.arg0 = 'file.cs';
    testOptions.expected = 'csharp';
    testCase(testOptions);

    // .vb - visualbasic
    testOptions.arg0 = 'file.vb';
    testOptions.expected = 'visualbasic';
    testCase(testOptions);

    // .txt - text
    testOptions.arg0 = 'file.txt';
    testOptions.expected = 'text';
    testCase(testOptions);
});



var MakeTestCase = function () {
    return $('#ad-hoc-container').append('<div class="ad-hoc"></div>').append('<code class="githubcode" data-url="https://github.com/dagilleland/jquery.githubcode/blob/unit-tests/tests/testdata/hello.htm"></code>');
};


module('jQuery Plugin - Best Practices');
test('Should allow Chaining', function () {
    equal('','not implemented');
});
test('Should protect the $ Alias', function () {
    equal('', 'not implemented');
});
test('Should provide public access to default options', function () {
    equal('', 'not implemented');
});

//module('un-sorted')
//test('githubcode closures are accessible for testing', function () {
//    function existingClosure(propertyName) {
//        equal($.fn.githubcode.constructor.hasOwnProperty(propertyName), true);
//    }

//});

//test('Closure "detectLanguage" gets extension', function () {
//    function fileExtension(filename, expected) {
//        equal($('code.githubcode').githubcode.constructor.prototype['detectLanguage'](filename), expected);
//    }
//    fileExtension('file.js', 'javascript');

//});


// --------------------------------------------------------------------------------------------------
// fill up the hard-coded visual samples on the test page
$(function () {
    $('code.githubcode').githubcode();
});
