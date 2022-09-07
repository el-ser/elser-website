export const backgroundResizeCallback = (entries) => {
  const backgroundNode = document.getElementById("background-container");
  if (entries[0].isIntersecting && window.pageYOffset < 100) {
    // update width from 175% to 100%
    backgroundNode.classList.add("w-full");
    backgroundNode.classList.remove("w-[175%]");

    // update background opacity from 40% to 100%
    backgroundNode.classList.remove("opacity-40");
    backgroundNode.classList.add("opacity-100");
  } else {
    // update width from 100% to 175%
    backgroundNode.classList.remove("w-full");
    backgroundNode.classList.add("w-[175%]");

    // update background opacity from 100% to 40%
    backgroundNode.classList.remove("opacity-100");
    backgroundNode.classList.add("opacity-40");
  }
};

export const applySnap = (query) => {
  const selectorRef = document.querySelector(query);
  selectorRef.classList.add("snap-y");
  selectorRef.classList.add("snap-mandatory");
};

export const removeSnap = (query) => {
  const selectorRef = document.querySelector(query);
  selectorRef.classList.remove("snap-y");
  selectorRef.classList.remove("snap-mandatory");
};
