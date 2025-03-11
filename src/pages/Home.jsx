function Home() {
  return (
    <div className="p-page">
      <HomeText />
      <div className="divider"></div>
      <HomeText />
      <div className="divider"></div>
      <HomeText />
      <div className="divider"></div>
      <HomeText />
    </div>
  );
}

export default Home;

function HomeText() {
  return (
    <div className="prose">
      <h1>Layout and Typography</h1>
      <p>How to use layouts and typography in daisyUI Layout</p>
      <h2>Layout</h2>
      <p>
        Layout, sizing, grids, spacing, etc. all will be handled by Tailwind CSS’s utility classes.
        Read more at Tailwind CSS documentation: Layout, Sizing, Flexbox, Grid, Box alignment,
        Spacing.
      </p>
      <h2>Typography</h2>
      <p>
        daisyUI supports the TailwindCSS Typography plugin All parts are compatible with daisyUI
        themes.
      </p>
    </div>
  );
}
