import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from '../../asserts/black-king.png';
import whiteLogo from '../../asserts/white-king.png';

export class King extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KING;
        
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false;
        const dx = Math.abs(this.cell.x - target.x);
        const dy = Math.abs(this.cell.y - target.y);
        if (this.cell.isEmptyHorizontal(target) && dx === 1)
            return true;
        if (this.cell.isEmptyVertical(target) && dy === 1)
            return true;

        if (this.cell.isEmptyDiagonal(target) && dx === 1 && dy === 1)
            return true;
        
        return false;
    }
}