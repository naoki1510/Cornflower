import React from "react";
import Card, {
    CardPrimaryContent,
    CardMedia,
    CardActions,
    CardActionButtons,
    CardActionIcons
} from "@material/react-card";
import Button from "@material/react-button";
import { Headline6, Subtitle2 } from "@material/react-typography";
import MaterialIcon from "@material/react-material-icon";
import IconButton from "@material/react-icon-button";
import PieGraph from "./PieGraph";

const Note = () => {
    const image = "/logo512.png";

    return (
        <Card>
            <CardPrimaryContent>
                <CardMedia
                    square
                    imageUrl={image}
                    className="card__media"
                />
                <div className="card__primary">
                    <Headline6 className="card__title" tag="h2">
                        Our Changing Planet
                    </Headline6>
                    <Subtitle2 className="card__subtitle" tag="h3">
                        by Kurt Wagner
                    </Subtitle2>
                </div>
            </CardPrimaryContent>
                <PieGraph />
            <CardActions>
                <CardActionButtons>
                    <Button>Read</Button>
                    <Button>Bookmark</Button>
                </CardActionButtons>
                <CardActionIcons>
                    <IconButton>
                        <MaterialIcon icon="favorite_border" />
                    </IconButton>
                    <IconButton>
                        <MaterialIcon icon="share" />
                    </IconButton>
                    <IconButton>
                        <MaterialIcon icon="more_vert" />
                    </IconButton>
                </CardActionIcons>
            </CardActions>
        </Card>
    );
};

export default Note;
