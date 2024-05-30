import { Component, useState } from "react";
import "../style.css";

class TextoAnimation extends Component {
  public list: string[] = [
    "dxtstd",
    "newbie programmer",
    "anime"
  ]
  public state: { index: number, text: string } = {
    index: 0,
    text: ""
  }

  async sleep(ms: number) {
    return new Promise((resolve, reject) => setTimeout(resolve, ms))
  }

  async loop() {
    const selectedText = this.list[this.state.index];
    let selectedTextLength = selectedText.length;

    for (const letter of this.list[this.state.index].split("")) {
      this.setState({ text: this.state.text + letter });
      await this.sleep(150)
      selectedTextLength --
    }

    await this.sleep(5000)

    while (selectedTextLength < (selectedText.length + 1)) {
      selectedTextLength ++
      this.setState({ text: (this.state.text).split("").reverse().splice(1).reverse().join("") })
      await this.sleep(75)
    }

    if (this.state.index >= (this.list.length - 1)) {
      this.setState({ index: 0 })
    } else {
      this.setState({ index: this.state.index + 1 })
    }

    this.loop()
  }

  componentDidMount() {
    this.loop()
  }

  render() {
    return (
      <>
      <p>I'm {this.state.text}</p>
      </>
    )
  }
}

export default function App () {
  const [state, setState] = useState<string>("test_1")
  return (
    <div className="bg-slate-900">
      <div className="min-h-screen relative flex flex-col justify-center gap-[25px]">
        <div className="relative bg-slate-800 px-6 pb-8 pt-10 shadow-2xl ring-1 ring-slate-500/50 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <h1 className="font-bold underline">Hello World</h1>
          <TextoAnimation></TextoAnimation>
        </div>
        <div className="relative bg-slate-800 px-6 pb-8 pt-10 shadow-2xl ring-1 ring-slate-500/50 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <ul className="flex justify-center  gap-[25px]">
          {([{id: "test_1", display: "test"}, {id: "test_2", display: "test"}, {id: "test_3", display: "test"}]).map((value, index) => (
            <li 
              key={value.id}
              className={(() => {
                let def_class = ["h-[40px]", "w-[80px]", "text-center", "items-center ", "rounded-[50px]",  "hover:scale-[1.1]", "duration-[0.2s]"]
                if (state === value.id) {
                  def_class.push("bg-[#3d81ff]", "hover:bg-[#3d81ff]")
                } else def_class.push("bg-[#a7aebb]", "hover:bg-[#6fbaff]")

                return def_class.join(" ")
              })()}
              onClick={() => { setState(value.id);console.log(state) }}
            >
              {value.display}
            </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}