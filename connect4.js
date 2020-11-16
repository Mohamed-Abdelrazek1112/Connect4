class Connect4{
    constructor(selector){
        this.ROWS=6;
        this.COLUMNS=7;
        this.selector = selector; 
        this.createGrid();
    }
    createGrid() {
        const $board = $(this.selector);
        for(var row=0;row<this.ROWS;row++) {
            const $row=$('<div>')
            .addClass('row');
            for(var col=0;col<this.COLUMNS;col++) {
                const $col=$('<div>')
                .addClass('col empty');
                $row.append($col);
            }
            $board.append($row);
        }
    }
}