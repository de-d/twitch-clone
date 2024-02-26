import { Box } from "@mui/material";
import { topCategory } from "../../redux/types";

type CategoryCardProps = {
  category: topCategory;
};
const getBoxArtUrl = (boxArtUrl: string, width: number, height: number): string => {
  return boxArtUrl.replace("{width}", width.toString()).replace("{height}", height.toString());
};

function CategoriesCard({ category }: CategoryCardProps) {
  const boxArtUrl = getBoxArtUrl(category.box_art_url, 135, 189);

  return (
    <Box>
      <Box>
        <img src={boxArtUrl} alt={category.name} style={{ width: "135px", height: "189px" }} />
      </Box>
      <Box>
        <p style={{ textAlign: "start", fontFamily: "Inter, sans-serif", fontSize: "14px", color: "white", fontWeight: "bold" }}>{category.name}</p>
      </Box>
    </Box>
  );
}

export default CategoriesCard;
