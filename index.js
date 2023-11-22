//A function called "multiplication" that returns the product of the two input numbers.

function Name: multiplication(num1, num2)

//Purpose: calculates and returns the product of the two input numbers.

//Input Parameters:

num1: The first number to be multiplied.
num2: The second number to be multiplied.

//Output:Returns the product of num1 and num2.

//Test Examples//

//Multiply two positive integers.
Input: num1 = 2, num2 = 3
Expected Output: 6

//Multiply a positive integer and a negative integer.
Input: num1 = 4, num2 = -2
Expected Output: -8

//Multiply two negative integers.
Input: num1 = -5, num2 = -3
Expected Output: 15

//a function called 'concatOdds'
Function Name: concatOdds(arr1, arr2)

//Purpose: Combines two arrays of integers and returns a single array containing only the odd numbers from both arrays, sorted in ascending order.

//Input Parameters:
arr1: An array of integers.
arr2: An array of integers.
//Output:Returns a single array containing only the odd numbers from arr1 and arr2, sorted in ascending order.

//Test Cases:

//concatOdds Empty Arrays:
Input: arr1 = [], arr2 = []
Expected Output: []

//concatOdds Arrays with a Single Odd Number Each:
Input: arr1 = [1], arr2 = [3]
Expected Output: [1, 3]

//concatOdds Arrays with Multiple Odd Numbers:
Input: arr1 = [3, 2, 1], arr2 = [9, 1, 1, 1, 4, 15, -1]
Expected Output: [-1, 1, 1, 1, 1, 3, 9, 15]

//shopping cart
scenario 1. 

1.User proceeds to checkout with an empty cart.
    Expected Behavior: Display an error message informing the user that the cart is empty and redirect them to the cart or shop page.
2.User proceeds to checkout with non-empty cart.
    Expected Behavior:
        Display a checkout page with the following information:
        Shipping address form
        Billing address form
        Order summary (list of items, quantities, and prices)
        Payment options (credit card, PayPal, etc.)
        Guest checkout option (create an account or sign in)
    If the user chooses guest checkout, prompt them to enter their email address for order confirmation and future communication.
    Once the user has filled out all required information and selected a payment option, proceed to payment processing.
        
scenario 2. Checking out as a logged-in user

1.User proceeds to checkout with an empty cart.

    Expected Behavior:
        If the user is logged in, display an error message informing them that the cart is empty and redirect them to the cart or shop page.

     User proceeds to checkout with a non-empty cart.
        Expected Behavior:
            If the user is logged in, display a checkout page with the following information:
                Shipping address information (pre-filled with the user's saved shipping address)
                Billing address information (pre-filled with the user's saved billing address)
                Order summary (list of items, quantities, and prices)
                Payment options (credit card, PayPal, etc.)
                Option to edit shipping and billing addresses
            If the user chooses to edit their shipping or billing address, allow them to make the necessary changes and save the updated information.
            Once the user has confirmed their shipping and billing information and selected a payment option, proceed to payment processing.
3.Payment Processing:
    Upon successful payment, display a confirmation page with order details and an option to track the order status.
    If payment fails, inform the user and provide options to retry or select a different payment method.

    