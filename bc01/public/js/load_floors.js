$(window).on("load", function () {
    $.ajax({
        method: 'GET',
        url: 'floorInfo',
        success: function (response) {

            for (let i = 0; i < response.length; i++) {

                $("#floor").append('<option value="' + response[i].id + '">' + response[i].floor + '</option>');
            }
        },
        failure: function (response) {
            alert(response.responseText);
        },
        error: function (response) {
            alert(response.responseText);
        }
    });
});


$("#floor").on('change', function () {
    let val = $(this).val(); //co presne vracia .val()?????

    switch (val) {
        case '1':
            if (scene != null)
                //Sem
                break;
        case '2':
            if (scene != null)
                //Sem
                break;
    }
});

