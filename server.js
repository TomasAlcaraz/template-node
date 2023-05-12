import app from "./index";
const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

server.on("error", (error) => console.log(`Error en servidor ${error}`));
