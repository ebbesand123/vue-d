import { World } from "./world";

export function main() {
  const container: HTMLElement | null = document.querySelector("#canvas");
  if (!container) throw new Error();

  const world = new World(container);
  world.render();
}
