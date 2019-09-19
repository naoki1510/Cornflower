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
import { Link } from "react-router-dom/cjs/react-router-dom";
import AchievementChart from "./AchievementChart";

const NoteDetail = props => {
    return (
        <div className="notedetail">
            <Card onClick={console.log(props)}>
                <CardPrimaryContent>
                    <div className="card__header">
                        <div className="card__primary">
                            <Headline6 className="card__title" tag="h2">
                                達成度
                            </Headline6>
                            <Subtitle2 className="card__subtitle" tag="h3">
                                Achivement
                            </Subtitle2>
                        </div>
                    </div>
                    <AchievementChart />
                </CardPrimaryContent>
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
        </div>
    );
};

export default NoteDetail;
