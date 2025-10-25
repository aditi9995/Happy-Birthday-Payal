// Import the data to customize and insert them into page
const fetchData = () => {
  fetch("customize.json")
    .then(data => data.json())
    .then(data => {
      dataArr = Object.keys(data);
      dataArr.map(customData => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document
              .querySelector(`[data-node-name*="${customData}"]`)
              .setAttribute("src", data[customData]);
          } else {
            document.querySelector(`[data-node-name*="${customData}"]`).innerText = data[customData];
          }
        }

        // Check if the iteration is over
        // Run amimation if so
        if ( dataArr.length === dataArr.indexOf(customData) + 1 ) {
          animationTimeline();
        } 
      });
    });
};

// Animation Timeline
const animationTimeline = () => {
  // Spit chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg"
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg"
  };

  const tl = new TimelineMax();

  tl
    .to(".container", 0.1, {
      visibility: "visible"
    })
    .from(".one", 0.7, {
      opacity: 0,
      y: 10
    })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10
    })
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=2.5"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "-=1"
    )
    .from(".three", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".three",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=2"
    )
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0
    })
    .staggerTo(
      ".hbd-chatbox span",
      0.5,
      {
        visibility: "visible"
      },
      0.05
    )
    .to(".fake-btn", 0.1, {
      backgroundColor: "rgb(127, 206, 248)"
    })
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150
      },
      "+=0.7"
    )
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff"
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0
      },
      "+=0.5"
    )
    .to(
      ".idea-5 .smiley",
      0.7,
      {
        rotation: 90,
        x: 8
      },
      "+=0.4"
    )
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0
      },
      "+=2"
    )
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut
      },
      0.2,
      "+=1"
    )
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400
      },
      {
        opacity: 1,
        y: -1000
      },
      0.2
    )
    .from(
      ".lydia-dp",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45
      },
      "-=2"
    )
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5)
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg"
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4
      },
      0.3
    )
    .to(".six", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1"
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      0.5,
      {
        rotation: 90
      },
      "+=1"
    );

  // tl.seek("currentStep");
  // tl.timeScale(2);

  // Restart Animation on click
  // const replyBtn = document.getElementById("replay");
  // replyBtn.addEventListener("click", () => {
  //   window.location.href = "2/index2.html"
  // });
  const replyBtn = document.getElementById("replay");

  replyBtn.addEventListener("click", () => {
  // overlay
  const overlay = document.createElement("div");
  Object.assign(overlay.style, {
    position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
    backgroundColor: "black", zIndex: 9999, display: "flex",
    justifyContent: "center", alignItems: "center"
  });
  document.body.appendChild(overlay);

  // single video element
  const video = document.createElement("video");
  video.controls = false;
  video.autoplay = false;
  video.muted = false; // keep sound; iPhone needs one user gesture
  video.playsInline = true;
  video.setAttribute("webkit-playsinline", "true");
  Object.assign(video.style, {
    width: "100%", height: "100%", objectFit: "contain", zIndex: 10000
  });
  overlay.appendChild(video);

  // buttons
  const makeBtn = (text) => {
    const b = document.createElement("button");
    b.textContent = text;
    Object.assign(b.style, {
      position: "fixed", bottom: "25px", left: "50%", transform: "translateX(-50%)",
      padding: "12px 24px", backgroundColor: "#fff", color: "#000",
      border: "none", borderRadius: "8px", fontSize: "16px", cursor: "pointer",
      zIndex: 10001, display: "none"
    });
    overlay.appendChild(b);
    return b;
  };
  const nextBtn1 = makeBtn("▶ Next to Video 2");
  const nextBtn2 = makeBtn("💖 Go to Card");

  // state: 1 = playing first, 2 = playing second
  let state = 0;

  // helper: start playing a source (handles Safari quirks)
  const playSource = (src) => {
    state = (src.includes("gift2") || src.includes("second")) ? 2 : 1;
    // set and load
    video.pause();
    video.removeAttribute('src');
    video.src = src;
    video.load();

    // small delay helps Safari accept the new source
    setTimeout(() => {
      const p = video.play();
      if (p !== undefined) {
        p.catch((err) => {
          // autoplay blocked — wait for a user tap on overlay
          console.log("play() blocked:", err);
          overlay.addEventListener("click", function onTap() {
            overlay.removeEventListener("click", onTap);
            video.play().catch(e => console.warn("play still blocked:", e));
          }, { once: true });
        });
      }
    }, 120); // 100-200ms works for many Safari versions
  };

  // iPhone/Android: require the initial tap to allow audio playback
  const beginOnTap = () => {
    overlay.removeEventListener("click", beginOnTap);
    // start first video (change this filename if needed)
    playSource("short.mp4");
  };
  overlay.addEventListener("click", beginOnTap, { once: true });

  // when video ends, decide what to show/do
  const onEnded = () => {
    if (state === 1) {
      // first video finished -> show Next button 1
      nextBtn1.style.display = "block";
    } else if (state === 2) {
      // second finished -> show final Next button
      nextBtn2.style.display = "block";
    }
  };
  video.addEventListener("ended", onEnded);

  // Next button 1: play second video
  nextBtn1.addEventListener("click", () => {
    nextBtn1.style.display = "none";
    // start second video (file on GH Pages is gift2.mp4 / gift2.mp4)
    playSource("gift2.mp4");
  });

  // Next button 2: go to card
  nextBtn2.addEventListener("click", () => {
    window.location.href = "gift3/index3.html";
  });

  // defensive cleanup if user navigates away from overlay
  const removeOverlay = () => {
    video.pause();
    video.src = "";
    overlay.remove();
    window.removeEventListener("beforeunload", removeOverlay);
  };
  window.addEventListener("beforeunload", removeOverlay);
});
  
};

// Run fetch and animation in sequence
fetchData();
