import React, { useState, useRef, useEffect } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import ReactPlayer from "react-player";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import styles from "./VideoPlayer.module.css";
const useStyles = makeStyles((theme) => ({
  playerWrapper: {
    width: "100%",
    background: "transparent",
    position: "relative",
    border: "0px solid red",

  },

  controlsWrapper: {
    visibility: "hidden",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  topControls: {
    display: "flex",
    justifyContent: "flex-end",
    padding: theme.spacing(2),
  },
  middleControls: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomWrapper: {
    display: "flex",
    flexDirection: "column",

    // background: "rgba(0,0,0,0.6)",
    // height: 60,
    padding: theme.spacing(2),
  },

  bottomControls: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // height:40,
  },

  button: {
    margin: theme.spacing(1),
  },
  controlIcons: {
    color: "#777",

    fontSize: 50,
    transform: "scale(0.9)",
    "&:hover": {
      color: "#fff",
      transform: "scale(1)",
    },
  },

  bottomIcons: {
    color: "#999",
    "&:hover": {
      color: "#fff",
    },
  },

  volumeSlider: {
    width: 100,
  },
}));


let count = 0;

function Helper(props) {
  const classes = useStyles();
  // const [bookmarks, setBookmarks] = useState([]);
  const [state, setState] = useState({
    pip: false,
    playing: true,
    controls: false,
    light: false,

    muted: true,
    played: 0,
    duration: 0,
    playbackRate: 1.0,
    volume: 1,
    loop: false,
    seeking: false,
  });

  //  console.log(obfuscatedURL.title);
  

  const playerRef = useRef(null);
  const playerContainerRef = useRef(null);
  const controlsRef = useRef(null);
  const canvasRef = useRef(null);
  const [width, setWidth] = useState(0);

  // useEffect(() => {
  //   setWidth(props.width);
  // }, [props.width]);

  const {
    playing,
    controls,
    light,

    muted,
    loop,
    playbackRate,
    pip,
    played,
    seeking,
    volume,
  } = state;

  

  const handleProgress = (changeState) => {
    if (count > 3) {
      controlsRef.current.style.visibility = "hidden";
      count = 0;
    }
    if (controlsRef.current.style.visibility == "visible") {
      count += 1;
    }
    if (!state.seeking) {
      setState({ ...state, ...changeState });
    }
  };

  
  const handleMouseMove = () => {
    //  console.log("mousemove");
    controlsRef.current.style.visibility = "visible";
    count = 0;
  };

  const hanldeMouseLeave = () => {
    controlsRef.current.style.visibility = "hidden";
    count = 0;
  };

  const addBookmark = () => {
    const canvas = canvasRef.current;
    canvas.width = 160;
    canvas.height = 90;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      playerRef.current.getInternalPlayer(),
      0,
      0,
      canvas.width,
      canvas.height
    );
    const dataUri = canvas.toDataURL();
    canvas.width = 0;
    canvas.height = 0;
    const bookmarksCopy = [...bookmarks];
    bookmarksCopy.push({
      time: playerRef.current.getCurrentTime(),
      display: format(playerRef.current.getCurrentTime()),
      image: dataUri,
    });
    setBookmarks(bookmarksCopy);
  };

  return (
    <>
      <Container>
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={hanldeMouseLeave}
          ref={playerContainerRef}
          className={`${classes.playerWrapper} ${styles.playerWrapper}`}
        >
          {props.obfuscatedURL && (
          <ReactPlayer
            ref={playerRef} 
            download={false}
            url={`${import.meta.env.VITE_SERVER_URL}/videos/sendvideo/${props.obfuscatedURL}`}
            pip={pip}
            className={`react-player ${styles.reactPlayer}`}
            playing={!playing}
            controls
            
            light={light}
            loop={false}
            playbackRate={playbackRate}
            volume={volume}
            muted={!muted}
            onProgress={handleProgress}
            onContextMenu={(e) => e.preventDefault()} 
            
            config={{
              file: {
                attributes: {
                  crossorigin: "anonymous",
                  controlsList: "nodownload",
                },
              },
            }}
          />)}

        </div>


      </Container>
    </>
  );
}

export default Helper;