import { World } from "./world";

export function main() {
  const container: HTMLElement | null = document.querySelector("#canvas");
  if(!container) return;

  const world = new World(container);
  world.render();
}