//////////////////////////////////////////////////////////////////////////
//                                                                      //
//    This file is automatically generated by the publish.py script.    //
//    Any changes made manually will be overwritten during the next     //
//    publish action.                                                   //
//                                                                      //
//////////////////////////////////////////////////////////////////////////
const default_language = 'en';
const stable_version = '2.7';
const versions = ['2.3', '2.4', '2.5', '2.6', '2.7', '2.8'];
var vcount = versions.length;
var i, text;
var serv = window.location.protocol + '//' + window.location.hostname

function list_versions(r_language, r_page, r_stable_text = 'stable', r_latest_text = 'latest') {
    text = "\n";
    for (i = 0; i < vcount; i++) {
        // text += '<dd><a href="/' + versions[i] + '/index.html?language=' + r_language + '&page=' + r_page + '" class="__ptNoRemap">' + versions[i] + "</a></dd>\n";
        text += '<dd><a href="/v' + versions[i] + '/index.html?language=' + r_language + '&page=' + r_page + '" class="__ptNoRemap">' + versions[i] + "</a></dd>\n";
    }
    text += '<dd><a href="/v' + stable_version + '/index.html?language=' + r_language + '&page=' + r_page + '" class="__ptNoRemap">' + r_stable_text + "</a></dd>\n";
    // text += '<dd><a href="/index.html" class="__ptNoRemap">latest' + "</a></dd>\n";
    text += '<dd><a href="/index.html?language=' + r_language + '&page=' + r_page + '" class="__ptNoRemap">' + r_latest_text + "</a></dd>\n";
    document.getElementById("select_version").innerHTML += text;
}
