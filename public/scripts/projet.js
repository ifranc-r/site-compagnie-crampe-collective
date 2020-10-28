function getData(src){
   $.get(src,function(data){
       console.log(data) //filled!
       return data;
   });
}

// Chercher les fichiers textes des descriptions
// pour les afficher dans les descriptifs
$(document).ready(function(){
  $(".sommaireprojet").each(function(index){
    var src_text = $(this).text()
    // replace text
    $(this).html(function(_, oldText){
      var newText = "";
      // ajax waiting finish
      $.ajaxSetup({async: false});
      // get file
      var get = $.get(oldText,'text');
      get.done(function(text_sommaire){
        newText = text_sommaire
      })
      // Include all the "\n" that
      // doesn't appears
      newText = newText.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '<br />');
      return newText
    });
  })
});
