import { Button, Typography } from "@mui/material";
import Bits1 from "../../../assets/bits/bits1.png";
import Bits100 from "../../../assets/bits/bits100.png";
import Bits1000 from "../../../assets/bits/bits1000.png";
import Bits5000 from "../../../assets/bits/bits5000.png";
import Bits10000 from "../../../assets/bits/bits10000.png";

function BitsPopperContent({ bits, price }: { bits: number; price: number }) {
  let bitsIcons;
  if (bits <= 99) {
    bitsIcons = [Bits1];
  } else if (bits <= 999) {
    bitsIcons = [Bits1, Bits100];
  } else if (bits <= 4999) {
    bitsIcons = [Bits1, Bits100, Bits1000];
  } else if (bits <= 9999) {
    bitsIcons = [Bits1, Bits100, Bits1000, Bits5000];
  } else {
    bitsIcons = [Bits1, Bits100, Bits1000, Bits5000, Bits10000];
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        color: "white",
      }}
    >
      <div>
        <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>{bits} Bits</Typography>
        {bitsIcons.map((icon, index) => (
          <img key={index} src={icon} style={{ width: "20px", height: "20px" }} alt={`bits${index + 1}`} />
        ))}
      </div>
      <Button
        sx={{
          width: "95px",
          height: "30px",
          color: "white",
          fontWeight: "bold",
          bgcolor: "#9147FF",
          "&:hover": {
            bgcolor: "#9147DD",
          },
        }}
      >
        RUB {price}
      </Button>
    </div>
  );
}

export default BitsPopperContent;
