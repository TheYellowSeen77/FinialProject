let counter = 0;

// code to post a comment
$( "button" ).on( "click", function() {
    let displayName = $('#displayNameInput').val();
    let comment = $('#userCommentInput').val();
    $('#postedComments').prepend( '<div id=commentOutput> <p id = commentOutputName>' + displayName + '  </p> <button class="edit">Edit</button> <button class="delete">Delete</button> <div class = commentOutputComment id = commentOutputComment><img src=Images/profilePic.png width=50px height = 50px> '  + comment + '</div> </div>');
    // when user clicks the edit button
    $('.edit').on("click",function(){
        $('#commentOutputComment').append('<textarea type="text" id="editUserCommentInput" placeholder="Edit Comment" length="500px"></textarea><button type="button" id="editSubmit">Submit</button>')
        //When user clicks the submit button to edit their post
        $('#editSubmit').on('click', function(){
            comment = $('#editUserCommentInput').val();
            $('#commentOutputComment').text(comment);
            $('#commentOutputComment').prepend('<img src=Images/profilePic.png width=50px height = 50px>')

            console.log(comment);
        });
    });
    
      //when user clciks the delete button
  $('.delete').on('click', function(){
        let del = $('#commentOutput').children(); 
        console.log(del);
        $(del).remove();
    }); 
});

