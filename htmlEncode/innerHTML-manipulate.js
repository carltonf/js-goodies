// innerHTML is smart enough to get the 'escaped' chars correctly.
// You can use 'insertAdjacentHTML' as well.
//
// Direct manipulation of 'innerHTML' is slowest (by 50% at least), see
// http://jsperf.com/htmlencoderegex/72

function htmlEncode(html) {
  var tempA = document.createElement('a');
  tempA.innerHTML = html;
  return tempA.innerHTML;
}

function htmlDecode(html) {
  var tempA = document.createElement('a');
  tempA.innerHTML = html;
  return tempA.text;
}
