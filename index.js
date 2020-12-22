import { Subject, Message, Observer } from "./program"

let s = new Subject()

let obs1 = new Observer(["text", "#hash1"])
let obs2 = new Observer(["#nature"])

s.Attach(obs1)
s.Attach(obs2)

let mess1 = new Message("hello", ["#hash1", "#hash2"], "text", "What's up!").Inform(s)
let mess2 = new Message("some photo", ["#nature"], "photo", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.medicalnewstoday.com%2Farticles%2F325466&psig=AOvVaw3xHDSZyPqkQjk5tharaks-&ust=1608733888108000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODf1fbm4e0CFQAAAAAdAAAAABAD").Inform(s)

