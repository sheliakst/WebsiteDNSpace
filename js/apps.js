
let coordrow = "", coords;

$(document).ready(function () {
    //fill app
    fillGrid();
    coords = $.getJSON("../data/datacoord.json", function (data) {
        $.each(data, function (key, val) {
            if (key < 20) {
                coordrow += `
                  <tr class="tabrow" data-key="${key}">
                   <td >${key}</td>
                   <td >${val.OBJECT}</td>
                   <td >${val.TYPE}</td>
                   <td >${val.DEC}</td>
                   <td >${val.RA}</td>  
                   <td >${val.MAG}</td> 
                </tr>`;
            };
        });
        $(".grid").html("<tbody>" + coordrow + "</tbody>")
    });

    //modal open
    $('.filters').click(function () {
        $('.modal').css('display', 'block')
    });

    //Close modals 

    /*   $('.modalContainer').on('click', function () {
          $('.modal').css('display', 'none')
      }); */
    var modal = document.getElementById("mod");
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
    $(document).keyup(function (e) {
        if (e.key === "Escape") {
            modal.style.display = "none";
        }
    });


    //add filter info
    $(".modalContainer ul").click(function (event) {
        console.log(event.target.innerHTML)
        $('.filterInBut').append('<li><button>' + event.target.innerHTML + '<span>&#x2715;<span></button></li>')
    });

    $(".filterInBut").click(function (event) {
        event.target.remove("li")
    });

});






function fillGrid() {
    coordrow = `
    <thead class="thead  " >
    <tr>
    <th > </th>
    <th >ID</th>
    <th >Type</th>
    <th >DEC</th>
    <th >RA</th>
    <th >Size</th>
    </tr>
    </thead>`;
    $(".grid").html(coordrow);
};
