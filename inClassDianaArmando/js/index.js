$(function(){
    var products    = ['Dragon Fruit', 'Durian', 'Guava', 'Kiwi', 'Star Fruit', 'Tuscan Melon', 'Ramboutan', 'Lychee'];
    var prices      = [1.25, 2.25, 3.25, 4.25, 5.25, 6.99, 7.99, 8.25];
    var images      = ['dragon.jpg', 'durian.png', 'guava.jpg', 'kiwi.png', 'lychee.jpg', 'melon.jpg', 'ramboutan.jpg', 'starfruit.jpg'];
    var cartCounter = [];

    //Add products to the store
    for(var i = 0; i < products.length; i++)
    {
        var string = "";

        string += '<li class="list-group-item clearfix">';
            string += '<img class="img-thumbnail" src="./images/' + images[i] + '">';
            string += products[i];
            string += '<button class="btn btn-success btn-xs pull-right btn-product" value=' + i + '>Add to Cart</button>';
            string += '<button class="btn btn-danger btn-xs pull-right btn-remove" value=' + i + '>Remove</button>';
            string += ' ' + prices[i];
        string += '</li>';

        $('#products').append(string);

        //Set the cart counter to 0 for that this index
        cartCounter.push(0);
    }

    //Add product to cartCounter when a button is clicked
    $('#products').on('click', '.btn-product', function(){
        var index = $(this).val();
        cartCounter[index]++;
    });

     $('#products').on('click', '.btn-remove', function(){
        var index = $(this).val();
        cartCounter[index]--;
    });

    //View cart event
    $('#viewCart').on('click', function(){
        //Clear the cart
        $('#cartContents').html('');

        //Build the cart
        for(var i = 0; i < products.length; i++)
        {
            var count = cartCounter[i];
            if(count > 0) {
                var string = "";
                var price = prices[i];

                string += '<li class="list-group-item clearfix">';
                string += products[i];
                string += '<span class="badge badge-pill badge-primary">' + count + '</span>';
                string += '<span class="badge badge-pill badge-primary">' + '$' + (count * price) + '</span>';
                string += '</li>';
                $('#cartContents').append(string);
            }
        }
    });

    //Total the price in cart
    
});
