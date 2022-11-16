import "./styles.css";

export default function Button1() {
  return (
    <div className="examples">
      <button
        className="button-one"
        aria-controls="primary-navigation"
        aria-expanded="false"
      >
        <svg
          fill="var(--button-color)"
          className="hamburger"
          viewBox="0 0 100 100"
          width="250"
        >
          <rect
            class="line top"
            width="80"
            height="10"
            x="10"
            y="25"
            rx="5"
          ></rect>
          <rect
            class="line middle"
            width="80"
            height="10"
            x="10"
            y="45"
            rx="5"
          ></rect>
          <rect
            class="line bottom"
            width="80"
            height="10"
            x="10"
            y="65"
            rx="5"
          ></rect>
        </svg>
      </button>
      <button className="button-two"></button>
      <button className="button-three"></button>
    </div>
  );
}
