"use strict";

var $=function (id){
return (document.getElementById(id));

};

//Validating the input to see the results
var processEntries=function(){
if($('subtotal').value<10000 && $('subtotal').value>0 && $('taxrate').value>0 && $('taxrate').value<12 )
{

    $('salestax').value=($('subtotal').value*$('taxrate').value)/100;
    $('total').value=parseFloat($('salestax').value)+parseFloat($('subtotal').value);

//We will focuse the pointer to the subtotal of the field.
$('subtotal').focus();
}

//We then will create an alert
else
{
    alert("Subtotal must be >0 and <10000 \n Tax rate must be >0 and <12")
}
}

//The function will be used to clear all the field's.

var clearEntries=function(){

    $('salestax').value='';
    $('total').value='';
    $('subtotal').value='';
    $('taxrate').value='';
    $('subtotal').focus();

}

//This will be used to clear the subtotal field.
var clearSubtotal=function(){
    $('subtotal').value='';
}

//The function will be used to clear the tax rate field.
var clearTaxRate=function(){
    $('taxrate').value='';
}

window.onload=function(){

    $('subtotal').focus();
    $('calculate').onclick=processEntries;
    $('clear').onclick=clearEntries;
    $('subtotal').onclick=clearSubtotal;
    $('taxrate').onclick=clearTaxRate;

};
