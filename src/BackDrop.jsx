import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import "./BackDrop.css";

function BackDrop({ progress }) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(progress);
  }, [progress]);

  return (
    <div>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1000000000,
        }}
        open={open}
      >
        <div className="spinner-box">
          <div className="configure-border-1">
            <div className="configure-core" />
          </div>
          <div className="configure-border-2">
            <div className="configure-core" />
          </div>
        </div>
      </Backdrop>
    </div>
  );
}

export default BackDrop;
