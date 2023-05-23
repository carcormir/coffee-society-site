window.onload = function () {

    // var el = document.createElement("div");
    // el.innerHTML = "RABBIT TEST ";
    // var div = document.getElementById("headline");
    // insertAfter(div, el);

    // /* FUNCTIONS */

    // // Inserts newNode after referenceNode
    // function insertAfter(referenceNode, newNode) {
    //     referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    // }

    window.addEventListener("click", doNextPrev, false);

    function doNextPrev(e) {
      $('.carousel-control-next, .carousel-control-prev').on('click', function(e) {
        var inst = e;
        console.log(inst.currentTarget.id);
        // if (direction === 'right') {
        //   $('#mainCarousel').carousel('next');
        //   $('#secondCarousel').carousel('next');
        // } else if (direction === 'left') {
        //   $('#mainCarousel').carousel('prev');
        //   $('#secondCarousel').carousel('prev');
        // }
      });
    }

    window.addEventListener("wheel", doScroll, false);
    function doScroll(e) {
      var threshold = 4; // Adjust the threshold as needed
  
      console.log(`x:${e.deltaX}, y:${e.deltaY}`);
      if(e.deltaX === threshold && e.deltaY === 0) {
        $('#mainCarousel').carousel('next');
        $('#secondCarousel').carousel('next');

      } else if (e.deltaX === -1*threshold && e.deltaY === 0) {
        $('#mainCarousel').carousel('prev');
        $('#secondCarousel').carousel('prev');

      }
  
      e.preventDefault(); // disable the actual scrolling
    }
};