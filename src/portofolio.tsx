import "./style.css"

const introduction: string = "Someone who wants to create technology that is useful for the future. He does programming, editing and designing to find an identity. Learning new things is a challenge for him, he does everything to improve his skills." ||
                             "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor dignissim ipsum, eu eleifend metus. Mauris fermentum eros eget eros pharetra bibendum nec ut neque. Nullam euismod nunc est, ut facilisis urna mattis id. Duis vehicula fringilla ligula. Pellentesque ullamcorper feugiat magna vitae commodo." 

export default function MyPortofolio() {
  return (
    <>
      <div>
        <section id="landing" className="flex justify-around flex-col xl:flex-row h-dvh max-h-dvh items-center p-16 xl:p-32 duration-[0.5s]">
          <div className="w-[450px] h-[250px] p-[10px]">
            <p className="text-[32px] max-w-max px-[1px] font-bold hover:bg-[#00000050] hover:text-[#ffffff] duration-[0.25s]">dxtstd</p>
            <hr className="h-[2px] w-[140px] my-[1px] bg-black border-0"></hr>
            <p className="text-[14px] text-[#cfcfcf]">newbie programmer</p>
            <article className="w-[430px] h-[150px]">
              <p>{introduction}</p>
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