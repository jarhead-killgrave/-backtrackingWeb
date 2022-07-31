"use strict";

/**
 * Classe representant un état à partir d'une expression
 *
 * @author JKgrave
 * @version 1.0.0
 */

class StateExpression extends AbstractState<number> {
  private _expression: Expression;

  constructor(entree: number[], etat: StateExpression, expression: Expression) {
    super(entree, etat);
    this._expression = expression;

  }

  generateStates(): State[] {
    let result: State[] = [];
    let inutile : number[];
    for (let i = 0; i < this._dimension; i++) {
      let tmpTab = [...this._entree];
      inutile = tmpTab.splice(0, i);
      for (let j = 1; j < tmpTab.length; j++) {
        for (let operateur of ["+", "-", "*", "/"]) {
          let newTab = [...tmpTab];
          
          let expression = new Expression(
            operateur,
            this._entree[i],
            tmpTab[j]
          );
          let val = expression.evaluate();
          if (
            val != 0 &&
            Number.isInteger(val) &&
            val != Math.max(this._entree[i], tmpTab[j])
          ) {
            newTab.splice(j, 1);
            newTab.splice(0, 1);
            newTab.push(...inutile)
            newTab.push(expression.evaluate());
            result.push(new StateExpression(newTab, this, expression));

          }
        }
      }
      inutile = null;
    }
    return result.reduce(
      (r, i) => (!r.some((j) => i.equal(j)) ? [...r, i] : r),
      []
    );
  }
  evaluate(): number {
    return this._expression.evaluate();
  }

  equal(state: AbstractState<number>): boolean {
    return super.equal(state);
  }

  toString(): string {
    return this._expression.toString();
  }

  printPath(): string {
    if (this._etatPere == null) return "";
    return this._etatPere.printPath() + "\n" + this.toString();
  }
}
