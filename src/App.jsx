import "./styles/theme.css";
import "./styles/global.css";
import { MyText } from "./components/MyText";

export default function App() {
  const texts=[
    {title: "Meu título 1", text: "Meu texto 1"},
    {title: "Meu título 2", text: "Meu texto 2"},
    {title: "Meu título 3", text: "Meu texto 3"},
    {title: "Meu título 4", text: "Meu texto 4"},
    {title: "Meu título 5", text: "Meu texto 5"}
  ];

  return (
    // React Fragment
    <>  {texts.map((text, index) => {
    return (
      <MyText key = {index} title = {` ${text.title} ${index + 1} `}>
        {text.text}
      </MyText>
    );
  })}
  </>
  );
}