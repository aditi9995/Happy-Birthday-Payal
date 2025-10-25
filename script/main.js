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
  video.muted = false;
  video.playsInline = true;
  video.setAttribute("webkit-playsinline", "true");
  Object.assign(video.style, {
    width: "100%", height: "100%", objectFit: "contain", zIndex: 10000
  });
  overlay.appendChild(video);

  // function to create a button
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

  let state = 0; // 1 = first video, 2 = second video

  // helper: play video source safely
  const playSource = (src) => {
    state = src.includes("gift2") ? 2 : 1;
    video.pause();
    video.removeAttribute("src");
    video.src = src;
    video.load();

    // safety: skip to card if video fails to load within 6s
    const timeout = setTimeout(() => {
      console.warn(`${src} not playing — skipping to card`);
      skipToCard();
    }, 6000);

    // attempt to play after a short delay
    setTimeout(() => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => clearTimeout(timeout))
          .catch((err) => {
            console.warn("Autoplay blocked or failed:", err);
            clearTimeout(timeout);
            // fallback: tap overlay to start
            overlay.addEventListener("click", function onTap() {
              overlay.removeEventListener("click", onTap);
              video.play().catch(() => skipToCard());
            }, { once: true });
          });
      }
    }, 150);
  };

  // function to skip directly to card
  const skipToCard = () => {
    window.location.href = "gift3/index3.html";
  };

  // first video trigger
  const beginOnTap = () => {
    overlay.removeEventListener("click", beginOnTap);
    playSource("short.mp4"); // your first video
  };
  overlay.addEventListener("click", beginOnTap, { once: true });

  // handle video end
  video.addEventListener("ended", () => {
    if (state === 1) {
      nextBtn1.style.display = "block";
    } else if (state === 2) {
      nextBtn2.style.display = "block";
    }
  });

  // handle playback errors
  video.addEventListener("error", () => {
    console.error("Video playback error:", video.src);
    skipToCard();
  });

  // button: go to second video
  nextBtn1.addEventListener("click", () => {
    nextBtn1.style.display = "none";
    playSource("gift2.mp4"); // your second video
  });

  // button: go to card
  nextBtn2.addEventListener("click", skipToCard);

  // cleanup
  window.addEventListener("beforeunload", () => {
    video.pause();
    video.src = "";
    overlay.remove();
  });
});
  
};

// Run fetch and animation in sequence
fetchData();
