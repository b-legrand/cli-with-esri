import "jest-preset-angular";

/**
 * Jest fonctionne avec JSDOM, qui ne fournit pas d'implémentation de localStorage/sessionStorage.
 *
 * @returns un stub de l'api.
 */
const mock = () => {
  let storage = {};
  return {
    getItem: key => key in storage ? storage[key] : null,
    setItem: (key, value) => storage[key] = value || "",
    removeItem: key => delete storage[key],
    clear: () => storage = {},
  };
};
Object.defineProperty(window, "localStorage", { value: mock() });
Object.defineProperty(window, "sessionStorage", { value: mock() });
Object.defineProperty(window, "getComputedStyle", {
  value: () => ["-webkit-appearance"],
});
