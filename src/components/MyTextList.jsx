import styles from "./MyTextList.module.css";
import { MyText } from "./MyText";

export function MyTextList() {
  const texts = [
    { title: "Meu título", text: "Meu texto" },
    { title: "Meu título", text: "Meu texto" },
    { title: "Meu título", text: "Meu texto" },
    { title: "Meu título", text: "Meu texto" },
    { title: "Meu título", text: "Meu texto" },
    { title: "Meu título", text: "Meu texto" },
  ];

  return (
    <>
      <h1 className={styles.title}>Lista de Textos</h1>
      <div className={styles.container}>
        {texts.map((text, index) => {
          return (
            <MyText key={index} title={`${text.title} ${index + 1}`}>
              {text.text}
            </MyText>
          );
        })}
      </div>
    </>
  );
}