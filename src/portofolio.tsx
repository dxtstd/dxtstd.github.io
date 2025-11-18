import "./portofolio.css"
import "./style.css"

import { Component, type ReactElement } from "react"
import img_of_my_boy from "./assets/myboy.webp"

const introduction: string = "Someone who wants to create technology that is useful for the future. He does programming, editing and designing to find an identity. Learning new things is a challenge for him, he does everything to improve his skills."
//                            || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor dignissim ipsum, eu eleifend metus. Mauris fermentum eros eget eros pharetra bibendum nec ut neque. Nullam euismod nunc est, ut facilisis urna mattis id. Duis vehicula fringilla ligula. Pellentesque ullamcorper feugiat magna vitae commodo." 

class TextAnimation extends (Component) {
  public list: string[] = [
    "Newbie Programmer", "Network Engineer", "IT Support"
  ]

  public state: { index: number, text: string, isRunning: boolean } = {
    index: 0,
    text: "",
    isRunning: false
  }

  async sleep(ms: number): Promise<undefined> {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  async loop(): Promise<undefined> {
    if (this.state.isRunning) return void 0;

    this.state.isRunning = true;

    const selectedText = this.list[this.state.index];
    let selectedTextLength = selectedText.length;

    for (const letter of this.list[this.state.index].split("")) {
      this.setState({ text: this.state.text + letter });
      await this.sleep(75);
      selectedTextLength--;
    }

    await this.sleep(5000)

    while (selectedTextLength < (selectedText.length + 1)) {
      selectedTextLength++;
      this.setState({ text: (this.state.text).split("").reverse().splice(1).reverse().join("") });
      await this.sleep(50);
    }

    if (this.state.index >= (this.list.length - 1)) {
      this.setState({ index: 0 });
    } else {
      this.setState({ index: this.state.index + 1 });
    }

    await this.sleep(50)

    if (this.state.text.length == 0) this.state.isRunning = false;
    this.loop()
  }

  componentDidMount(): undefined {
    this.loop();
  }

  render(): ReactElement {
    return (
      <>
        {this.state.text.length == 0 ? "loading..." : `${this.state.text}`}
      </>
    )
  }
}

export default function MyPortofolio(): ReactElement {
  return (
    <>
      <div className="m-auto">
        <section id="landing">
          <div className="p-[25px] m-auto">
            <h1>dxtstd</h1>
            <hr className="line"></hr>
            <p className="title text-[14px] text-[#cfcfcf]"><TextAnimation /></p>
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
        <div className="flex flex-col xl:flex-row h-dvh max-h-dvh justify-around w-dvw p-16">
          <section id="experience">
            <div className="px-16">
              <div>
                <h1 className="text-center m-auto">Experience</h1>
                <hr className="line items-center m-auto"></hr>
              </div>
              <div className="flex flex-col gap-2 py-8">
                <div className="experience" id="exp_telkom_akses">
                  <h2>Internship</h2>
                  <hr className="line"></hr>
                  <div className="place flex flex-row gap-1">
                    <p>at PT. Telkom Akses</p>
                    <p> · </p>
                    <p>July 2024 - November 2024</p>
                  </div>
                  <div>
                    <article>
                      <p>Description: Saya disini bekerja sebagai anu</p>
                    </article>
                  </div>
                </div>
                <div className="experience" id="exp_imphnen">
                  <h2>Moderator</h2>
                  <hr className="line"></hr>
                  <div className="place flex flex-row gap-1">
                    <p>at IMPHNEN</p>
                    <p> · </p>
                    <p>February 2024 - Present</p>
                  </div>
                  <div>
                    <article>
                      <p>Description: Saya disini bekerja sebagai anu</p>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="education">
            <div className="px-16">
              <div>
                <h1 className="text-center m-auto">Education</h1>
                <hr className="line items-center m-auto"></hr>
              </div>
              <div className="flex flex-col gap-2 py-8">
                <div className="education" id="edu_smk">
                  <h2>Vocational High School</h2>
                  <hr className="line"></hr>
                  <div className="place flex flex-row gap-1">
                    <p>at SMKS Handayani Sungguminasa</p>
                    <p> · </p>
                    <p>July 2022 - April 2025</p>
                  </div>
                  <div>
                    <article>
                      <p>Description: Saya disini bekerja sebagai anu</p>
                    </article>
                  </div>
                </div>
                <div className="education" id="edu_collage">
                  <h2>Bachelor (Collage)</h2>
                  <hr className="line"></hr>
                  <div className="place flex flex-row gap-1">
                    <p>at Universitas Negeri Manado</p>
                    <p> · </p>
                    <p>August 2025 - Present</p>
                  </div>
                  <div>
                    <article>
                      <p>Description: Saya disini bekerja sebagai anu</p>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section id="project">

        </section>
      </div>
    </>
  )
};