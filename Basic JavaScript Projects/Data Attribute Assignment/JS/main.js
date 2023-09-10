function showDataAttribute() {
  // Get the element by its ID
  var element = document.getElementById('example');

  // Access the data attribute
  var dataValue = element.getAttribute('data-custom-attribute');

  // Log or display the data attribute
  console.log('The data attribute value is:', dataValue);
}
