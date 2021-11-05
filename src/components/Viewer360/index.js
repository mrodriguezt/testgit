import { useEffect, useState } from "react";

export default function Viewer360(props) {
  const model = String(props?.model).toLocaleLowerCase();
  const [size, setSize] = useState({});

  useEffect(() => {
    let width = window.innerWidth;
    let height = window.innerHeight;

    width = width > 880 ? 880 : width - 16;
    height = width < 600 ? 580 : 800;

    setSize({
      width,
      height,
    });
  }, []);

  return (
    <div className="d-flex justify-content-center w-100">
      <iframe
        src={`/viewer360/${model}/large/main.html`}
        width={`${size.width}px`}
        height={`${size.height}px`}
        style={{ border: "none", overflow: "hidden" }}
      ></iframe>
    </div>
  );
}
