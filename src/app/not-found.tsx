export default function NotFound() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <header style={{ margin: "100px 0", fontSize: "100px", fontWeight: 500 }}>
        이런...
      </header>
      <p style={{ marginBottom: "50px" }}>이 페이지는 404 페이지입니다.</p>
      <span
        style={{
          fontSize: "500px",
          color: "grey",
          opacity: 0.15,
          top: "0",
          position: "absolute",
        }}
      >
        404
      </span>
    </section>
  );
}
