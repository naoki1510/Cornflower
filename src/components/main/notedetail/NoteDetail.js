import React from "react";
import Card, {
    CardPrimaryContent,
    CardMedia,
    CardActions,
    CardActionButtons,
    CardActionIcons
} from "@material/react-card";
import Button from "@material/react-button";
import { Headline2, Subtitle1 } from "@material/react-typography";
import MaterialIcon from "@material/react-material-icon";
import IconButton from "@material/react-icon-button";
import { Link } from "react-router-dom/cjs/react-router-dom";
import AchievementChart from "./AchievementChart";

const NoteDetail = props => {
    return (
        <div className="notedetail">
            <div className="card__header">
                <div className="card__primary">
                    <Headline2 className="card__title">Book Title</Headline2>
                    <Subtitle1 className="card__subtitle" tag="h3">
                        subtitle
                    </Subtitle1>
                </div>
            </div>
            <AchievementChart />
        </div>
    );
};

export default NoteDetail;
