import React from "react";
import Card, {
    CardPrimaryContent,
    CardMedia,
    CardActions,
    CardActionButtons,
    CardActionIcons
} from "@material/react-card";
import Button from "@material/react-button";
import { Headline6, Subtitle2, Body1 } from "@material/react-typography";
import MaterialIcon from "@material/react-material-icon";
import IconButton, { IconToggle } from "@material/react-icon-button";
import PieGraph from "./PieGraph";
import { Link } from "react-router-dom/cjs/react-router-dom";

const NoteCard = ({image = '/logo512.png', title='title', description='description'}) => {
    return (
        <Card>
            <Link to="/user/id">
                <CardPrimaryContent>
                    <div className="card__header">
                        {
                            image ?
                            <CardMedia
                                square
                                imageUrl={image}
                                className="card__media"
                            />: ''
                            }
                        <div className="card__primary">
                            <Headline6 className="card__title" tag="h2">
                                {title}
                            </Headline6>
                            <Subtitle2 className="card__subtitle" tag="h3">
                                by %Author%
                            </Subtitle2>
                        </div>
                    </div>
                    <Body1 className="description">{description}</Body1>
                </CardPrimaryContent>
            </Link>
            <CardActions>
                <CardActionButtons>
                    <Button>Normal</Button>
                    <Button>Random</Button>
                </CardActionButtons>
                <CardActionIcons>
                    <IconButton>
                        <IconToggle isOn>
                            <MaterialIcon icon="favorite" />
                        </IconToggle>
                        <IconToggle>
                            <MaterialIcon icon="favorite_border" />
                        </IconToggle>
                    </IconButton>
                    <div className="fav_number">10</div>
                    <IconButton>
                        <MaterialIcon icon="more_vert" />
                    </IconButton>
                </CardActionIcons>
            </CardActions>
        </Card>
    );
};

export default NoteCard;
