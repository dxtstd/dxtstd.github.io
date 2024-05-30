import "./style.css"

export default function MyPortofolio() {
  return (
    <>
      <div>
        <section id="landing" className="flex justify-around items-center px-[100px] py-[100px] h-[100dvh]">
          <div className="w-[450px] h-[250px] p-[10px]">
            <p className="text-[32px] font-bold">dxtstd</p>
            <hr className="h-[2px] w-[140px] bg-black border-0"></hr>
            <p className="text-[14px] text-[#cfcfcf]">newbie programmer</p>
            <article className="w-[430px] h-[150px]">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor dignissim ipsum, eu eleifend metus. Mauris fermentum eros eget eros pharetra bibendum nec ut neque. Nullam euismod nunc est, ut facilisis urna mattis id. Duis vehicula fringilla ligula. Pellentesque ullamcorper feugiat magna vitae commodo.</p>
            </article>
          </div>
          <div className="h-500 w-400 p-[35px]">
            <div className="bg-[#CFCFCF] w-[350px] h-[430px] rounded-[30px] items-center overflow-clip">
              <img alt="this_is_me" src={(() => require("./assets/myboy.png"))()}></img>
            </div>
          </div>
        </section>
      </div>
    </>
  )
};