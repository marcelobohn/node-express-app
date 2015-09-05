 $('#fruitList ul').on('click', 'li a.linkdeletefruit', deleteFruit);

function deleteFruit(event) {
    event.preventDefault();

    var confirmation = confirm('Are you sure you want to delete this user?');
    if (confirmation === true) {
        $.ajax({
            type: 'DELETE',
            url: '/delete/' + $(this).attr('rel')
        }).done(function( response ) {

            if (response.msg === '') {
            }
            else {
                alert('Error: ' + response.msg);
            }
            $(this).parent().remove();
            //populateTable();
        });
    }
    else {
        return false;
    }
};
