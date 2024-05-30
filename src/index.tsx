import { createRoot } from "react-dom/client"
import MyPortofolio from "./portofolio"

const root = createRoot(document.getElementById('root') as Element)
//root.render(<Legacy></Legacy>)
root.render(<MyPortofolio></MyPortofolio>)
