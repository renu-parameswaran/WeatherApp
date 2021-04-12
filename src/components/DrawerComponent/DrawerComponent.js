import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

export default function DrawerComponent({ state, onClickHandleprops, menuprops, style }) {
    return (
        <Drawer
            className={style[0]}
            variant="persistent"
            anchor="left"
            open={state}
            classes={{
                paper: style[1],
            }}
        >
            <div className={style[2]}>
                <IconButton onClick={onClickHandleprops}>
                    {style[3].direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </div>
            <Divider />
            <List>
                {menuprops.map((menu, index) => (
                    <Link style={{ color: "#2A708E" }} to={menu.keyName} key={menu.keyName}>
                        <ListItem button>
                            <ListItemIcon key={menu.keyName}>
                                {index % 2 === 0 ? <HomeIcon /> : <SearchIcon />}
                            </ListItemIcon>
                            <ListItemText primary={menu.displayName} />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Drawer>
    );
}
