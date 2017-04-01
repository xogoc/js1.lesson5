var white = {
    king: [{pos: "E1", symb: "&#9812;", alive: true}],
    queen: [{pos: "D1", symb: "&#9813;", alive: true}],
    rook: [
        {pos: "A1", symb: "&#9814;", alive: true},
        {pos: "H1", symb: "&#9814;", alive: true}
    ],
    bishop: [
        {pos: "C1", symb: "&#9815;", alive: true},
        {pos: "F1", symb: "&#9815;", alive: true}
    ],
    knight: [
        {pos: "B1", symb: "&#9816;", alive: true},
        {pos: "G1", symb: "&#9816;", alive: true}
    ],
    pawn: [
        {pos: "A2", symb: "&#9817;", alive: true},
        {pos: "B2", symb: "&#9817;", alive: true},
        {pos: "C2", symb: "&#9817;", alive: true},
        {pos: "D2", symb: "&#9817;", alive: true},
        {pos: "E2", symb: "&#9817;", alive: true},
        {pos: "F2", symb: "&#9817;", alive: true},
        {pos: "G2", symb: "&#9817;", alive: true},
        {pos: "H2", symb: "&#9817;", alive: true}
    ]
};
var black = {
    king: [{pos: "E8", symb: "&#9818;", alive: true}],
    queen: [{pos: "D8", symb: "&#9819;", alive: true}],
    rook: [
        {pos: "A8", symb: "&#9820;", alive: true},
        {pos: "H8", symb: "&#9820;", alive: true}
    ],
    bishop: [
        {pos: "C8", symb: "&#9821;", alive: true},
        {pos: "F8", symb: "&#9821;", alive: true}
    ],
    knight: [
        {pos: "B8", symb: "&#9822;", alive: true},
        {pos: "G8", symb: "&#9822;", alive: true}
    ],
    pawn: [
        {pos: "A7", symb: "&#9823;", alive: true},
        {pos: "B7", symb: "&#9823;", alive: true},
        {pos: "C7", symb: "&#9823;", alive: true},
        {pos: "D7", symb: "&#9823;", alive: true},
        {pos: "E7", symb: "&#9823;", alive: true},
        {pos: "F7", symb: "&#9823;", alive: true},
        {pos: "G7", symb: "&#9823;", alive: true},
        {pos: "H7", symb: "&#9823;", alive: true}
    ]
};

function board() {
    var tr, td, i, j, dark;
    var table = document.createElement("table");
    var index = {
        row: [8, 7, 6, 5, 4, 3, 2, 1],
        column: ["A", "B", "C", "D", "E", "F", "G", "H"]
    };
    for (i = -1; i < 9; i++) {
        tr = document.createElement("tr");
        dark = !!(i % 2);
        for (j = -1; j < 9; j++) {
            td = document.createElement("td");
            if (i == -1 || i == 8) {
                td.classList.add("frame");
                td.classList.add(j == -1 || j == 8 ? "corner" : "horizontal");
                td.innerText = index.column[j] || "";
            } else if (j == -1 || j == 8) {
                td.classList.add("frame");
                td.classList.add("vertical");
                td.innerText = index.row[i] || "";
            } else {
                td.id = index.column[j] + index.row[i];
                td.classList.add("check");
                td.classList.add(dark ? "dark" : "light");
                dark = !dark;
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}
function render(player) {
    for (piece in player) {
        player[piece].forEach(function(item) {
            if(item.alive) {
                document.getElementById(item.pos).innerHTML = item.symb;
            }
        });
    }
}

board();
render(white);
render(black);

