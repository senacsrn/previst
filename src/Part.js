export function Part() {
  return (
    <>
      <h3 style={{ marginBottom: "1rem" }}>Veja nossa produção teatral!</h3>

      <img width={"100%"} src="teatro.jpeg" />

      <iframe
        width="100%"
        height="200px"
        src="https://www.youtube.com/embed/YnF97SDx8w0?si=478AFZXnqxox4yaw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </>
  );
}
