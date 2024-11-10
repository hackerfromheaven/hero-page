import './style.css';
export default function Header() {
  return (
    <>
      <nav>
        <button type="button" title="Home">
          <span>Home</span>
          <span className="material-symbols-outlined" aria-hidden="true">home</span>
          <svg viewBox="0 0 300 300" aria-hidden="true">
            <g>
              <text fill="currentColor">
                <textPath href="#circlePath">Home</textPath>
              </text>
              <text fill="currentColor">
                <textPath href="#circlePath" startOffset="50%">Home</textPath>
              </text>
            </g>
          </svg>
        </button>
        
        <button type="button">
          <span>About</span>
          <span className="material-symbols-outlined" aria-hidden="true">info</span>
          <svg viewBox="0 0 300 300" aria-hidden="true">
            <g>
              <text fill="currentColor">
                <textPath href="#circlePath">About</textPath>
              </text>
              <text fill="currentColor">
                <textPath href="#circlePath" startOffset="50%">About</textPath>
              </text>
            </g>
          </svg>
        </button>

        <button type="button">
          <span>Services</span>
          <span className="material-symbols-outlined" aria-hidden="true">linked_services</span>
          <svg viewBox="0 0 300 300" aria-hidden="true">
            <g>
              <text fill="currentColor">
                <textPath href="#circlePath">Services</textPath>
              </text>
              <text fill="currentColor">
                <textPath href="#circlePath" startOffset="50%">Services</textPath>
              </text>
            </g>
          </svg>
        </button>

        <button type="button">
          <span>Contact</span>
          <span className="material-symbols-outlined" aria-hidden="true">email</span>
          <svg viewBox="0 0 300 300" aria-hidden="true">
            <g>
              <text fill="currentColor">
                <textPath href="#circlePath">Contact</textPath>
              </text>
              <text fill="currentColor">
                <textPath href="#circlePath" startOffset="50%">Contact</textPath>
              </text>
            </g>
          </svg>
        </button>
      </nav>

      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 300" width="0" height="0">
  <defs>
    <path id="circlePath" d="M 150, 150 m -50, 0 a 50,50 0 0,1 100,0 a 50,50 0 0,1 -100,0" />
  </defs>
</svg>
    </>
  );
}
