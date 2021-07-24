import { createSignal } from 'solid-js';
import { Dynamic } from 'solid-js/web';

/** */
export default function SolidCounter({ children }) {
  const [count, setCount] = createSignal(0);
  const add = () => setCount(count() + 1);
  const subtract = () => setCount(count() - 1);

  return (
    <Dynamic component="div">
      <div class="counter">
        <button onClick={subtract}>-</button>
        <pre>{count()}</pre>
        <button onClick={add}>+</button>
      </div>
      <div class="children">{children}</div>
    </Dynamic>
  );
}
