export function Comment({ name, comment, image, ig }) {
  return (
    <a href={ig}>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "1rem",
          marginBottom: "1rem",
        }}
      >
        <div>
          <img
            style={{
              width: "30px",
              height: "30px",
              objectFit: "contain",
              borderRadius: "50%",
              border: "1px solid #ef248d",
              borderColor: ig ? "#00FF55" : "#ef248d",
            }}
            src={
              image
                ? image
                : "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png"
            }
          />
        </div>
        <div>
          <h6 style={{ color: "#ef248d" }}>{name}</h6>
          <p style={{ fontSize: "0.8rem", color: "#B39AB1" }}>{comment}</p>
        </div>
        {ig && (
          <img
            style={{
              width: "10px",
              position: "absolute",
              left: "5px",
            }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1024px-Instagram-Icon.png"
          />
        )}
      </div>
    </a>
  );
}
