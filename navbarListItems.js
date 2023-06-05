import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";

export const mainNavbarItems = [
  {
    id: 0,
    icon: <VideogameAssetIcon />,
    label: "Retro Games List",
    route: "route",
  },
  {
    id: 1,
    icon: <PlayCircleOutlineIcon />,
    label: "Game Media",
    route: "route",
  },
  {
    id: 2,
    icon: <SportsEsportsIcon />,
    label: "Retro Consoles",
    route: "route",
  },
  {
    id: 3,
    icon: <DesktopWindowsIcon />,
    label: "About",
    route: "route",
  },
];

export default mainNavbarItems;
