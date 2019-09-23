import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import LinearProgress from "@material/react-linear-progress";
import { Snackbar } from "@material/react-snackbar";
import NoteCard from "./NoteCard";

const NoteList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    function postData(url = ``, data = {}) {
        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(data) 
        }).then(response => response.json());
    }

    const addItems = (array, isTop) => {
        const notes = [];
        array.forEach(element => {
            notes.push(
                <NoteCard
                    title={element.title}
                    description={element.description}
                    key={element.uuid}
                />
            );
        });
        isTop ? setItems(notes.concat(items))
        : setItems(items.concat(notes));

        if(items.length > 30 && false){
            isTop ? setItems(notes.concat(items).splice(0, items.length))
            : setItems(items.concat(notes).splice(-items.length, items.length));
        }
    }

    const fetchData = () => {
        const url = "http://192.168.0.240/data/randomcards.php";
        const data = {
            number: 8,
            uuid: items.length ? (items[items.length - 1].key) : 0
        };

        postData(url, data).then(json => {
            setTimeout(() => {
                addItems(json, false);
            }, 0);
        });
    };

    const refresh = () => {
        const url = "http://192.168.0.240/data/randomcards.php";
        const data = {
            number: 6,
            uuid: items.length ? (items[0].key) : 0,
            refresh: true
        };

        postData(url, data).then(json => {
            setTimeout(() => {
                addItems(json, true);
            }, 0);
        });
    };

    return (
        <div>
            <InfiniteScroll
                dataLength={items.length} //This is important field to render the next data
                next={fetchData}
                hasMore={true}
                loader={<LinearProgress indeterminate />}
                endMessage={
                    <p style={{ textAlign: "center" }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
                // below props only if you need pull down functionality
                refreshFunction={refresh}
                pullDownToRefresh
                pullDownToRefreshContent={
                    <h3 style={{ textAlign: "center" }}>
                        &#8595; Pull down to refresh
                    </h3>
                }
                releaseToRefreshContent={
                    <h3 style={{ textAlign: "center" }}>
                        &#8593; Release to refresh
                    </h3>
                }
            >
                <div className="notelist">{items}</div>
            </InfiniteScroll>
        </div>
    );
};

export default NoteList;
