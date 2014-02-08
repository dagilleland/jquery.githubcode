/// <reference path="//code.jquery.com/qunit/qunit-1.14.0.js" />
/// <reference path="../example/assets/javascripts/jquery.min.js" />
/// <reference path="../src/jquery.githubcode.js" />

/* Tests:
    Should add githubcode() as plugin to jQuery

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
*/

$(function () { $('code.githubcode').githubcode(); })