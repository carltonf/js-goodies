function displayHtml(data) {
  $.each($(data).children(), function() {
    createHtml(this);
  });
}

function createHtml(element) {
  element = $(element);
  if (element.children().length > 0) {
    displayHtml(element);
  }

  var startingTag = element.prop('outerHTML').substring(0, element.prop('outerHTML').indexOf('>') + 1);
  var tagName = '';
  tagName = startingTag.substring(1,
                                  startingTag.indexOf(' ') > -1
                                  ? startingTag.indexOf(' ')
                                  : startingTag.indexOf('>'));
  // NOTE: with ES6 template string, we can improve the following code
  var formattedTag = '&lt;<span class="tag">' + tagName + '</span>attributes&gt;';
  
  var attributesString = '';
  $.each(element.prop('attributes'), function() {
    attributesString += ' ' + this.name + '=';
    attributesString += '<span class="attribute-value">"' + this.value + '"</span>';
  });
  
  startingTag = formattedTag.replace('attributes', attributesString);
  element.prepend(startingTag);
  element.append(formattedTag.replace('attributes', '').replace('&lt;', '&lt;/'));
    
  element.css('padding-left', '1em');
}


displayHtml($('#html-content'));
