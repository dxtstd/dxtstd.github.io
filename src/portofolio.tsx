import "./portofolio.css"
import "./style.css"

import img_of_my_boy from "./assets/myboy.png" 

const introduction: string = "Someone who wants to create technology that is useful for the future. He does programming, editing and designing to find an identity. Learning new things is a challenge for him, he does everything to improve his skills."
//                            || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor dignissim ipsum, eu eleifend metus. Mauris fermentum eros eget eros pharetra bibendum nec ut neque. Nullam euismod nunc est, ut facilisis urna mattis id. Duis vehicula fringilla ligula. Pellentesque ullamcorper feugiat magna vitae commodo." 

export default function MyPortofolio() {
  return (
    <>
      <div className="m-auto">
        <section id="landing">
          <div className="p-[25px] m-auto">
            <h1>dxtstd</h1>
            <hr className="line"></hr>
            <p className="text-[14px] text-[#cfcfcf]">newbie programmer</p>
            <article className="w-[250px] sm:w-[400px] h-[150px]">
              <p className="text-justify">{introduction}</p>
            </article>
          </div>
          <div className="p-[25px] m-auto">
            <div className="my_boy">
              <img alt="this_is_me" src={(() => img_of_my_boy)()}></img>
            </div>
          </div>
        </section>
      </div>
    </>
  )
};