export function Part() {
  return (
    <>
      <h3 style={{ marginBottom: "1rem" }}>Veja nossa produção teatral!</h3>

      <img width={"100%"} src="teatro.jpeg" />

      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/z-THLnErZ44?si=-JbFVJ5hON5Abj5M"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </>
  );
}
