export const backgroundResizeCallback = (entries) => {
  const backgroundElement = document.getElementById("background-container");
  if (entries[0].isIntersecting && window.pageYOffset < 100) {
    backgroundElement.classList.replace("w-[175%]", "w-full");
    backgroundElement.classList.replace("opacity-40", "opacity-100");
    backgroundElement.classList.replace("left-0", "left-[5%]");
    backgroundElement.classList.add("md:max-w-[85%]");
  } else {
    backgroundElement.classList.replace("w-full", "w-[175%]");
    backgroundElement.classList.replace("opacity-100", "opacity-40");
    backgroundElement.classList.replace("left-[5%]", "left-0");
    backgroundElement.classList.remove("md:max-w-[85%]");
  }

  const introTextElement = document.getElementById("intro-text");
  if (entries[0].isIntersecting && window.pageYOffset < 100) {
    introTextElement.classList.replace("hidden", "block");
  } else {
    introTextElement.classList.replace("block", "hidden");
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
