import { GridHelper } from "three";

function createGridHelper(size = 40, divisions = 2) {
  return new GridHelper(size, divisions);
}
export { createGridHelper };
