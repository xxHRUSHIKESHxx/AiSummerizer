import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3 pr-3 pl-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

        <button
          type="button"
          onclick={() => {
            window.open("https://github.com/xxHRUSHIKESHxx");
          }}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Summerize Articles With <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Unleash the power of OpenAI's cutting-edge technology, combined with the
        efficiency of Vite.js and the flexibility of Tailwind CSS. Our app
        allows you to effortlessly extract summaries from any web link,
        providing you with key insights in a matter of seconds.
      </h2>
    </header>
  );
};

export default Hero;
