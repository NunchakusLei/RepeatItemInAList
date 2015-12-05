/*!
 * Repeat items in a List template
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

$(function() {
    var div = document.getElementById('blocks'),
        clone = div.cloneNode(true);
//    clone.id = "some_id";
    
    // append to the block container only
    $('#blockContainer').append(clone);
    
    clone = div.cloneNode(true);
    $('#blockContainer').append(clone);
    
    // append to the body
    clone = div.cloneNode(true);
    document.body.appendChild(clone);
});


