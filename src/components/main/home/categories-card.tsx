import { Box } from "@mui/material";
import { topCategory } from "../../../redux/types";
import { Link } from "react-router-dom";

type CategoryCardProps = {
  category: topCategory;
};
const getBoxArtUrl = (boxArtUrl: string, width: number, height: number): string => {
  return boxArtUrl.replace("{width}", width.toString()).replace("{height}", height.toString());
};

function CategoriesCard({ category }: CategoryCardProps) {
  const boxArtUrl = getBoxArtUrl(category.box_art_url, 135, 189);

  return (
    <Box
      sx={{
        position: "relative",
        ":hover": {
          cursor: "pointer",
          "& img": {
            transform: "translate(5px, -5px)",
          },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "135px",
            height: "189px",
            backgroundColor: "#9147ff",
            borderRadius: "5px",
            transition: "transform 0.2s ease-in-out",
          },
        },
      }}
    >
      <Link to={`/category/${category.id}`} style={{ textDecoration: "none" }}>
        <Box>
          <img
            src={boxArtUrl}
            alt={category.name}
            style={{
              width: "135px",
              height: "189px",
              borderRadius: "5px",
              transition: "transform 0.2s ease-in-out",
              position: "relative",
            }}
          />
        </Box>
      </Link>
      <Box>
        <p
          style={{
            width: "135px",
            textAlign: "start",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          {category.name}
        </p>
      </Box>
    </Box>
  );
}

export default CategoriesCard;
